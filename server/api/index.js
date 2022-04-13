const router = require('express').Router();

// /api
router.get('/', (req, res, next) => {
  res.send('Hello, world!');
})

router.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
})

module.exports = router;
