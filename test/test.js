'use strict';

var expect = require('chai').expect;
var replaceString = require('../index');

describe('replaceString', function() {
    it('should convert string to strong', function() {
        var result = replaceString('string');
        expect(result).to.equal('I am a strong');
    });
});