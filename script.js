// Products Data
const products = [
  { id: 1, name: "Men's Sneakers", category: "Men", price: "₹2,999", img: "Men's Sneakers.webp"},
  { id: 2, name: "Women's Jacket", category: "Women", price: "₹3,499", img: "wmen jacket.webp" },
  { id: 3, name: "Kid's T-shirt", category: "Kids", price: "₹999", img: "kids tshirt.jpg" },
  { id: 4, name: "Men's Watch", category: "Men", price: "₹4,499", img: "mens watch.webp" }
];

// Product list rendering
const productList = document.getElementById('product-list');

// Function to render products
function renderProducts(filteredProducts) {
  productList.innerHTML = '';
  filteredProducts.forEach(product => {
    productList.innerHTML += `
      <div class="product-card">
        <img src="${product.img}" alt="${product.name}">
        <h2>${product.name}</h2>
        <p>${product.price}</p>
        <button>Add to Cart</button>
      </div>
    `;
  });
}

// Initially render all products
renderProducts(products);

// Filter products by category
const filters = document.querySelectorAll('.filter');
filters.forEach(filter => {
  filter.addEventListener('change', () => {
    const selected = Array.from(filters)
      .filter(f => f.checked)
      .map(f => f.value);

    if (selected.length === 0) {
      renderProducts(products);
    } else {
      const filtered = products.filter(p => selected.includes(p.category));
      renderProducts(filtered);
    }
  });
});

// Slide show functionality
let slides = document.querySelectorAll('.slide');
let dots = document.querySelectorAll('.dot');
let currentSlide = 0;

// Show a slide based on index
function showSlide(index) {
  slides.forEach(slide => slide.classList.remove('active'));
  dots.forEach(dot => dot.classList.remove('active'));

  slides[index].classList.add('active');
  dots[index].classList.add('active');
}

// Go to next slide
function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

// Go to previous slide
function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

// Auto-slide every 3 seconds
let slideInterval = setInterval(nextSlide, 3000);

// Manual arrow control
document.querySelector('.next').addEventListener('click', () => {
  nextSlide();
  resetInterval();
});
document.querySelector('.prev').addEventListener('click', () => {
  prevSlide();
  resetInterval();
});

// Manual dot control
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    showSlide(index);
    currentSlide = index;
    resetInterval();
  });
});

// Reset auto-slide timer
function resetInterval() {
  clearInterval(slideInterval);
  slideInterval = setInterval(nextSlide, 3000);
}

// Search products
const searchBar = document.getElementById('search-bar');
searchBar.addEventListener('input', (e) => {
  const text = e.target.value.toLowerCase();
  const filtered = products.filter(p => p.name.toLowerCase().includes(text));
  renderProducts(filtered);
});

// Sign-Up Form submission handling
document.getElementById('signup-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form from submitting

    // Get input values
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // Basic validation
    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    if (username === '' || email === '' || password === '') {
        alert('All fields are required!');
        return;
    }

    // Here you would typically send this data to a server, but for now, we'll just show a success message.
    alert('Account created successfully!');
    
    // Redirect to the login page after successful sign-up
    window.location.href = 'login.html'; // Redirect to login page
});
