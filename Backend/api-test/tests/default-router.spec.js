const express = require('express');
const testRequest = require('supertest');
const router = require('../src/default-router')
let path404 = '/random-adress-that-never-exists'

describe('default-router test', () => {

    let app
    before( ()=>  {
        app = express();
        app.use(router)
    })

    it('get check 404', () => {

        testRequest(app)
        .get(path404)
        .expect(404)
        .end(function(err, res) {
            if (err) throw err;
          });
    })

    it('get check  json accept 404', () => {

        testRequest(app)
        .get(path404)
        .set('Accept', 'application/json')
        .expect(404)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
            if (err) throw err;
        })
    })


})