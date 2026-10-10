function Contact() {
  return (
    <div className="page-container">
      <h2>Contact Us</h2>

      <p>Email: support@studentmanagement.com</p>
      <p>Phone: +91 98765 43210</p>
      <p>Address: Hyderabad, Telangana, India</p>

      <h3>Send us a message</h3>

      <form>
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message"></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
