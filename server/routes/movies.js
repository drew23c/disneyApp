var express = require('express');
var router = express.Router();
var db = require('../movies/queries');

router.get('/', db.allMovies);
router.post('/review', db.postReview);
router.get('/:id/ratings', db.allRatingsForMovie);

module.exports = router;
