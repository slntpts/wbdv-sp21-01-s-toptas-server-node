const questionService = require("../services/questions/questions-service")

module.exports = (app) => {
    // /api/quizzes/:qzid/questions
    const findQuestionsForQuiz = (req, res) => {
        const qzid = req.params.qzid;
        const questions = questionService.findQuestionsForQuiz(qzid)
        res.json(questions)
    }
    app.get("/api/quizzes/:qzid/questions", findQuestionsForQuiz)


    //api/questions
    const findAllQuestions = (req, res) => {
        const questions = questionService.findAllQuestions();
        res.send(questions)
    }
    app.get("/api/questions", findAllQuestions);
}








