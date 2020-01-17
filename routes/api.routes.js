const router = require('express').Router()

const userRouter = require('./../modules/auth/routes/auth.routes');

router.use('/user', userRouter);

module.exports = router;