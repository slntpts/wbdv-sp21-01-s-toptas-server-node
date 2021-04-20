
//const quizzes = require("./quizzes.json")
// const quizzesModel = require("../../models/quizzes/quizzes-model")
const quizzesDao = require('../../daos/quizzes-dao')

const findAllQuizzes = () => {
    return quizzesDao.findAllQuizzes();
    // return quizzesModel.find()//asyncronous
    //return quizzes;
}
const findQuizById = (qid) => {
    // return quizzesModel
    //     .findById(qid)
    //     .populate("quizzes")
    //     .exec()
    return quizzesDao
        .findQuizById(qid)
        .populate("quizzes")
        .exec()

    // return quizzes.find((quiz) => {
    //     return (quiz._id === qid)
    // })

}
const createQuiz = () => {}
const updateQuiz = () => {}
const deleteQuiz = () => {}

module.exports = {
    createQuiz,
    findAllQuizzes,
    findQuizById,
    updateQuiz,
    deleteQuiz
}

