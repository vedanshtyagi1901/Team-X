const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const ContactMessage = require('../models/ContactMessage');  // Import the model

const app = express();

// Middleware to parse the body of POST requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Connect to MongoDB
// Connect to MongoDB without the deprecated options
mongoose.connect('mongodb+srv://vedanshtyagi245:Dlpe65zp7wdUGhsx@cluster0.vos9i.mongodb.net/TEAM-X?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.log('MongoDB connection error:', err));

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, '..', 'public')));

// Home Route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'templates', 'index.html'));
});

// Handle form submission and store the data in MongoDB
app.post('/contact', async (req, res) => {
    try {
        console.log('posted')
        // const { name, email, message } = req.body;
        
        // // Create a new contact message document
        // const newMessage = new ContactMessage({
        //     name,
        //     email,
        //     message,
        // });

        // // Save the message to MongoDB
        // await newMessage.save();

        // // Respond with a success message
        // res.status(200).json({ message: 'Your message has been sent!' });

    } catch (error) {
        console.error('Error saving contact message:', error);
        res.status(500).json({ message: 'There was an error, please try again later.' });
    }
});

// Export the app for deployment (e.g., on Vercel or other platforms)
module.exports = app;
