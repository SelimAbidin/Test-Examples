var express = require('express');
var router = express.Router();


const randomData = [
    {id:1, name:'Test 1'},       
    {id:2, name:'Test 2'},       
    {id:3, name:'Test 3'},       
    {id:4, name:'Test 4'},       
    {id:5, name:'Test 5'},       
    {id:6, name:'Test 6'},       
    {id:7, name:'Test 7'},       
    {id:8, name:'Test 8'},
    {id:9, name:'Test 9'},       
    {id:10, name:'Test 10'},       

]

router.get('/list', (req, res) => {

    res.status(404).format({
        'text/html': () => {
            res
            .set('Content-Type', 'text/html')
            .status(404)
            .send(`<ul>${randomData.map( i => `<li>${i.name}</li>`).join('')}</ul>`)
        }, 
        'application/json': function () {
            res
            .set('Content-Type', 'application/json')
            .send(randomData)
        },
        'default': function () {
            res.status(406).send('Not Acceptable')
        }
    })

})

module.exports = router