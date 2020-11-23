
var { getAnime, getAnimeMin, getSimAnime, searchAnime, popularAnimes } = require('./data/anime_data.js');
var { model, reset_weights, predict } = require('./model/model.js');

let Queue = require('bull');
// Connect to a local redis intance locally, and the Heroku-provided URL in production
let REDIS_URL = process.env.REDIS_URL || 'redis://127.0.0.1:6379';

// Create / Connect to a named work queue
let workQueue = new Queue('work', REDIS_URL);
workQueue.process(predict);
// You can listen to global events to get notified when jobs are processed
workQueue.on('global:completed', (jobId, result) => {
    console.log(`Job completed with result ${result}`);
});
module.exports = function (app) {
    // anime details and recommendations
    app.get('/anime/:id/:num?', function (req, res) {
        var num = parseInt(req.params.num, 10);
        if (!num) {
            num = 10;
        }
        try {
            res.json({
                "details": getAnime(req.params.id),
                "recommendations": getSimAnime(req.params.id, num)
            });
        }
        catch (err) {
            res.status(500);
            res.send({ "error": err });
        }
    });

    app.get('/', function (req, res) {
        res.send(popularAnimes);
    });

    // user recommendations
    app.get('/recommendations/:num?', async function (req, res) {
        if(req.session.jobId!=null){
            let job = await workQueue.getJob(req.session.jobId);
            if(job!=null){
                let state = await job.getState();
                if(state=='completed'){
                    console.log("Removed "+req.session.jobId);
                    job.remove();
                }
                else{
                    res.status(404).send({"error":"ACTIVE_JOB"});
                    return;
                }
            }
        }
        let req_animes = req.body.animes;
        let req_scores = req.body.scores;
        let req_num = req.params.num;
        if (req_num == null) {
            req_num = 10;
        }

        if (req_animes == null || req_animes.length < 10) {
            res.status(500).send({ "error": "Must provide 10 animes" });
            return;
        }
        if (req_scores == null || req_scores.length != req_animes.length) {
            res.status(500).send({ "error": "Must provide same number of scores as number of anime" });
            return;
        }
        // req.session.animes = {'animes':req_animes,'scores':req_scores};
        // console.log(req.session.animes);
        console.log("recieved " + req_animes.length + " " + req_scores.length);

        let newJob = await workQueue.add({
            ids: req_animes,
            scores: req_scores,
            num: req_num,
        });
        req.session.jobId = newJob.id;
        let numWait = await workQueue.getWaitingCount();
        console.log("Added "+req.session.jobId);
        res.json({ id: newJob.id ,numWait});
    });

    app.get('/search/:q/:num?',(req,res)=>{
        res.send(searchAnime(req.params.q,req.body.incgenre,req.body.excgenre,req.params.num||5));
    });

    // Allows the client to query the state of a background job
    app.get('/job/', async (req, res) => {
        let id = req.session.jobId;
        let job = await workQueue.getJob(id);
        if (job === null) {
            res.status(404).send({
                message: 'No job'
            });
        } else {
            let state = await job.getState();
            let progress = job._progress;
            let reason = job.failedReason;
            let result = job.returnvalue;
            if (state == 'completed') {
                result = getAnimeMin(result.data);
            }
            res.json({ id, state, progress, reason, result });
        }
    });

    //  app.get('/savedrecommendations', function (req, res) {
    //     res.send(req.session.animes);
    //  });
}