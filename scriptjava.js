// Appointment Form Validation
document.getElementById('appointment-form').addEventListener('submit', function(event) {
    event.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let appointmentDate = document.getElementById('appointment-date').value;
    let appointmentTime = document.getElementById('appointment-time').value;

    if (name && email && appointmentDate && appointmentTime) {
        alert('Your appointment has been booked!');
        // You can send the appointment details to a server here.
    } else {
        alert('Please fill in all fields.');
    }
});

// Contact Form Validation
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Your message has been sent!');
        // Form submission logic can go here.
    } else {
        alert('Please fill in all fields.');
    }
});







const stripe = require('stripe')('your-secret-key-here');
const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

// Endpoint to create a payment intent
app.post('/create-payment-intent', async (req, res) => {
    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: 5000, // Amount in cents, i.e., $50
            currency: 'usd',
            payment_method: req.body.paymentMethodId,
            confirmation_method: 'manual',
            confirm: true,
        });
        res.send({ clientSecret: paymentIntent.client_secret });
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});

// Start the server
app.listen(4242, () => {
    console.log('Server started on http://localhost:4242');
});




// Select all video thumbnails
const videoThumbnails = document.querySelectorAll('.video-thumbnail');

// Iterate over each thumbnail
videoThumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', function() {
        const videoSrc = this.getAttribute('data-video');
        const videoPlayer = this.nextElementSibling;  // The video element is the next sibling
        
        // Set the video source dynamically when the thumbnail is clicked
        videoPlayer.querySelector('source').setAttribute('src', videoSrc);
        videoPlayer.load(); // Load the new video
        videoPlayer.style.display = 'block'; // Show the video
        videoPlayer.play(); // Start playing the video
    });
});




