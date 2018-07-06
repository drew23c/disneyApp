var express = require('express');
var router = express.Router();
var db = require('../movies/queries');

router.get('/', db.allRatings);

module.exports = router;
