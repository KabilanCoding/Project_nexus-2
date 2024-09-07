import React from 'react';
import './App.css';
import logo from './assets/images/n.jpeg'; 
import web from './assets/images/web.png';
import app from './assets/images/app.jpg';  // import the logo
  // Handler for form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevents the default form submission behavior

    const feedbackData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    try {
      const response = await fetch('http://localhost:5000/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(feedbackData),
      });

      if (response.ok) {
        alert('Feedback submitted!');
      } else {
        alert('Error submitting feedback');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

function App() {
  return (
    
    <div className="App">
      {/* Header */}
      <header className="App-header">
        <img src={logo} alt="Techy Software Logo" className="logo" />
        <h1>Welcome to Techy Software</h1>
      </header>

      {/* Navigation */}
      <nav className="navbar">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#services">Products/Services</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
      </nav>

      {/* Main Content */}
      <section id="home" className="section home">
        <h2>Software Solutions for Your Business</h2>
        <p>At Techy Software, we provide innovative software solutions for your business needs.</p>
        {/* Add Google Photos Integration */}
        <div className="google-photos">
          <h3>Our Web Products</h3>
          <img src={web} alt="Web Product" />
          <img src={app} alt="Web Product" />
        </div>
      </section>

      {/* Information Section */}
      <section id="about" className="section about">
        <h2>About Us</h2>
        <p>We are a leading software company providing cutting-edge solutions for businesses worldwide.</p>
      </section>

      <section id="services" className="section services">
        <h2>Our Services</h2>
        <p>We offer a range of software services including development, deployment, and support.</p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <label>Name:</label>
          <input type="text" name="name" required />
          <label>Email:</label>
          <input type="email" name="email" required />
          <label>Message:</label>
          <textarea name="message" required></textarea>
          <button type="submit">Submit</button>
        </form>
      </section>

      {/* Social Media Integration */}
      <footer>
        <div className="social-media">
          <h3>Follow Us</h3>
          <a href="https://facebook.com">Facebook</a>
          <a href="https://twitter.com">Twitter</a>
          <a href="https://linkedin.com">LinkedIn</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
