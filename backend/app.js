var express = require('express');
var { animes, animes_cs } = require('./data/anime_data.js');
var { model, reset_weights, predict } = require('./model/model.js');
var app = express();
app.use(express.json());
// anime details and recommendations
app.get('/anime/:id/:num?', function (req, res) {
    var num = parseInt(req.params.num, 10);
    if(!num){
        num=10;
    }
    res.json({
        "details": {"id":req.params.id,...animes[req.params.id]},
        "recommendations": animes_cs[req.params.id].slice(1, num+1).map((i) => {
            return {"id":i,...animes[i]};
        })
    });
});

app.get('/', function (req, res) {
    res.send(animes['20']);
});

// user recommendations
app.post('/recommendations/', function (req, res) {
    console.log("recieved " + req.body.anime.length + " " + req.body.scores.length);
    predict(req.body.anime,req.body.scores).then((x)=>{
        res.json({"recommendations":x.map((i)=>{
            return {"id":i,...animes[i]};
        })});
        console.log("responded");
    });
});
app.listen(3000);