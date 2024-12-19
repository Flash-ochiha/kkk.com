// Sticky Navigation Bar
const navBar = document.createElement('nav');
navBar.classList.add('sticky-nav');
navBar.innerHTML = `
  <div class="logo">NATURE IS LIFE</div>
  <ul class="menu">
    <li><a href="#home">Home</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#services">Services</a></li>
    <li><a href="#blog">Blog</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#shop">Shop</a></li>
  </ul>
`;
document.body.prepend(navBar);

// Hero Section
const heroSection = document.createElement('section');
heroSection.classList.add('hero');
heroSection.innerHTML = `
  <div class="hero-content">
    <h1>Welcome to NATURE IS LIFE</h1>
    <button class="cta-button">Shop Now</button>
  </div>
`;
document.body.appendChild(heroSection);

// Featured Content
const featuredSection = document.createElement('section');
featuredSection.classList.add('featured');
featuredSection.innerHTML = `
  <h2>Featured Products</h2>
  <div class="featured-cards">
    <div class="card">Product 1</div>
    <div class="card">Product 2</div>
    <div class="card">Product 3</div>
  </div>
`;
document.body.appendChild(featuredSection);

// Social Proof
const testimonialsSection = document.createElement('section');
testimonialsSection.classList.add('testimonials');
testimonialsSection.innerHTML = `
  <h2>What Our Customers Say</h2>
  <div class="testimonial">"Great products!" - Customer A</div>
  <div class="testimonial">"Excellent service!" - Customer B</div>
`;
document.body.appendChild(testimonialsSection);

// Contact Form
const contactSection = document.createElement('section');
contactSection.classList.add('contact');
contactSection.innerHTML = `
  <h2>Contact Us</h2>
  <form id="contact-form">
    <input type="text" placeholder="Your Name" required>
    <input type="email" placeholder="Your Email" required>
    <textarea placeholder="Your Message" required></textarea>
    <button type="submit">Send Message</button>
  </form>
`;
document.body.appendChild(contactSection);

// Footer
const footer = document.createElement('footer');
footer.innerHTML = `
  <div class="quick-links">
    <a href="#privacy">Privacy Policy</a>
    <a href="#terms">Terms of Service</a>
    <a href="#faqs">FAQs</a>
  </div>
  <div class="newsletter">
    <input type="email" placeholder="Subscribe to our newsletter">
    <button>Subscribe</button>
  </div>
`;
document.body.appendChild(footer);