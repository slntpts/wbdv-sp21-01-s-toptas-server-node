const quizAttemptDao = require('../daos/quiz-attempts-dao')

module.exports = (app) => {

    const createQuizAttempt = (req, res) => {

        console.log(req.body)
        quizAttemptDao.createAttempt( req.params.qid, req.body)
            .then(attempt => res.send(attempt))
    }

    const findQuizAttempts = (req, res) => {
        quizAttemptDao.findAttemptsForQuiz(req.params.qid)
            .then(attempts => res.send(attempts))
    }

    app.post('/api/quizzes/:qid/attempts', createQuizAttempt)
    app.get('/api/quizzes/:qid/attempts', findQuizAttempts)

}
