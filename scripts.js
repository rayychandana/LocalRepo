// scripts.js

// Simple login form validation and redirect
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // if (username === 'user' && password === 'pass') {
    //     // Redirect to home page after successful login
    //     window.location.href = 'index.html';
    // } else {
    //     alert('Invalid credentials. Please try again.');
    // }
    // alert('Credentials successfully registered');
    window.location.href = 'index.html';
});
