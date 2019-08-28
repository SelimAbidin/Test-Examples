const assert = require('assert')
const {divide, multiply, subtract, sum} = require('../src/math')

describe('divide method test', () => {

    it('10/2 should return 5', ()=> {
        const result =  divide(10,2)
        assert.equal(result, 5)
    })

    it('10/-2 should return -5', ()=> {
        const result =  divide(10,-2)
        assert.equal(result, -5)
    })

    it('-10/-2 should return 5', ()=> {
        const result =  divide(-10,-2)
        assert.equal(result, 5)
    })

    it('-10/2 should return -5', ()=> {
        const result =  divide(10,-2)
        assert.equal(result, -5)
    })

    it('return should be a number', ()=> {
        const result =  divide(10,2)
        assert.ok(typeof result === 'number')
    })

    it('undefined / 1 should be NaN', ()=> {
        const result =  divide(undefined,1)
        assert.ok(Number.isNaN(result))
    })

    it('1 / undefined should be NaN', ()=> {
        const result =  divide(1, undefined)
        assert.ok(Number.isNaN(result))
    })

})

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

describe('subtract method test', () => {

    it('10-5 should return 5', ()=> {
        const result = subtract(10,5)
        assert.equal(result, 5)
    })

    it('-10-5 should return -15', ()=> {
        const result = subtract(-10,5)
        assert.equal(result, -15)
    })

    it('-10--2 should return -8', ()=> {
        const result = subtract(-10,-2)
        assert.equal(result, -8)
    })

    it('return should be a number', ()=> {
        const result =  subtract(10,5)
        assert.ok(typeof result === 'number')
    })

    it('undefined / 1 should be NaN', ()=> {
        const result =  subtract(undefined,1)
        assert.ok(Number.isNaN(result))
    })

    it('1 / undefined should be NaN', ()=> {
        const result =  subtract(1, undefined)
        assert.ok(Number.isNaN(result))
    })
})

describe('sum method test', () => {

    it('1+1 should return 2', ()=> {
        const result =  sum(1,1)
        assert.equal(result, 2)
    })

    it('-5+2 should return -3', ()=> {
        const result =  sum(-5,2)
        assert.equal(result, -3)
    })

    it('-5+-2 should return -7', ()=> {
        const result =  sum(-5,-2)
        assert.equal(result, -7)
    })

    it('return should be a number', ()=> {
        const result =  sum(1,1)
        assert.ok(typeof result === 'number')
    })

    it('undefined + 1 should be NaN', ()=> {
        const result =  sum(undefined,1)
        assert.ok(Number.isNaN(result))
    })

    it('1 + undefined should be NaN', ()=> {
        const result =  sum(1, undefined)
        assert.ok(Number.isNaN(result))
    })

})