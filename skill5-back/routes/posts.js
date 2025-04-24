import express from 'express'
const router = express.Router();
import jwt from 'jsonwebtoken'
import Post from '../models/Post.js'

const authenticate = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    
    if (!token) {
      return res.status(401).json({ message: 'Authentication required' });
    }
  
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded;
      next();
    } catch (err) {
      res.status(401).json({ message: 'Invalid token' });
    }
  };

// Create Post
router.post('/', authenticate, async (req, res) => {
    try {
        const newPost = new Post({
            ...req.body,
            author: req.user.id // Store user ID with post
          });
          
        const savedPost = await newPost.save(); //saving the post to mdb with save method
        res.status(201).json(savedPost);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get All Posts
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find().sort({ createdAt: -1 });
        res.json(posts);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get Single Post

router.get('/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) return res.status(404).json({ message: 'Post not found' });
        res.json(post);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Updating Post
// tested with postman
router.put('/:id', async (req, res) => {
    try {
        const updatedPost = await Post.findByIdAndUpdate(
            req.params.id,
            { ...req.body, updatedAt: Date.now() },
            { new: true }  // to get the new update docs
        );
        if (!updatedPost) return res.status(404).json({ message: 'Post not found' });

        res.json(updatedPost);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Delete Post
router.delete('/:id', async (req, res) => {
    try {
        const deletedPost = await Post.findByIdAndDelete(req.params.id);
        if (!deletedPost) return res.status(404).json({ message: 'Post not found' });
        
        res.json({ message: 'Post deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

export default router