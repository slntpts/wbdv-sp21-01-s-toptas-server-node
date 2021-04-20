const questionService = require("../services/questions/questions-service")

module.exports = (app) => {
    const findQuestionsForQuiz = (req, res) => {
        const quizId = req.params.quizId;
        // const questions = questionService.findQuestionsForQuiz(qzid)
        // res.json(questions)
        const questions = questionService.findQuestionsForQuiz(quizId)
            .then((questions) => {
                res.send(questions)
            })
    }

    //api/questions
    const findAllQuestions = (req, res) => {
        // const questions = questionService.findAllQuestions();
        // res.send(questions)
        questionService.findAllQuestions()
            .then((questions) => {
               res.send(questions)
            })
    }

    const findQuestionsById = (req, res) => {
        const qid = req.params._id;
        return questionService.findQuestionById(qid)
            .then((question) => {
                res.send(question)
            })
    }

    app.get("/api/quizzes/:quizId/questions", findQuestionsForQuiz)
    app.get("/api/questions", findAllQuestions);
    app.get("/api/questions/:qid", findQuestionsById);
}








