import express from 'express';
import dotenv from 'dotenv';
import connectDB from './src/config/dbConnection.js';
import uploadRoute from './src/routes/cloudinaryRoutes.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Connect to the database
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/upload', uploadRoute);

// Start the server
app.listen(port, () => console.log(`Server is running on port ${port}`));
