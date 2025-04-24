import mongoose from "mongoose";
const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  province: {
    type: String,
    required: true,
    enum: {
      values: [
        'Alberta', 'British Columbia', 'Manitoba', 'New Brunswick',
        'Newfoundland and Labrador', 'Nova Scotia', 'Ontario',
        'Prince Edward Island', 'Quebec', 'Saskatchewan', 'Northwest Territories',
        'Nunavut', 'Yukon'
      ],
      message: 'Invalid Canadian province/territory'
    }
  },
  availability: {
    date: {
      type: Date,
      required: true
    },
    time: {
      type: String,
      required: true,
      match: [/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/, 'Use 24h format (HH:MM)']
    }
  },
  contact: {
    phone: String, // Optional // will try later
    email: {
      type: String,
      required: true
    },
    chatId: String // Optional // Try later
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Post = mongoose.model('Post', postSchema);
export default Post