
import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="hero-badge">
          ✨ The Future of Cloud Storage
        </div>

       <h1>
          Store Everything.
         <br />
         <span>Work Smarter.</span>
        </h1>

        <p>
          Secure your files, collaborate with your team,
          and access everything from anywhere.
          Experience cloud storage built for the future.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">
            Get Started Free →
          </button>

          <button className="secondary-btn">
            Explore Features
          </button>
        </div>

        <div className="hero-stats">
          <div>
            <h3>10M+</h3>
            <span>Files Stored</span>
          </div>

          <div>
            <h3>99.9%</h3>
            <span>Uptime</span>
          </div>

          <div>
            <h3>256-bit</h3>
            <span>Encryption</span>
          </div>
        </div>
      </div>

      <div className="hero-visual">
        <div className="dashboard-card">
          <div className="dashboard-header">
            <div>
              <span className="dashboard-dot"></span>
              <span className="dashboard-dot"></span>
              <span className="dashboard-dot"></span>
            </div>
            <span>CloudSync Dashboard</span>
          </div>

          <div className="storage-info">
            <span>Cloud Storage</span>
            <h2>75.4 GB <small>/ 100 GB</small></h2>
            <div className="storage-bar">
              <div></div>
            </div>
            <span className="storage-caption">
              75% of your storage used
            </span>
          </div>

          <div className="file-grid">
            <div className="file-box">
              <span>📁</span>
              <h4>Documents</h4>
              <small>24 Files</small>
            </div>

            <div className="file-box">
              <span>🖼️</span>
              <h4>Images</h4>
              <small>156 Files</small>
            </div>

            <div className="file-box">
              <span>🎬</span>
              <h4>Videos</h4>
              <small>18 Files</small>
            </div>

            <div className="file-box">
              <span>📊</span>
              <h4>Projects</h4>
              <small>32 Files</small>
            </div>
          </div>

          <div className="dashboard-footer">
            <span>☁ All files synced</span>
            <span>● Online</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
