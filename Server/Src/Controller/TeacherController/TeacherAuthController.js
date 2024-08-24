const TeacherModel = require('../../Model/TeacherModel/TeacherAuthModel');
//const TeacherOTPModel = require('../../Model/TeacherModel/otpvarification');
const bcrypt = require('bcrypt');
//const nodemailer = require('nodemailer');
const { responseReturn } = require('../../Utils/response');
const { createToken } = require('../../Utils/tokenCreate');
// OTP expiration time: 5 minutes
const OTP_EXPIRATION_TIME = 5 * 60 * 1000;
class AuthControllers {

    // Teacher login handler
    teacherLogin = async (req, res) => {
        const { username, password } = req.body;

        try {
            // Find teacher by email and select the password field explicitly
            const teacher = await TeacherModel.findOne({ username }).select('+password');
            
            if (!teacher) {
                return responseReturn(res, 404, { error: "Email not found" });
            }

            // Compare the provided password with the hashed password in the database
            const isPasswordCorrect = await bcrypt.compare(password, teacher.password);

            if (!isPasswordCorrect) {
                return responseReturn(res, 401, { error: "Incorrect password" });
            }

            // Create a token for the authenticated user
            const token = createToken({
                id: teacher.id,
                role: teacher.role
            });

            // Set a cookie with the token, expiring in 7 days
            res.cookie('accessToken', token, {
                httpOnly: true, // Protect cookie from being accessed by client-side scripts
                secure: process.env.NODE_ENV === 'production', // Ensure secure flag is set in production
                sameSite: 'Strict', // Protect against CSRF attacks
                expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
            });

            // Send a successful response with the token
            responseReturn(res, 200, { token, message: 'Login successful' });

        } catch (error) {
            // Handle unexpected errors
            console.error('Error during teacher login:', error.message);
            responseReturn(res, 500, { error: "Internal server error" });
        }
    };

     getTeacherProfile = async (req, res) => {
        try {
            const teacherId = req.params.id;
    
            // Find the teacher by ID
            const teacher = await TeacherModel.findById(teacherId).select('+password'); // Assuming password is hidden by default
    
            if (!teacher) {
                return res.status(404).json({ message: 'Teacher not found' });
            }
    
            res.status(200).json({
                success: true,
                data: teacher
            });
        } catch (err) {
            console.error(err);
            res.status(500).json({
                success: false,
                message: 'Server Error'
            });
        }
    };



    // sendOTP = async (req, res) => {
    //     const { email } = req.body;

    //     try {
    //         // Check if the teacher exists
    //         const teacher = await TeacherModel.findOne({ email });
    //         if (!teacher) {
    //             return responseReturn(res, 404, { error: " nd" });
    //         }  

    //         // Generate a 4-digit OTP
    //         const otp = crypto.randomInt(1000, 9999).toString();

    //         // Calculate OTP expiration time
    //         const expiresAt = Date.now() + OTP_EXPIRATION_TIME;

    //         // Save OTP to the database
    //         await TeacherOTPModel.create({
    //             _id: email,
    //             otp,
    //             createdAt: new Date(),
    //             expiresAt: new Date(expiresAt),
    //         });

    //         // Set up email transporter
    //         const transporter = nodemailer.createTransport({
    //             service: 'Gmail',
    //             auth: {
    //                 user: process.env.EMAIL_USERNAME,
    //                 pass: process.env.EMAIL_PASSWORD,
    //             },
    //         });

    //         // Email details
    //         const mailOptions = {
    //             from: process.env.EMAIL_USERNAME,
    //             to: email,
    //             subject: 'Your OTP Code',
    //             text: `Your OTP code is ${otp}. It will expire in 5 minutes.`,
    //         };

    //         // Send OTP via email
    //         await transporter.sendMail(mailOptions);

    //         responseReturn(res, 200, { message: 'OTP sent to your email' });

    //     } catch (error) {
    //         console.error('Error sending OTP:', error.message);
    //         responseReturn(res, 500, { error: "Internal server error" });
    //     }
    // };

    // Verify OTP
    // verifyOTP = async (req, res) => {
    //     const { email, otp } = req.body;

    //     try {
    //         // Find the OTP record in the database
    //         const otpRecord = await TeacherOTPModel.findOne({ _id: email });
    //         if (!otpRecord) {
    //             return responseReturn(res, 404, { error: "OTP not found or expired" });
    //         }

    //         // Check if the OTP matches and is not expired
    //         if (otpRecord.otp !== otp || otpRecord.expiresAt < new Date()) {
    //             return responseReturn(res, 401, { error: "Invalid or expired OTP" });
    //         }

    //         // OTP verified successfully
    //         responseReturn(res, 200, { message: 'OTP verified successfully' });

    //         // Optionally delete OTP record after successful verification
    //         await TeacherOTPModel.deleteOne({ _id: email });

    //     } catch (error) {
    //         console.error('Error verifying OTP:', error.message);
    //         responseReturn(res, 500, { error: "Internal server error" });
    //     }
    // };

    
    logout = async (req, res) => {
        try {
            res.cookie('accessToken',null,{
                expires : new Date(Date.now()),
                httpOnly : true
            })
            responseReturn(res,200,{message : 'logout success'})
        } catch (error) {
            responseReturn(res, 500, { error: error.message })
        }
    }

}

module.exports = new AuthControllers();
