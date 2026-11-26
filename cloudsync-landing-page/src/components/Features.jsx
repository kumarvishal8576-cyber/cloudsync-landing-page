
import "./Features.css";

const features = [
  {
    icon: "🛡️",
    title: "Secure Storage",
    description:
      "Keep your important files protected with advanced encryption and security."
  },
  {
    icon: "⚡",
    title: "Lightning Fast",
    description:
      "Upload, download and access your files instantly from anywhere."
  },
  {
    icon: "🤝",
    title: "Easy Collaboration",
    description:
      "Share files and work together with your team without limitations."
  }
];

function Features() {
  return (
    <section className="features" id="features">
      <div className="features-heading">
        <span>OUR FEATURES</span>
        <h2>Everything You Need, <br />
          <span>All in One Place.</span>
        </h2>
        <p>
          Powerful tools designed to make your cloud
          storage experience simple and secure.
        </p>
      </div>

      <div className="features-grid">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-icon">
              {feature.icon}
            </div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
            <a href="#pricing">Learn more →</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
