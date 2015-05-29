'use strict';

var should = require('should');
var app = require('../../app');
var request = require('supertest');
var Story = require('./story.model');
var User = require('../user/user.model');

describe('Story Model', function() {
  before(function(done) {
    // Clear users before testing
    Story.remove().exec().then(function() {
      done();
    });
  });

  afterEach(function(done) {
    Story.remove().exec().then(function() {
      done();
    });
  });

  it('should save a story', function(done) {
    var user = new User({
      provider: 'local',
      name: 'Fake User',
      email: 'test@test.com',
      password: 'password'
    });

    var story = new Story({
      user: user._id,
      title: 'Account Holder withdraws cash',
      benefit: 'Get money when the bank is closed',
      feature: 'Withdraw cash from an ATM',
      role: 'Account Holder',
      scenarios: [{
        title: 'Account has sufficient funds',
        given: 'The account balance is $100',
        event: 'The Account Holder requests $20',
        outcome: 'The ATM should dispense $20'
      }],
      estimates: [{
        user: user._id,
        estimate: 3,
        rationale: ''
      }],
    });

    story.save(function(err) {
      Story.find(function(err, stories) {
        stories.should.have.length(1);
        done();
      });
    });
  });

});
