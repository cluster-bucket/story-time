'use strict';

var should = require('should');
var app = require('../../app');
var User = require('./user.model');

var user = new User({
  provider: 'local',
  name: 'Fake User',
  email: 'test@test.com',
  password: 'password'
});

describe('User Model', function() {
  before(function(done) {
    // Clear users before testing
    User.remove().exec().then(function() {
      done();
    });
  });

  afterEach(function(done) {
    User.remove().exec().then(function() {
      done();
    });
  });

  it('should begin with no users', function(done) {
    User.find({}, function(err, users) {
      users.should.have.length(0);
      done();
    });
  });

  it('should save multiple users', function(done) {
    var user1 = new User({
      provider: 'local',
      name: 'Fake User1',
      email: 'test1@test.com',
      password: 'password1'
    });

    var user2 = new User({
      provider: 'local',
      name: 'Fake User2',
      email: 'test2@test.com',
      password: 'password2'
    });

    user1.save(function() {
      user2.save(function() {
        User.find({}, function(err, users) {
          user1.should.not.have.property('_id', user2._id);
          users.should.have.length(2);
          done();
        });
      });
    });
  });

  it('should fail when saving a duplicate user', function(done) {
    user.save(function() {
      var userDup = new User(user);
      userDup.save(function(err) {
        should.exist(err);
        done();
      });
    });
  });

  it('should fail when saving without an email', function(done) {
    user.email = '';
    user.save(function(err) {
      should.exist(err);
      done();
    });
  });

  it("should authenticate user if password is valid", function() {
    return user.authenticate('password').should.be.true;
  });

  it("should not authenticate user if password is invalid", function() {
    return user.authenticate('blah').should.not.be.true;
  });
});
