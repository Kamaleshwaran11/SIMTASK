// Example JavaScript functionality

// Function to handle form submission
function handleFormSubmit(event) {
  event.preventDefault();

  // Get form input values
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Check username and password
  if (username === 'admin' && password === 'password') {
    showMessage('success', 'Login successful!');
  } else {
    showMessage('error', 'Invalid username or password.');
  }
}

// Function to display a message
function showMessage(type, message) {
  const messageDiv = document.getElementById('message');
  messageDiv.textContent = message;

  if (type === 'success') {
    messageDiv.style.color = 'green';
  } else if (type === 'error') {
    messageDiv.style.color = 'red';
  }

  // Clear the message after 3 seconds
  setTimeout(() => {
    messageDiv.textContent = '';
  }, 3000);
}

// Event listener
document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');
  loginForm.addEventListener('submit', handleFormSubmit);
});