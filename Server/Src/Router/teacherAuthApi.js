const router = require('express').Router()
const { authMiddleware } = require('../Middleware/authmiddleware');
const authControllers = require('../Controller/TeacherController/TeacherAuthController');

router.post('/teacher-login', authControllers.teacherLogin);
router.get('/teacher-info/66c5ae90cf778ae7d93e6b71', authControllers.getTeacherProfile);
router.post('/send-otp', authControllers.sendOTP);
router.post('/verify-otp', authControllers.verifyOTP);
router.get('/logout',authMiddleware,authControllers.logout);

module.exports = router