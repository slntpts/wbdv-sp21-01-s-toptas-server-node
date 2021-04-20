//plays role like repository
const questionsSchema = require("./questions-schema")
const mongoose = require("mongoose")
const questionsModel = mongoose.model("QuestionModel", questionsSchema)

module.exports = questionsModel