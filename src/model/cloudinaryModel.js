import mongoose from 'mongoose';

const imageSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: String, required: true },
  Image_Url: { type: String, required: true },
});

const Image = mongoose.model('Image', imageSchema);

export default Image;
