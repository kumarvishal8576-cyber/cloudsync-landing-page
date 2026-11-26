
import "./Pricing.css";

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "Perfect for getting started.",
    features: [
      "5 GB Cloud Storage",
      "Basic File Sharing",
      "Standard Security",
      "Email Support"
    ],
    popular: false
  },
  {
    name: "Pro",
    price: "$9",
    description: "For professionals and creators.",
    features: [
      "100 GB Cloud Storage",
      "Advanced File Sharing",
      "256-bit Encryption",
      "Priority Support",
      "Team Collaboration"
    ],
    popular: true
  },
  {
    name: "Business",
    price: "$29",
    description: "For teams and growing businesses.",
    features: [
      "1 TB Cloud Storage",
      "Unlimited File Sharing",
      "Advanced Security",
      "24/7 Support",
      "Team Management"
    ],
    popular: false
  }
];

function Pricing() {
  return (
    <section className="pricing" id="pricing">
      <div className="pricing-heading">
        <span>OUR PRICING</span>
        <h2>Simple Plans. <span>Powerful Features.</span></h2>
        <p>Choose the perfect plan for your storage needs.</p>
      </div>

      <div className="pricing-grid">
        {plans.map((plan, index) => (
          <div
            className={`pricing-card ${plan.popular ? "popular" : ""}`}
            key={index}
          >
            {plan.popular && (
              <div className="popular-badge">MOST POPULAR</div>
            )}

            <h3>{plan.name}</h3>
            <p className="plan-description">{plan.description}</p>

            <h2 className="plan-price">
              {plan.price}
              <small>/month</small>
            </h2>

            <button className="plan-btn">
              Get Started
            </button>

            <div className="plan-divider"></div>

            <ul>
              {plan.features.map((feature, i) => (
                <li key={i}>✓ {feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Pricing;
