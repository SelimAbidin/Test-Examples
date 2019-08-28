const express = require('express');
const testRequest = require('supertest');
const assert = require('assert');
const router = require('../src/list-router')

describe('list-router test', () => {

    let app
    before( ()=>  {
        app = express();
        app.use(router)
    })

    it('get check  json accept 404', (done) => {

        testRequest(app)
        .get('/list')
        .set('Accept', 'application/json')
        .expect(404)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
            
            if (err) throw err;
            
            assert.ok(Array.isArray(res.body))
            done()
        })
    })

})