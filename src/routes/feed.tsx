import React, { useState } from 'react';

export default function FeedPage() {
  // Mock data that looks exactly like real GoldRush output
  const [tokens] = useState([
    { name: "AlphaNode", chain: "Base", concentration: "42%", risk: "Low", deployer: "0x7a2...34" },
    { name: "GigaVault", chain: "Eth", concentration: "89%", risk: "High", deployer: "0x112...9a" },
    { name: "NexusFI", chain: "Arb", concentration: "15%", risk: "Safe", deployer: "0xbc4...f2" },
  ]);

  return (
    <div className="landing-container" style={{marginTop: '20px'}}>
      <header>
        <div className="logo" onClick={() => window.location.href='/'} style={{cursor: 'pointer'}}>
          GoldRush <span>Intel</span>
        </div>
        <div className="badge">Live Scanning...</div>
      </header>

      <div style={{marginTop: '40px'}}>
        <h2 style={{fontSize: '2rem', marginBottom: '10px'}}>Live Intelligence Feed</h2>
        <p style={{color: '#94a3b8', marginBottom: '30px'}}>Tracking initial liquidity and holder distribution in real-time.</p>
        
        <div style={{overflowX: 'auto'}}>
          <table style={{width: '100%', borderCollapse: 'collapse', background: '#111827', borderRadius: '12px', overflow: 'hidden'}}>
            <thead>
              <tr style={{borderBottom: '1px solid #1f2937', textAlign: 'left'}}>
                <th style={{padding: '15px'}}>Token</th>
                <th style={{padding: '15px'}}>Top 20 Holders</th>
                <th style={{padding: '15px'}}>Deployer Risk</th>
                <th style={{padding: '15px'}}>Action</th>
              </tr>
            </thead>
            <tbody>
              {tokens.map((token, i) => (
                <tr key={i} style={{borderBottom: '1px solid #1f2937'}}>
                  <td style={{padding: '15px'}}>
                    <div style={{fontWeight: 'bold'}}>{token.name}</div>
                    <div style={{fontSize: '0.8rem', color: '#94a3b8'}}>{token.chain} • {token.deployer}</div>
                  </td>
                  <td style={{padding: '15px'}}>
                    <span style={{color: token.concentration > '50%' ? '#ef4444' : '#22c55e'}}>
                      {token.concentration} Supply
                    </span>
                  </td>
                  <td style={{padding: '15px'}}>
                    <span style={{
                      padding: '4px 8px', 
                      borderRadius: '4px', 
                      fontSize: '0.75rem',
                      background: token.risk === 'High' ? 'rgba(239, 68, 68, 0.1)' : 'rgba(34, 197, 94, 0.1)',
                      color: token.risk === 'High' ? '#ef4444' : '#22c55e'
                    }}>
                      {token.risk}
                    </span>
                  </td>
                  <td style={{padding: '15px'}}>
                    <button className="primary-btn" style={{padding: '6px 12px', fontSize: '0.8rem'}}>Scan</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
