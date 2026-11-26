
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-content">

        <div className="footer-brand">
          <h2>☁ CloudSync</h2>
          <p>
            Your files. Your cloud. Your control.
            Secure cloud storage built for everyone.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-links">
          <h3>Resources</h3>
          <a href="#features">About Us</a>
          <a href="#features">Security</a>
          <a href="#pricing">Plans</a>
          <a href="#contact">Support</a>
        </div>

        <div className="footer-newsletter">
          <h3>Stay Updated</h3>
          <p>Get the latest CloudSync updates.</p>

          <form onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter your email"
              aria-label="Email address"
            />
            <button type="submit">Join</button>
          </form>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 CloudSync. All rights reserved.</p>
        <p>Built with React </p>
      </div>
    </footer>
  );
}

export default Footer;
