// script.js

// Function to parse the guest name parameter from the URL
function getGuestName() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('guestName') || 'Guest';
}

// Countdown timer calculation
function startCountdown(duration) {
    let timer = duration, hours, minutes, seconds;
    const interval = setInterval(() => {
        hours = parseInt(timer / 3600, 10);
        minutes = parseInt((timer % 3600) / 60, 10);
        seconds = parseInt(timer % 60, 10);

        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        console.log(hours + ":" + minutes + ":" + seconds);

        if (--timer < 0) {
            clearInterval(interval);
            // Trigger background music here
            playBackgroundMusic();
        }
    }, 1000);
}

// Function to play background music
function playBackgroundMusic() {
    const audio = new Audio('path/to/music.mp3'); // Update with actual music path
    audio.play();
}

// Scroll animations
document.addEventListener('scroll', () => {
    // Implement scroll animations logic here
});

// RSVP form validation
function validateRSVPForm() {
    const form = document.getElementById('rsvpForm');
    form.addEventListener('submit', (event) => {
        const name = form.querySelector('input[name="name"]').value;
        if (name.trim() === '') {
            event.preventDefault();
            alert('Please enter your name.');
        }
    });
}

// Google Apps Script webhook integration
function sendFormDataToGoogleSheets(data) {
    fetch('https://script.google.com/macros/s/YOUR_WEBHOOK_URL/exec', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((response) => {
        return response.json();
    }).then((result) => {
        console.log('Success:', result);
    }).catch((error) => {
        console.error('Error:', error);
    });
}

// Initialize functions
window.onload = () => {
    const guestName = getGuestName();
    console.log(guestName);
    // Start countdown here
    startCountdown(3600); // Example: countdown for 1 hour
    validateRSVPForm();
};