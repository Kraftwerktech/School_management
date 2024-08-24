const bcrypt = require('bcrypt');
const Teacher = require('../../Model/TeacherModel/TeacherAuthModel'); // Adjust the path to your model

const createTeacher = async (req, res) => {
    try {
        const {
            username, email, phone, password, subjectName, assingclass,
            joiningDate, bloodgroup, address, education, designation, nid, image
        } = req.body;

        // Check if email already exists
        const existingTeacher = await Teacher.findOne({ email });
        if (existingTeacher) {
            return res.status(400).json({ message: 'Email already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new teacher
        const newTeacher = new Teacher({
            username,
            email,
            phone,
            password: hashedPassword,
            subjectName,
            assingclass,
            joiningDate,
            bloodgroup,
            address,
            education,
            designation,
            nid,
            image
        });

        // Save the teacher to the database
        const savedTeacher = await newTeacher.save();

        // Respond with the saved teacher data (excluding the password)
        res.status(201).json({
            message: 'Teacher created successfully',
            teacher: {
                id: savedTeacher._id,
                username: savedTeacher.username,
                email: savedTeacher.email,
                phone: savedTeacher.phone,
                subjectName: savedTeacher.subjectName,
                assingclass: savedTeacher.assingclass,
                joiningDate: savedTeacher.joiningDate,
                bloodgroup: savedTeacher.bloodgroup,
                address: savedTeacher.address,
                education: savedTeacher.education,
                designation: savedTeacher.designation,
                nid: savedTeacher.nid,
                image: savedTeacher.image,
                role: savedTeacher.role,
                createdAt: savedTeacher.createdAt,
                updatedAt: savedTeacher.updatedAt
            }
        });
    } catch (error) {
        console.error('Error creating teacher:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = { createTeacher };
