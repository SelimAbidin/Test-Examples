var express = require('express');
var router = express.Router();

router.all('*', (req, res) => {
    
    const message = 'Page could not be found'
    res.status(404).format({
        'text/html': () => {
            res
            .set('Content-Type', 'text/html')
            .status(404)
            .send(`<h1>${message}</h1>`)
        },
        'text/plain': () => {
            res
            .set('Content-Type', 'text/plain')
            .status(200)
            .send(message)
        },
        'application/json': function () {
            res
            .set('Content-Type', 'application/json')
            .send({ message })
        },
        'default': function () {
            res.status(406).send('Not Acceptable')
        }
    })

})

module.exports = router