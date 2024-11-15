const express = require('express');
const path = require('path');
const serverless = require('vercel-serverless-http');  // To convert Express app to serverless

const app = express();

// Middleware to serve static assets
app.use(express.static('static'));

// Home Route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'templates', 'index.html'));
});

// Export the app to be used by Vercel
module.exports = serverless(app);
