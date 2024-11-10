import fs from 'fs';
import cloudinary from '../config/cloudinaryConfig.js';
import Image from '../model/cloudinaryModel.js';

// Controller function to handle the file upload
export const uploadFile = async (req, res) => {
  try {
    const { title, content, author } = req.body; // Extracting title, content, and author from the request body
    if (!title || !content || !author) {
      return res.status(400).json({ msg: 'Title, content, and author are required' });
    }

    const uploadResult = await cloudinary.uploader.upload(req.file.path);
    const newImage = new Image({
      title,
      content,
      author,
      Image_Url: uploadResult.secure_url,
    });
    await newImage.save();

    // Deleting the uploaded file from the server
    fs.unlink(req.file.path, (err) => {
      if (err) {
        console.error('Error deleting file:', err);
      } else {
        console.log('Deleted file');
      }
    });

    res.json({
      msg: 'successfully',
     data: newImage
    });
  } catch (error) {
    console.error('Upload error:', error);
    res.status(500).json({ msg: 'File upload failed', error });
  }
};
