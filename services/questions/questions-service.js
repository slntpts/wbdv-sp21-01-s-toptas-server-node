const questions = require('./questions.json')
// let questions = require('./questions.json')

const createQuestion = () => {}
const createQuestionForQuiz = () => {}

const findAllQuestions = () => {
    return questions;
}
const findQuestionsForQuiz = (qzId) => {
    return questions.filter((question) => {
        return question.quizId === qzId;
    })
}

const findQuestionById = (quid) => {
        return questions.find((question) => {
            return question._id === quid;
    });
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
