const {app} = require('../src/app');
const testRequest = require('supertest');


describe('admin service with NO AUTH', () => {


    it('/admin servis without auth should return 401', () => {

        return testRequest(app)
        .get('/admin')
        .expect(401)
    
    })

})


describe('admin with AUTH', () => {

    var authenticatedRequest
    before(() => {
        authenticatedRequest = testRequest.agent(app);
        return authenticatedRequest
        .get('/login/:john')
        .expect(200)
    })

    it('/admin servis with auth should return 200', () => {
        return authenticatedRequest
        .get('/admin')
        .expect(200)
    })

})