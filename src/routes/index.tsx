import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      <header>
        <div className="logo">GoldRush <span>Intel</span></div>
        <nav>
          <button className="secondary-btn" style={{padding: '8px 16px', fontSize: '14px'}}>
            View on GitHub
          </button>
        </nav>
      </header>

      <main className="hero">
        <div className="badge">EVM Intelligence Layer</div>
        <h1>Token Launch <br/><span className="gradient-text">Intelligence Feed</span></h1>
        <p className="description">
          Surface new EVM token deployments, initial liquidity, and holder distribution in real time. 
          Track the first 20 holders before the crowd. That's the entire edge.
        </p>

        <div className="cta-group">
          <button className="primary-btn" onClick={() => navigate('/feed')}>
            View Live Feed →
          </button>
          <button className="secondary-btn">Documentation</button>
        </div>

        <div className="stats-grid">
          <div className="stat-card">
            <h3>100+</h3>
            <p>EVM Chains Supported</p>
          </div>
          <div className="stat-card">
            <h3>Real-time</h3>
            <p>Onchain Indexing</p>
          </div>
          <div className="stat-card">
            <h3>Top 20</h3>
            <p>Holder Distribution</p>
          </div>
        </div>
      </main>
    </div>
  );
}
