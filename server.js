// Import required dependencies
const express = require('express');

// Create an instance of the Express application
const app = express();

// Custom middleware to check if the user is authenticated
const checkAuth = (req, res, next) => {
  // Assuming you have a way to determine if the user is authenticated
  const isAuthenticated = true; // Change this based on your authentication logic

  if (isAuthenticated) {
    // User is authenticated, proceed to the next middleware or route handler
    next();
  } else {
    // User is not authenticated, send an error response
    res.status(401).json({ message: 'Unauthorized' });
  }
};

// Endpoint: /post
app.get('/post', checkAuth, (req, res) => {
  // Assuming you have an array of 20 posts
  const posts = [
    { id: 1, title: 'Post 1' },
    { id: 2, title: 'Post 2' },
    { id: 3, title: 'Post 3' },
    { id: 20, title: 'Post 4' }
  ];

  res.json(posts);
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
