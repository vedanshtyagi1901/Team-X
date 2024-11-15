const express = require('express');
const path = require('path');

const app = express();

// Middleware to serve static files from 'public' folder
app.use(express.static(path.join(__dirname, '..', 'public')));

// Home Route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'templates', 'index.html'));
});

// Export the app for Vercel
module.exports = app;
