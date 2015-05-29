'use strict';

var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var ScenarioSchema = new Schema({
  title: String,
  given: String,
  event: String,
  outcome: String
});

var EstimateSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  estimate: Number,
  rationale: String
});

var StorySchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  title: String,
  benefit: String,
  feature: String,
  role: String,
  scenarios: [ScenarioSchema],
  estimates: [EstimateSchema],
});

module.exports = mongoose.model('Story', StorySchema);
