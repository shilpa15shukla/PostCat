

 
    // Simple login form validation (you can replace this with real authentication)
    document.getElementById('login-form').addEventListener('submit', function(e) {
      e.preventDefault();
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;

      if (email === '' || password === '') {
        alert('Please fill in all fields!');
      } else {
        alert('Login successful!');
        window.location.href = "index.html"; // Redirect to homepage after login
      }
    });

  
  