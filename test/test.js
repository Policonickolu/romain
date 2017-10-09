var request = require('supertest')
var assert = require('assert')

describe('loading express', function () {
  
  var server

  beforeEach(function () {
    server = require('../app').listen(3000, function () {
                var port = server.address().port;
                console.log('Example app listening at port %s', port);
              })
  });

  afterEach(function (done) {
    server.close(done)
  })

  it('responds to /', function testSlash(done) {
    request(server)
      .get('/')
      .expect(200, done)
  })

  it('404', function testPath(done) {
    request(server)
      .get('/fsgsdfgdfg')
      .expect(404, done)
  })

  it('respond to /converter', function testConvert() {
    request(server)
      .get('/converter/1')
      .expect(200, {
        data: 'I',
      })
  })
})

describe('convert to roman numerals', function () {

  var converter = require('../helpers/converter')

  it('convert 1', function testConvert(){
    assert.equal(converter.arabic_to_roman(1), 'I')
    assert.equal(converter.arabic_to_roman(100), 'C')
    assert.equal(converter.arabic_to_roman(99), 'IC')
    assert.equal(converter.arabic_to_roman(57), 'LVII')
    assert.equal(converter.arabic_to_roman(77), 'LXXVII')
    assert.equal(converter.arabic_to_roman(32), 'XXXII')
  })

})

