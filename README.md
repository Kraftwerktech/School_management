# 🏫 ChuterGhonta a unique School Management System

**ChuterGhonta** is a comprehensive system designed to facilitate the management of students, teachers, courses, and administrative tasks in a user-friendly and efficient manner. Built using modern web technologies, it ensures seamless school management with easy access to all the essential features.

![Chu-iraghan Header Image](https://via.placeholder.com/1200x300.png?text=Chu-iraghan+School+Management+System)

## 🎨 Design Overview

**Chu-iraghan** offers an intuitive interface for managing school operations. Key design features include:
- 📊 **Dashboard**: An overview of school data including the total number of students, teachers, and recent updates.
- 👩‍🏫 **Teacher Management**: Add, update, and manage teacher profiles and assignments.
- 👨‍🎓 **Student Management**: Register students, manage their grades, and track attendance.
- 📚 **Course Management**: Manage courses, assign teachers, and schedule classes.
- 🔒 **Role-Based Access**: Different roles for Admin, Teacher, and Student to ensure secure access.

## 🛠 Tech Stack

- **React**: Frontend framework.
- **Tailwind CSS**: For rapid and responsive styling.
- **Node.js & Express**: Backend for handling data, authentication, and API management.
- **MongoDB**: Database for storing information on students, teachers, courses, etc.
- **React Icons**: For enhanced visual feedback with intuitive icons.

## 🚀 Features

- 📋 **Student Management**: Add, view, edit, and remove student records, attendance, and grades.
- 👩‍🏫 **Teacher Management**: Manage teacher profiles and assign them to specific courses or subjects.
- 📚 **Course Management**: Create and manage courses, schedule classes, and assign teachers.
- 📊 **Analytics Dashboard**: View statistics on students, teachers, and overall school performance.
- 🔒 **Role-Based Access**: Different users (Admin, Teacher, Student) have specific access rights.
- 💡 **Responsive Design**: The platform adapts seamlessly across mobile, tablet, and desktop devices.

## 📂 Folder Structure

```bash
chu-iraghan/
│
├── public/
│   └── index.html            # Main HTML file
│
├── src/
│   ├── components/
│   │   ├── StudentList.jsx    # Displays list of students
│   │   ├── TeacherList.jsx    # Displays list of teachers
│   │   └── Dashboard.jsx      # Dashboard with analytics
│   ├── pages/
│   │   └── AdminDashboard.jsx # Main admin page
│   ├── assets/                # Static images and icons
│   └── App.js                 # Main React component
│
├── server/
│   ├── routes/
│   │   ├── studentRoutes.js   # Routes for student management
│   │   ├── teacherRoutes.js   # Routes for teacher management
│   │   └── courseRoutes.js    # Routes for course management
│   ├── models/
│   │   ├── Student.js         # Mongoose model for students
│   │   ├── Teacher.js         # Mongoose model for teachers
│   │   └── Course.js          # Mongoose model for courses
│   └── server.js              # Main Express app
│
├── package.json               # Project dependencies
└── README.md                  # Project documentation
