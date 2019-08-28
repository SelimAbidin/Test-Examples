const express = require('express');
const app = express();
const session = require('express-session')


app.use(session({
    secret:'my lil secret',
    resave: false,
    saveUninitialized: true,
}))

app.get('/login/:name', (req, res) => {
    let {name} = req.params
    req.session.name = name
    res.send('success')
})


app.get('/admin', (req, res) => {

    if(typeof req.session.name !== 'string') {
        res.status(401).send('Not authorized')
    } else {
        res.status(200).send('Hello User ' + req.session.name)
    }
})

app.use(require('./default-router'))




module.exports = {
    app
}