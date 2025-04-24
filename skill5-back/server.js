import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import postsRouter from './routes/posts.js';
import authRouter from './routes/auth.js';
import 'dotenv/config';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/posts', postsRouter);
app.use('/api/auth', authRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));