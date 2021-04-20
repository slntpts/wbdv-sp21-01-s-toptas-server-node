const express = require('express')
const app = express()
// const dotenv = require('dotenv').config();
// dotenv.load()
app.listen(process.env.PORT || 4000);

//TODO: visit https://expressjs.com/en/3x/api.html
// configure CORS like we did with CrossOrigin in server-java
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers',
        'Content-Type, X-Requested-With, Origin');
    res.header('Access-Control-Allow-Methods',
        'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    next();
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());


const uri = "mongodb+srv://myusername:Password@cluster0.ciade.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const mongoose = require('mongoose');//importing the mongoose library-looking for in mongoose in node-modules and exports is stored in mongoose variable
// mongoose.connect('mongodb://localhost:27017/whiteboard-01', {useNewUrlParser: true, useUnifiedTopology: true});//connects to database

// if(process.env.MONGODB_URI) {
    mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});//connects to database
// }

require('./controllers/quizzes-controller')(app)
require('./controllers/questions-controller')(app)
require('./controllers/quiz-attempts-controller')(app)


const demos = require('./controllers/demos-controller');
demos(app)

// const quizzesController = require("./controllers/quizzes-controller");
// quizzesController(app)

// app.listen(4000)






