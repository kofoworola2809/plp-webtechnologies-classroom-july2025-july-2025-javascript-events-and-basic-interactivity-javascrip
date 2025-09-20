// Example 1: Button Click
const button = document.getElementById('myButton');
const message = document.getElementById('buttonMessage');

button.addEventListener('click', function() {
    message.textContent = 'Button was clicked! The message has changed.';
});

// Example 2: Toggle Message Visibility
const toggleButton = document.getElementById('toggleButton');
const toggleMessage = document.getElementById('toggleMessage');

toggleButton.addEventListener('click', function() {
    if (toggleMessage.style.display === 'none') {
        toggleMessage.style.display = 'block';
    } else {
        toggleMessage.style.display = 'none';
    }
});

// Example 3: Change Background Color (Body + Sections)
const colorButton = document.getElementById('colorButton');

colorButton.addEventListener('click', function() {
    let newColor;

    if (document.body.style.backgroundColor === 'gray') {
        newColor = 'white';
    } else {
        newColor = 'gray';
    }

    document.body.style.backgroundColor = newColor;

    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.backgroundColor = newColor;
    });
});

// Example 4: Form Validation
document.getElementById('myForm').onsubmit = function(event) {
    event.preventDefault(); // Prevent default submission

    let isValid = true;

    // Name validation
    let nameInput = document.getElementById('name');
    let name = nameInput.value.trim();
    const nameError = document.getElementById('nameError');
    if (name === '') {
        nameInput.style.color = "red";
        nameError.textContent = 'Name is required.';
        isValid = false;
    } else if (name.length < 3) {
        nameInput.style.color = "red";
        nameError.textContent = 'Name must be at least 3 characters.';
        isValid = false;
    } else {
        nameInput.style.color = "black";
        nameError.textContent = '';
    }

    // Email validation
    let emailInput = document.getElementById('email');
    const email = emailInput.value.trim();
    const emailError = document.getElementById('emailError');
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email === '') {
        emailInput.style.color = "red";
        emailError.textContent = 'Email is required.';
        isValid = false;
    } else if (!email.match(emailPattern)) {
        emailInput.style.color = "red";
        emailError.textContent = 'Please enter a valid email address.';
        isValid = false;
    } else {
        emailInput.style.color = "black";
        emailError.textContent = '';
    }

    // Password validation
    let passwordInput = document.getElementById('password');
    const password = passwordInput.value.trim();
    const passwordError = document.getElementById('passwordError');
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (password === '') {
        passwordInput.style.color = "red";
        passwordError.textContent = 'Password is required.';
        isValid = false;
    } else if (!password.match(passwordPattern)) {
        passwordInput.style.color = "red";
        passwordError.textContent = 'Password must be at least 6 characters, include an uppercase letter, a lowercase letter, and a number.';
        isValid = false;
    } else {
        passwordInput.style.color = "black";
        passwordError.textContent = '';
    }

    // Success
    if (isValid) {
        alert('Form submitted successfully!');
        return true;
    }
};
let welcomeMessage = "Welcome to JavaScript Interactivity!";
alert(welcomeMessage);
console.log("JavaScript is running!");