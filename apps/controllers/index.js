var express = require('express');
var adminRouter = require('./admin');
var userRouter = require('./user');
var router = express.Router();

router.use('/admin', adminRouter);
router.use('/user', userRouter);

module.exports = router;