const { expect } = require('chai')
const wrap = require('./wrap')
describe('wrap', () => {
    it('returns empty string when empty string entered', () => {
        expect(wrap("", 10)).to.equal('');
    });
    it('is a function', () => {
        expect(typeof wrap).to.equal('function')
    })
    it('line length is less than or equal to columnNum', () => {
        expect(wrap('cat', 1)).to.equal('c\na\nt')
    })
})