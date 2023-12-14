const express = require('express');
const app = express();
const path = require('path');

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Define a route to serve your HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public' ,'gate.html'));
});

// Start the server
app.listen(8000, () => {
  console.log('Server is running on port 8000');
});