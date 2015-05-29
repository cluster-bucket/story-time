'use strict';

var should = require('should');
var app = require('../../app');
var request = require('supertest');
var Story = require('./story.model');
var User = require('../user/user.model');

describe('GET /api/stories', function() {
  it('should respond with JSON array', function(done) {
    request(app)
      .get('/api/stories')
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) return done(err);
        res.body.should.be.instanceof(Array);
        done();
      });
  });
});

describe('POST /api/stories', function() {
  var user;

  before(function (done) {
    user = new User({
      provider: 'local',
      name: 'Fake User',
      email: 'test@test.com',
      password: 'password'
    });

    user.save(function (err) {
      done();
    });
  });

  afterEach(function (done) {
    User.remove().exec().then(function () {
      user = undefined;
      done();
    });
  });

  it('should create a story', function(done) {
    request(app)
      .post('/api/stories')
      .send({
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
        }]
      })
      .expect(201)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) return done(err);
        res.body.should.have.property('_id');
        done();
      });
  });
});

describe('PUT /api/stories', function() {
  var user, story;

  before(function (done) {
    user = new User({
      provider: 'local',
      name: 'Fake User',
      email: 'test@test.com',
      password: 'password'
    });

    story = new Story({
      user: user._id,
      title: 'Account Holder withdraws cash',
      benefit: 'Get money when the bank is closed',
      feature: 'Withdraw cash from an ATM',
      role: 'Account Holder',
      scenarios: [],
      estimates: []
    });

    user.save(function (err) {
      story.save(function (err2) {
        done();
      });
    });
  });

  afterEach(function (done) {
    User.remove().exec().then(function () {
      Story.remove().exec().then(function () {
        story = undefined;
        user = undefined;
        done();
      });
    });
  });

  it('should update a story', function(done) {
    var estimate = {
      user: user._id,
      estimate: 3,
      rationale: ''
    };

    var scenario = {
      title: 'Account has sufficient funds',
      given: 'The account balance is $100',
      event: 'The Account Holder requests $20',
      outcome: 'The ATM should dispense $20'
    };

    request(app)
      .get('/api/stories/' + story._id)
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) return done(err);
        res.body.estimates.should.have.length(0);
        res.body.scenarios.should.have.length(0);

        request(app)
          .put('/api/stories/' + story._id)
          .send({
            scenarios: [scenario],
            estimates: [estimate]
          })
          .expect(200)
          .expect('Content-Type', /json/)
          .end(function(err, res2) {
            if (err) return done(err);

            request(app)
              .get('/api/stories/' + story._id)
              .expect(200)
              .expect('Content-Type', /json/)
              .end(function(err, res3) {
                if (err) return done(err);
                res3.body.estimates.should.have.length(1);
                res3.body.scenarios.should.have.length(1);
                done();
              });
          });
      });
  });
});
