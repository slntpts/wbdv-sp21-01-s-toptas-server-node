// const questions = require('./questions.json')
// let questions = require('./questions.json')
// const questionsModel = require("../../models/questions/questions-model")
const questionsDao = require('../../daos/questions-dao')

const createQuestion = () => {}
const createQuestionForQuiz = () => {}

const findAllQuestions = () => {
    return questionsDao.findAllQuestions();
    // return questionsModel.find()
    // return questions;
}
const findQuestionsForQuiz = (qid) => {
    return questionsDao.findQuestionsForQuiz(qid)
    // return questionsModel.find({quizId: qzId})
    // return questions.filter((question) => {
    //     return question.quizId === qzId;
    // })
}

const findQuestionById = (qid) => {
    return questionsDao.findQuestionById(qid);
    // return questionsModel.findById(quid)
    //     return questions.find((question) => {
    //         return question._id === quid;
    // });

}
const updateQuestion = () => {}
const deleteQuestion = () => {}

module.exports = {
    createQuestion,
    findAllQuestions,
    findQuestionById,
    updateQuestion,
    deleteQuestion,
    createQuestionForQuiz,
    findQuestionsForQuiz
}
