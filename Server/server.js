// Import required modules
const express = require('express');
const http = require('http');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

// Import custom modules
const { dbConnect } = require('./Src/Utils/db');
const teacherAuthApi = require('./Src/Router/teacherAuthApi');


// Initialize Express app
const app = express();

// Create HTTP server
const server = http.createServer(app);

// Set up CORS with specific origin and credentials
app.use(cors({
    origin: ['http://localhost:5174/', 'http://localhost:5173'],
    credentials: true
}));

// Middleware setup
app.use(bodyParser.json());
app.use(cookieParser());

// API Routes
app.use('/api/v1', teacherAuthApi);

// Root route
app.get('/', (req, res) => res.send('Hello World!'));

// Start server after database connection
const port = process.env.PORT || 5000;
dbConnect()
    .then(() => {
        server.listen(port, () => console.log(`Server is running on port ${port}!`));
    })
    .catch((error) => {
        console.error('Database connection failed:', error);
        process.exit(1); // Exit process with failure
    });
