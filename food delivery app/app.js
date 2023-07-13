// Example JavaScript functionality

// Function to load content dynamically
function loadContent(page) {
  const content = document.getElementById('content');
  
  // Show loading spinner
  content.innerHTML = '<div class="spinner"></div>';
  
  // Simulate API call or content retrieval
  setTimeout(() => {
    if (page === 'home') {
      content.innerHTML = '<h2>Welcome to our Food Delivery App!</h2><p>Order your favorite meals online and get them delivered right to your doorstep.</p>';
    } else if (page === 'menu') {
      content.innerHTML = '<h2>Our Menu</h2><ul><li>Burger</li><li>Pizza</li><li>Sushi</li></ul>';
    } else if (page === 'orders') {
      content.innerHTML = '<h2>Your Orders</h2><p>No orders available at the moment.</p>';
    } else if (page === 'contact') {
      content.innerHTML = '<h2>Contact Us</h2><p>For any inquiries, please email us at contact@fooddeliveryapp.com.</p>';
    }
  }, 1000);
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
  loadContent('home'); // Load home page content by default
});

const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const page = event.target.getAttribute('href').substring(1);
    loadContent(page);
  });
});