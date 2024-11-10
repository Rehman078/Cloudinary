// routes/uploadRoutes.js
import express from 'express';
import { uploadFile } from '../controller/coludinaryController.js';
import upload from '../config/multerConfig.js';  // Import multer configuration

const router = express.Router();

// Route for file upload
router.post('/', upload.single('myfile'), uploadFile);

export default router;
