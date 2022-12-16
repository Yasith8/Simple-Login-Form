const form = document.getElementById('loginForm');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    if (!isValidEmail(email)) {
        alert('Please enter a valid email address');
        return;
    }

    if (!isValidPassword(password)) {
        alert('Please enter a valid password');
        return;
    }


});

function isValidEmail(email) {
    return /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email);
}

function isValidPassword(password) {
    return /^(?=.*\d)(?=.*[a-zA-Z]).{8,}$/.test(password);
}
