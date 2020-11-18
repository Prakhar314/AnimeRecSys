
var { getAnime, getAnimeMin, getSimAnime } = require('./data/anime_data.js');
var { model, reset_weights, predict } = require('./model/model.js');

module.exports = function (app) {
    // anime details and recommendations
    app.get('/anime/:id/:num?', function (req, res) {
        var num = parseInt(req.params.num, 10);
        if (!num) {
            num = 10;
        }
        try{
            res.json({
                "details": getAnime(req.params.id),
                "recommendations": getSimAnime(req.params.id, num)
            }); 
        }
        catch(err){
            res.status(500);
            res.send({"error":err});
        }
    });

    app.get('/', function (req, res) {
        res.send(getAnime(req.params.id));
    });

    // user recommendations
    app.get('/recommendations/', function (req, res) {
        req_animes=req.body.animes;
        req_scores=req.body.scores;

        if (req_animes == null || req_animes.length < 10) {
            res.status(500).send({"error":"Must provide 10 animes"});
            return;
        }
        if (req_scores == null || req_scores.length != req_animes.length) {
            res.status(500).send({"error":"Must provide same number of scores as number of anime"});
            return;
        }

        req.session.animes = {'animes':req_animes,'scores':req_scores};
        // console.log(req.session.animes);
        console.log("recieved " + req_animes.length + " " + req_scores.length);

        predict(req_animes, req_scores).then((x) => {
            res.json({
                "recommendations": x.map((i) => {
                    return getAnimeMin(i);
                })
            });
            console.log("responded");
        });
        
    });

     app.get('/recommendations/saved', function (req, res) {
        res.send(req.session.animes);
     });
}