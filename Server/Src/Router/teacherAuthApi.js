const router = require('express').Router()
const { authMiddleware } = require('../Middleware/authmiddleware');
const authControllers = require('../Controller/TeacherController/TeacherAuthController');
const CreateController =require('../Controller/Admin/CreateTeacher');
router.post('/teacher-login', authControllers.teacherLogin);
router.get('/teacher-info', authControllers.getTeacherProfile);
router.post('/create-teacher', CreateController.createTeacher);
//router.post('/send-otp', authControllers.sendOTP);
///router.post('/verify-otp', authControllers.verifyOTP);
//router.get('/logout',authMiddleware,authControllers.logout);

module.exports = router