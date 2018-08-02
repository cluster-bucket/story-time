var express = require('express');
var router = express.Router();

const stories = [];

/* GET stories listing. */
router.get('/', function(req, res, next) {
  res.send(this.stories);
});

/* POST story */
router.post('/', function(req, res, next) {
  stories.push(req.body);
  res.sendStatus(200);
});

module.exports = router;
