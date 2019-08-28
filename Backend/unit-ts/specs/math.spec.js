const assert = require('assert')
const {multiply} = require('../src/math.ts')

describe('multiply method test', () => {

    it('10*2 should return 20', ()=> {
        const result = multiply(10,2)
        assert.equal(result, 20)
    })

    it('-10*2 should return -20', ()=> {
        const result = multiply(-10,2)
        assert.equal(result, -20)
    })

    it('10*-2 should return -20', ()=> {
        const result = multiply(10,-2)
        assert.equal(result, -20)
    })

    it('-10*-2 should return 20', ()=> {
        const result = multiply(-10,-2)
        assert.equal(result, 20)
    })

    it('return should be a number', ()=> {
        const result =  multiply(10,2)
        assert.ok(typeof result === 'number')
    })

    it('undefined / 1 should be NaN', ()=> {
        const result =  multiply(undefined,1)
        assert.ok(Number.isNaN(result))
    })

    it('1 / undefined should be NaN', ()=> {
        const result =  multiply(1, undefined)
        assert.ok(Number.isNaN(result))
    })

})