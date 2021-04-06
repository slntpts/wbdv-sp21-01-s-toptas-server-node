const express = require('express')
const app = express()

// configure CORS like we did with CrossOrigin in server-java
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers',
        'Content-Type, X-Requested-With, Origin');
    res.header('Access-Control-Allow-Methods',
        'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    next();
});


const demos = require('./controllers/demo-controller');
demos(app)

// const quizzesController = require("./controllers/quizzes-controller");
// quizzesController(app)
//instead
require("./controllers/quizzes-controller")(app)

app.listen(3000)