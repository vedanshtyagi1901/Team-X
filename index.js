// Import Express
const express = require('express');
const path = require('path'); // To work with file paths

// Create an Express Application
const app = express();

// Define a Port
const PORT = 3000;

// Middleware to serve static assets (optional)
app.use(express.static('static'));

// Define Routes
// Home Route
app.get('/', (req, res) => {
    // Serve the index.html from the templates folder
    res.sendFile(path.join(__dirname, 'templates', 'index.html'));
});

// Start the Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
