var nock = require('nock');

var assert = require("assert")
var should = require('should');

var mod = require("../lib/mod.js");

var mockObj = 42;

beforeEach(function(done){
    nock.cleanAll();
    done();
});

describe('module', function(){
    describe('get request', function(){
        it('should default repo with no url', function(done){
            nock('https://api.github.com').get('/repos/stanleyta/githubtopcontributors/contributors').reply(200, mockObj);

            var url = '/repos/stanleyta/githubtopcontributors/contributors';
            var token = 'abc';
            var username = 'sta';
            mod.get(url, token, username).then(function (value){
                console.log(JSON.stringify(value));
                value.should.eql(mockObj.toString());
                done();
            });
        })
    })
});

describe('module', function(){
    describe('get request', function(){
        it('should default repo with no url', function(done){
            nock('https://api.github.com').get('/repos/stanleyta/githubtopcontributors/contributors').reply(200, 1);
            nock('https://api.github.com').get('/repos/sta/githubtopcontributors/contributors').reply(200, 2);

            var url = '/repos/sta/githubtopcontributors/contributors';
            var token = 'abc';
            var username = 'sta';
            mod.get(url, token, username).then(function (value){
                console.log(JSON.stringify(value));
                value.should.eql("2");
                done();
            });
        })
    })
});