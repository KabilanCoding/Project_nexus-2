import React from "react";
import "./App.css";
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
      {/* Header Section */}
      <header>
        <h1>Welcome to Techy Software</h1>
        <p>We provide top-tier software solutions.</p>
        <button className="get-started-btn">Get Started</button>
      </header>

      {/* About Section */}
      <section className="about-us">
        <h2>About Us</h2>
        <p>Our goal is to provide innovative software solutions for a digital world.</p>
      </section>

      {/* Our Works Section */}
      <section className="our-works">
        <h2>Our Works</h2>
        <div className="work-gallery">
          <img src="link-to-image-1" alt="Work 1" />
          <img src="link-to-image-2" alt="Work 2" />
          <img src="link-to-image-3" alt="Work 3" />
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-us">
        <h2>Contact Us</h2>
        <form>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>
    </div>
  );
}

export default App;
