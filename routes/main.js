// Create a new router
const express = require("express");
const router = express.Router();

// Handle the main routes
// Displays "Hello World!" when accessing the root URL
router.get("/", (req, res) => res.send("Hello World!")); 
// Displays "This is the about page" when accessing /about URL
router.get("/about", (req, res) => res.send ("<h1>This is the about page</h1>"));
// Displays "Contact me at: +44 7564 825589" when accessing /contact URL
router.get("/contact", (req, res) => res.send ("<h1>Contact me at: +44 7564 825589</h1>"));
// Displays the current date and time when accessing /date URL
router.get("/date", (req, res) => {
    const currentDate = new Date();
    res.send(`<h1>Current date and time is: ${currentDate}</h1>`);
});

// Export the router object so index.js can access it
module.exports = router;
