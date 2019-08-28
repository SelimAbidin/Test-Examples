const assert = require('assert')
const {sum} = require('../src/math')


// it is not always necessary to do assertion in separete cases
describe('sum method test2', () => {

    it('1+1 should return 2, number type and not NaN', ()=> {
        const result =  sum(1,1)
        assert.equal(result, 2)
        assert.ok(!Number.isNaN(result))
        assert.ok(typeof result === 'number')
    })

})