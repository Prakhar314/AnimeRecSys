var express = require('express');

var app = express();

app.use(express.json());

var cookieParser = require('cookie-parser');
app.use(cookieParser());

var session = require('express-session');
app.use(session({
    secret: "Shh, its a secret!",
    resave: false,
    cookie: {
        path: '/',
        maxAge: 24 * 3600 * 1000
    },
    saveUninitialized: false
}));

const rateLimit = require("express-rate-limit");
 
// Enable if you're behind a reverse proxy (Heroku, Bluemix, AWS ELB, Nginx, etc)
// see https://expressjs.com/en/guide/behind-proxies.html
app.set('trust proxy', 1);
 
const apiLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 10
});
 
// only apply to requests that begin with /api/
app.use("/recommendations/", apiLimiter);

require('./routes')(app);

app.listen(3000);