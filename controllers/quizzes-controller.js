
//Controllers deal with all things HTTP
//Controllers sits between two worlds: the HTTP world and the JavaScript object roles
//Services responsibility is dealing with data
module.exports = (app) => {
    const quizzesService = require("../services/quizzes/quizzes-service")

    //req, res allows us participating in client/server
    //architecture
    const findAllQuizzes = (req, res) => {
        // const quizzes = quizzesService.findAllQuizzes();//syncronous version
        // res.send(quizzes);
        quizzesService.findAllQuizzes() //asyncronous version
            .then((quizzes) => {
                res.send(quizzes)
            })
    }
    const findQuizById = (req, res) => {
        const quizId = req.params['quizId']
        // const quiz = quizzesService.findQuizById(quizId);
        // res.send(quiz)
        quizzesService.findQuizById(quizId)
            .then((quiz) => {
                res.send(quiz)
            })
    }

    app.get("/api/quizzes", findAllQuizzes)
    app.get("/api/quizzes/:quizId", findQuizById)
}