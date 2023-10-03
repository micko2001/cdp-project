const express = require('express');
const app = express();
const path = require('path');

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Define a route to serve your HTML file
app.get('/', (_req, res) => {
  // No need to manually read and send the HTML file,
  // Express will serve it automatically from the 'public' directory
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(8000, () => {
  console.log('Server is running on port 8000');
});