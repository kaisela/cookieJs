const $ = require('../index.js')
const expect = require('chai').expect;
if (window.mochaPhantomJS) { mochaPhantomJS.run(); }
else { mocha.run(); }
describe('cookies测试', function() {
  it('cookie应该存进去', function() {
    $.cookie('test','nihao');
    expect($.cookie('test')).to.be.equal('nihao');
  });
});