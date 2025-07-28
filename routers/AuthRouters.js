const { Router } = require("express");
const authcontroller = require('../controllers/AuthControllers')
const router = Router();

router.get('/signUp',authcontroller.signup_get);
router.get('/login',authcontroller.login_get);
router.post('/signUp',authcontroller.signup_post);
router.post('/login',authcontroller.login_post);

module.exports = router;