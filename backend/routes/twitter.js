/**
 * Create all the routes related to twitter on `/api` API endpoint.
 * @module routes/twitter
 */
const router = require('express').Router();
const {
  getTweetsOnHashtag,
  getAuthorId,
  getAuthorInfo,
} = require('../controllers/twitter');

router.get('/tweets', getTweetsOnHashtag);
router.get('/tweets/:id', getAuthorId);
router.get('/users/:id', getAuthorInfo);

module.exports = router;
