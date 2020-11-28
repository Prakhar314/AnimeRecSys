var express = require('express');
var cors = require('cors');

var app = express();

app.use(express.json());

var corsOptions = {
  origin: 'https://3000-ee5b1d4b-8ad5-42be-bb48-383cfcbc1baa.ws-us02.gitpod.io',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(corsOptions));

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

app.listen(5000);