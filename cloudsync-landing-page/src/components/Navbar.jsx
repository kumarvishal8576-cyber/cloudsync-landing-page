
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <span>☁</span> CloudSync
      </div>

      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#features">Features</a>
        <a href="#pricing">Pricing</a>
        <a href="#contact">Contact</a>
      </div>

      <button className="nav-btn">
        Get Started
      </button>
    </nav>
  );
}

export default Navbar;
