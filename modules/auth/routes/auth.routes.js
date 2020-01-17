const router = require('express').Router()

const userController = require('../controllers/auth.controller')

const authenticate = require('./../../../middlewares/authenticate')

router.post('/register', userController.register);
router.post('/login', userController.login);
router.get('/showAll', userController.showAll);
router.get('/dashboard', authenticate, userController.dashboard);

module.exports = router;