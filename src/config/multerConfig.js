// config/multerConfig.js
import multer from 'multer';
import { v4 as uuidv4 } from 'uuid';

// Configure multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, './src/uploads'),
  filename: (req, file, cb) => cb(null, `${uuidv4()}_${file.originalname}`),
});

const upload = multer({ storage });

export default upload;
