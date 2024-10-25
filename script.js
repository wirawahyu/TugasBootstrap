// Smooth Scroll for Navbar Links
document.querySelectorAll('.navbar-nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Subscription Form Submission (Simple Form Validation)
  document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const firstName = document.querySelector('input[type="text"]').value.trim();
    const email = document.querySelector('input[type="email"]').value.trim();
    
    if (firstName && email) {
      alert(`Thank you for subscribing, ${firstName}!`);
      this.reset();
    } else {
      alert('Please fill out all fields before submitting.');
    }
  });
  