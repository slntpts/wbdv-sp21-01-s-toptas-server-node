//plays role like repository
const quizzesSchema = require("./quizzes-schema")
const mongoose = require("mongoose")
const quizzesModel = mongoose.model("QuizModel", quizzesSchema)//QuizModel needs to be unique

module.exports = quizzesModel