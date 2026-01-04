import { Link } from "react-router-dom";
import '../styles/globals.css'

export default function Home() {
  return (
    <div className="home">

      {/* HERO SECTION */}
      <section className="hero">
        <h1 className="hero-title">Fasika Farmers Connect</h1>
        <p className="hero-subtitle">
          Empowering Ethiopian farmers with real-time weather updates,
          agricultural advisory, and direct market access.
        </p>

        <div className="hero-actions">
          <Link to="/weather" className="btn btn-primary">
            View Weather
          </Link>
          <Link to="/market" className="btn btn-outline">
            Explore Market
          </Link>
        </div>
      </section>

      
      <section className="features">
        <h2 className="section-title">What We Offer</h2>

        <div className="features-grid">
          <FeatureCard
            title="Weather Advisory"
            description="Localized weather forecasts to help farmers plan planting and harvesting."
          />
          <FeatureCard
            title="Market Prices"
            description="Access up-to-date crop prices and connect with buyers directly."
          />
          <FeatureCard
            title="Farming Tips"
            description="Expert agricultural advice tailored to local conditions."
          />
          <FeatureCard
            title="Notifications"
            description="Receive alerts on weather changes, market trends, and advisories."
          />
        </div>
      </section>

      {/* USERS SECTION */}
      <section className="users">
        <h2 className="section-title">Who Is This Platform For?</h2>
        <ul className="users-list">
          <li>🌱 Small and large-scale farmers</li>
          <li>🛒 Agricultural buyers and suppliers</li>
          <li>📊 Agricultural experts and advisors</li>
        </ul>
      </section>

      {/* CALL TO ACTION */}
      <section className="cta">
        <h2>Start Making Smarter Farming Decisions Today</h2>
        <p>
          Use weather insights and market information to improve productivity.
        </p>
        <Link to="/advisory" className="btn btn-primary">
          Get Advisory
        </Link>
      </section>
    </div>

  )
}
function FeatureCard({ title, description }) {
  return (
    <div className="feature-card" >
      <h3 >{title}</h3>
      <p>{description}</p>
    </div>
  );
}