import '@site/src/css/prestige.css';

# Getting Started

Welcome to BritsPVE! This guide will help you get started on your journey through our custom Rust PVE experience.

<div style={{ marginBottom: '2rem' }}>
  <div style={{
    background: 'rgba(20, 20, 20, 0.4)',
    border: '1px solid rgba(80, 80, 80, 0.3)',
    borderRadius: '8px',
    padding: '1.5rem',
    marginBottom: '1rem'
  }}>
    <h3 style={{ color: '#ffd580', fontSize: '1.1rem', margin: '0 0 1rem 0' }}>🔍 Search in Server Browser</h3>
    <p style={{ color: '#d4d4d4', margin: '0 0 0.75rem 0' }}>
      Open Rust and search for:
    </p>
    <div style={{ textAlign: 'center' }}>
      <div style={{ 
        background: 'rgba(251, 211, 128, 0.15)', 
        padding: '0 1.5rem', 
        borderRadius: '6px',
        fontSize: '1.1rem',
        color: '#fbd380',
        fontWeight: 'bold' 
        }}>
        <p style={{ padding: '0.75rem 0', margin: 0 }}>Brits 2x PvE Worlds</p>
      </div>
    </div>
  </div>

  <div style={{
    background: 'rgba(20, 20, 20, 0.4)',
    border: '1px solid rgba(80, 80, 80, 0.3)',
    borderRadius: '8px',
    padding: '1.5rem'
  }}>
    <h3 style={{ color: '#ffd580', fontSize: '1.1rem', margin: '0 0 1rem 0' }}>🌐 Direct Connect via IP</h3>
    <p style={{ color: '#d4d4d4', margin: '0 0 1rem 0' }}>
      Press <strong style={{ color: '#ffd580' }}>F1</strong> in-game and type: <span style={{ background: 'rgba(255, 255, 255, 0.1)', padding: '0.2rem 0.4rem', borderRadius: '4px', color: '#fbd380', fontFamily: 'monospace' }}>client.connect [IP]</span>
    </p>
    
    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'space-around', flexWrap: 'wrap' }}>
      <div style={{ flex: '1', minWidth: '200px' }}>
        <div style={{ color: '#a0a0a0', fontSize: '0.85rem', marginBottom: '0.5rem' }}>EU Servers</div>
        <div style={{ 
          background: 'rgba(251, 211, 128, 0.15)', 
          padding: '0 0.75rem', 
          borderRadius: '6px',
          fontFamily: 'monospace',
          fontSize: '0.95rem',
          color: '#fbd380',
          fontWeight: '500'
        }}>
          <p style={{ padding: '0.75rem 0', margin: 0 }}>worlds.eu.britspve.com</p>
        </div>
      </div>
      
      <div style={{ flex: '1', minWidth: '200px' }}>
        <div style={{ color: '#a0a0a0', fontSize: '0.85rem', marginBottom: '0.5rem' }}>U.S. Servers</div>
        <div style={{ 
          background: 'rgba(251, 211, 128, 0.15)', 
          padding: '0 0.75rem', 
          borderRadius: '6px',
          fontFamily: 'monospace',
          fontSize: '0.95rem',
          color: '#fbd380',
          fontWeight: '500'
        }}>
          <p style={{ padding: '0.75rem 0', margin: 0 }}>worlds.us.britspve.com</p>
        </div>
      </div>
    </div>
  </div>
</div>

## Join Our Community

<div style={{ marginBottom: '2rem' }}>
  <p style={{ color: '#d4d4d4', marginBottom: '1rem', fontSize: '1rem', lineHeight: '1.6' }}>
    Join our awesome Discord community for support, updates, and events!
  </p>
  <a href="https://discord.gg/britrust" target="_blank" rel="noopener noreferrer" style={{ display: 'block' }}>
    <img 
      src="https://discord.com/api/guilds/1222282816918786150/widget.png?style=banner2" 
      alt="Join our Discord"
      style={{ 
        maxWidth: '100%', 
        height: 'auto',
        borderRadius: '12px',
        boxShadow: '0 8px 20px rgba(0, 0, 0, 0.3)',
        transition: 'transform 0.2s ease',
        cursor: 'pointer',
        border: '1px solid rgba(80, 80, 80, 0.3)'
      }}
    />
  </a>
</div>

## Core Features

<div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(280px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
  <div style={{
    background: 'rgba(20, 20, 20, 0.4)',
    border: '1px solid rgba(80, 80, 80, 0.3)',
    borderRadius: '12px',
    padding: '1.5rem',
    transition: 'transform 0.2s ease'
  }}>
    <h3 style={{ color: '#ffd580', fontSize: '1.2rem', margin: '0 0 1rem 0', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
      ⭐ Prestige System
    </h3>
    <p style={{ color: '#d4d4d4', lineHeight: '1.6', marginBottom: '1rem' }}>
      Level up to 100, then prestige to unlock permanent bonuses! Each prestige grants:
    </p>
    <div style={{ display: 'grid', gap: '0.5rem', marginBottom: '1rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <span style={{ fontSize: '1.1rem' }}>❤️</span>
        <span style={{ color: '#d4d4d4', fontSize: '0.9rem' }}>Increased health & backpack size</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <span style={{ fontSize: '1.1rem' }}>⚒️</span>
        <span style={{ color: '#d4d4d4', fontSize: '0.9rem' }}>Faster crafting & TC upgrades</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <span style={{ fontSize: '1.1rem' }}>🏃</span>
        <span style={{ color: '#d4d4d4', fontSize: '0.9rem' }}>Movement speed bonuses</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <span style={{ fontSize: '1.1rem' }}>🌙</span>
        <span style={{ color: '#d4d4d4', fontSize: '0.9rem' }}>Rested XP bonuses</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <span style={{ fontSize: '1.1rem' }}>🎯</span>
        <span style={{ color: '#d4d4d4', fontSize: '0.9rem' }}>Exclusive perks</span>
      </div>
    </div>
    <div style={{ textAlign: 'center' }}>
      <a href="/docs/progression/passive-perks" style={{ color: '#ffd580', textDecoration: 'none', fontWeight: '600' }}>View Passive Perks →</a>
    </div>
  </div>

  <div style={{
    background: 'rgba(20, 20, 20, 0.4)',
    border: '1px solid rgba(80, 80, 80, 0.3)',
    borderRadius: '12px',
    padding: '1.5rem',
    transition: 'transform 0.2s ease'
  }}>
    <h3 style={{ color: '#ffd580', fontSize: '1.2rem', margin: '0 0 1rem 0', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
      🎯 Pickable Perks
    </h3>
    <p style={{ color: '#d4d4d4', lineHeight: '1.6', marginBottom: '1rem' }}>
      Choose powerful abilities that suit your playstyle:
    </p>
    <div style={{ display: 'grid', gap: '0.5rem', marginBottom: '1rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <span style={{ fontSize: '1.1rem' }}>🐻</span>
        <span style={{ color: '#d4d4d4', fontSize: '0.9rem' }}>Pet Bear companion</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <span style={{ fontSize: '1.1rem' }}>🔫</span>
        <span style={{ color: '#d4d4d4', fontSize: '0.9rem' }}>Teleport Gun</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <span style={{ fontSize: '1.1rem' }}>♻️</span>
        <span style={{ color: '#d4d4d4', fontSize: '0.9rem' }}>Portable Recycler</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <span style={{ fontSize: '1.1rem' }}>🌙</span>
        <span style={{ color: '#d4d4d4', fontSize: '0.9rem' }}>Night Vision</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <span style={{ fontSize: '1.1rem' }}>⬆️</span>
        <span style={{ color: '#d4d4d4', fontSize: '0.9rem' }}>Double Jump</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <span style={{ fontSize: '1.1rem' }}>✨</span>
        <span style={{ color: '#d4d4d4', fontSize: '0.9rem' }}>And more!</span>
      </div>
    </div>
    <div style={{ textAlign: 'center' }}>
      <a href="/docs/progression/pickable-perks" style={{ color: '#ffd580', textDecoration: 'none', fontWeight: '600' }}>View Pickable Perks →</a>
    </div>
  </div>

  <div style={{
    background: 'rgba(20, 20, 20, 0.4)',
    border: '1px solid rgba(80, 80, 80, 0.3)',
    borderRadius: '12px',
    padding: '1.5rem',
    transition: 'transform 0.2s ease'
  }}>
    <h3 style={{ color: '#ffd580', fontSize: '1.2rem', margin: '0 0 1rem 0', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
      🌍 Multiple Worlds
    </h3>
    <p style={{ color: '#d4d4d4', lineHeight: '1.6', marginBottom: '1rem' }}>
      Explore different server types:
    </p>
    <div style={{ display: 'grid', gap: '0.5rem', marginBottom: '1rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <span style={{ fontSize: '1.1rem' }}>🌍</span>
        <span style={{ color: '#d4d4d4', fontSize: '0.9rem' }}><strong style={{ color: '#ffd580' }}>W-Servers:</strong> Standard PVE worlds</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <span style={{ fontSize: '1.1rem' }}>⚔️</span>
        <span style={{ color: '#d4d4d4', fontSize: '0.9rem' }}><strong style={{ color: '#ffd580' }}>R-Servers:</strong> Raid-enabled worlds</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <span style={{ fontSize: '1.1rem' }}>🏠</span>
        <span style={{ color: '#d4d4d4', fontSize: '0.9rem' }}><strong style={{ color: '#ffd580' }}>H-Servers:</strong> Hub worlds</span>
      </div>
    </div>
    <div style={{ textAlign: 'center' }}>
      <a href="/docs/server-info/connection" style={{ color: '#ffd580', textDecoration: 'none', fontWeight: '600' }}>View Server List →</a>
    </div>
  </div>

  <div style={{
    background: 'rgba(20, 20, 20, 0.4)',
    border: '1px solid rgba(80, 80, 80, 0.3)',
    borderRadius: '12px',
    padding: '1.5rem',
    transition: 'transform 0.2s ease'
  }}>
    <h3 style={{ color: '#ffd580', fontSize: '1.2rem', margin: '0 0 1rem 0', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
      🔄 Wipe Schedule
    </h3>
    <p style={{ color: '#d4d4d4', lineHeight: '1.6', marginBottom: '1rem' }}>
      Plan your progression:
    </p>
    <div style={{ display: 'grid', gap: '0.5rem', marginBottom: '1rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <span style={{ fontSize: '1.1rem' }}>🗺️</span>
        <span style={{ color: '#d4d4d4', fontSize: '0.9rem' }}><strong style={{ color: '#ffd580' }}>Map:</strong> Every 2 weeks (Thursdays)</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <span style={{ fontSize: '1.1rem' }}>💰</span>
        <span style={{ color: '#d4d4d4', fontSize: '0.9rem' }}><strong style={{ color: '#ffd580' }}>RP:</strong> Wipes with map</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <span style={{ fontSize: '1.1rem' }}>⭐</span>
        <span style={{ color: '#d4d4d4', fontSize: '0.9rem' }}><strong style={{ color: '#ffd580' }}>XP:</strong> Every 6 months</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <span style={{ fontSize: '1.1rem' }}>📘</span>
        <span style={{ color: '#d4d4d4', fontSize: '0.9rem' }}><strong style={{ color: '#ffd580' }}>Blueprints:</strong> Only when forced</span>
      </div>
    </div>
    <div style={{ textAlign: 'center' }}>
      <a href="/docs/server-info/wipe-info" style={{ color: '#ffd580', textDecoration: 'none', fontWeight: '600' }}>View Wipe Schedule →</a>
    </div>
  </div>
</div>

## Essential Commands

<div style={{ 
  background: 'rgba(20, 20, 20, 0.4)',
  border: '1px solid rgba(80, 80, 80, 0.3)',
  borderRadius: '12px',
  padding: '1.5rem',
  marginBottom: '2rem'
}}>
  <p style={{ color: '#d4d4d4', marginBottom: '1.5rem', lineHeight: '1.6' }}>
    Here are some commands you'll use frequently:
  </p>
  <div style={{ display: 'grid', gap: '0.5rem' }}>
    <div style={{ 
      display: 'flex', 
      alignItems: 'center',
      gap: '1rem',
      padding: '0.75rem',
      background: 'rgba(251, 211, 128, 0.05)',
      borderRadius: '6px',
      border: '1px solid rgba(80, 80, 80, 0.2)'
    }}>
      <code style={{ color: '#ffd580', minWidth: '150px', fontWeight: '600', paddingLeft: '0.5rem' }}>/st</code>
      <span style={{ color: '#d4d4d4', fontSize: '0.95rem' }}>Open Skill Tree (prestige at level 100)</span>
    </div>
    <div style={{ 
      display: 'flex', 
      alignItems: 'center',
      gap: '1rem',
      padding: '0.75rem',
      background: 'rgba(251, 211, 128, 0.05)',
      borderRadius: '6px',
      border: '1px solid rgba(80, 80, 80, 0.2)'
    }}>
      <code style={{ color: '#ffd580', minWidth: '150px', fontWeight: '600', paddingLeft: '0.5rem' }}>/s or /shop</code>
      <span style={{ color: '#d4d4d4', fontSize: '0.95rem' }}>Open the marketplace</span>
    </div>
    <div style={{ 
      display: 'flex', 
      alignItems: 'center',
      gap: '1rem',
      padding: '0.75rem',
      background: 'rgba(251, 211, 128, 0.05)',
      borderRadius: '6px',
      border: '1px solid rgba(80, 80, 80, 0.2)'
    }}>
      <code style={{ color: '#ffd580', minWidth: '150px', fontWeight: '600', paddingLeft: '0.5rem' }}>/home</code>
      <span style={{ color: '#d4d4d4', fontSize: '0.95rem' }}>Manage your home teleports</span>
    </div>
    <div style={{ 
      display: 'flex', 
      alignItems: 'center',
      gap: '1rem',
      padding: '0.75rem',
      background: 'rgba(251, 211, 128, 0.05)',
      borderRadius: '6px',
      border: '1px solid rgba(80, 80, 80, 0.2)'
    }}>
      <code style={{ color: '#ffd580', minWidth: '150px', fontWeight: '600', paddingLeft: '0.5rem' }}>/outpost</code>
      <span style={{ color: '#d4d4d4', fontSize: '0.95rem' }}>Teleport to Outpost</span>
    </div>
    <div style={{ 
      display: 'flex', 
      alignItems: 'center',
      gap: '1rem',
      padding: '0.75rem',
      background: 'rgba(251, 211, 128, 0.05)',
      borderRadius: '6px',
      border: '1px solid rgba(80, 80, 80, 0.2)'
    }}>
      <code style={{ color: '#ffd580', minWidth: '150px', fontWeight: '600', paddingLeft: '0.5rem' }}>/bandit</code>
      <span style={{ color: '#d4d4d4', fontSize: '0.95rem' }}>Teleport to Bandit Camp</span>
    </div>
    <div style={{ 
      display: 'flex', 
      alignItems: 'center',
      gap: '1rem',
      padding: '0.75rem',
      background: 'rgba(251, 211, 128, 0.05)',
      borderRadius: '6px',
      border: '1px solid rgba(80, 80, 80, 0.2)'
    }}>
      <code style={{ color: '#ffd580', minWidth: '150px', fontWeight: '600', paddingLeft: '0.5rem' }}>/remove</code>
      <span style={{ color: '#d4d4d4', fontSize: '0.95rem' }}>Remove placed items (get resources back)</span>
    </div>
    <div style={{ 
      display: 'flex', 
      alignItems: 'center',
      gap: '1rem',
      padding: '0.75rem',
      background: 'rgba(251, 211, 128, 0.05)',
      borderRadius: '6px',
      border: '1px solid rgba(80, 80, 80, 0.2)'
    }}>
      <code style={{ color: '#ffd580', minWidth: '150px', fontWeight: '600', paddingLeft: '0.5rem' }}>/wipe</code>
      <span style={{ color: '#d4d4d4', fontSize: '0.95rem' }}>Check time until next wipe</span>
    </div>
  </div>
  <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
    <a href="/docs/server-info/commands" style={{ color: '#ffd580', textDecoration: 'none', fontWeight: '600', fontSize: '1rem' }}>View All Commands →</a>
  </div>
</div>

## First Steps

<div className="prestige-notes">
  <h3>🎯 Getting Started Checklist</h3>
  <ol style={{ fontSize: '1rem', lineHeight: '1.8', color: '#d4d4d4' }}>
    <li>Connect to a server using the IPs above or search <code style={{ background: 'rgba(251, 211, 128, 0.15)', padding: '0.2rem 0.5rem', borderRadius: '4px', color: '#ffd580' }}>Brits 2x PvE Worlds</code></li>
    <li>Read the <a href="/docs/server-info/rules" style={{ color: '#ffd580', fontWeight: '600' }}>server rules</a> to avoid any issues</li>
    <li>Join our <a href="https://discord.gg/britspve" style={{ color: '#ffd580', fontWeight: '600' }}>Discord</a> for community support</li>
    <li>Set up your first home with <code style={{ background: 'rgba(251, 211, 128, 0.15)', padding: '0.2rem 0.5rem', borderRadius: '4px', color: '#ffd580' }}>/home add [name]</code></li>
    <li>Start gathering XP to level up your Skill Tree</li>
    <li>Explore monuments and complete quests with <code style={{ background: 'rgba(251, 211, 128, 0.15)', padding: '0.2rem 0.5rem', borderRadius: '4px', color: '#ffd580' }}>/q</code></li>
    <li>Work towards your first prestige at level 100!</li>
  </ol>
</div>

## Server Features

<div style={{
  background: 'rgba(20, 20, 20, 0.4)',
  border: '1px solid rgba(80, 80, 80, 0.3)',
  borderRadius: '12px',
  padding: '2rem',
  marginBottom: '2rem'
}}>
  <p style={{ color: '#d4d4d4', margin: '0 0 1.5rem 0', lineHeight: '1.6', fontSize: '1rem' }}>
    Some features are still being documented. Check back soon for detailed guides on:
  </p>
  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '0.75rem' }}>
    <div style={{ 
      padding: '1rem',
      background: 'rgba(251, 211, 128, 0.05)',
      borderRadius: '8px',
      border: '1px solid rgba(80, 80, 80, 0.2)'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <span style={{ fontSize: '1.3rem' }}>🍳</span>
        <div>
          <strong style={{ color: '#ffd580', display: 'block' }}>Cooking System</strong>
          <div style={{ fontSize: '0.85rem', color: '#a0a0a0' }}>Advanced meal preparation</div>
        </div>
      </div>
    </div>
    <div style={{ 
      padding: '1rem',
      background: 'rgba(251, 211, 128, 0.05)',
      borderRadius: '8px',
      border: '1px solid rgba(80, 80, 80, 0.2)'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <span style={{ fontSize: '1.3rem' }}>🌾</span>
        <div>
          <strong style={{ color: '#ffd580', display: 'block' }}>Farming System</strong>
          <div style={{ fontSize: '0.85rem', color: '#a0a0a0' }}>Grow crops and manage plantations</div>
        </div>
      </div>
    </div>
    <div style={{ 
      padding: '1rem',
      background: 'rgba(251, 211, 128, 0.05)',
      borderRadius: '8px',
      border: '1px solid rgba(80, 80, 80, 0.2)'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <span style={{ fontSize: '1.3rem' }}>💣</span>
        <div>
          <strong style={{ color: '#ffd580', display: 'block' }}>Buyable Raids</strong>
          <div style={{ fontSize: '0.85rem', color: '#a0a0a0' }}>Purchase and conquer raidable bases</div>
        </div>
      </div>
    </div>
    <div style={{ 
      padding: '1rem',
      background: 'rgba(251, 211, 128, 0.05)',
      borderRadius: '8px',
      border: '1px solid rgba(80, 80, 80, 0.2)'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <span style={{ fontSize: '1.3rem' }}>⚔️</span>
        <div>
          <strong style={{ color: '#ffd580', display: 'block' }}>Dungeons</strong>
          <div style={{ fontSize: '0.85rem', color: '#a0a0a0' }}>Challenging PvE dungeons</div>
        </div>
      </div>
    </div>
    <div style={{ 
      padding: '1rem',
      background: 'rgba(251, 211, 128, 0.05)',
      borderRadius: '8px',
      border: '1px solid rgba(80, 80, 80, 0.2)'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <span style={{ fontSize: '1.3rem' }}>⛏️</span>
        <div>
          <strong style={{ color: '#ffd580', display: 'block' }}>Virtual Quarries</strong>
          <div style={{ fontSize: '0.85rem', color: '#a0a0a0' }}>Automated resource gathering</div>
        </div>
      </div>
    </div>
    <div style={{ 
      padding: '1rem',
      background: 'rgba(251, 211, 128, 0.05)',
      borderRadius: '8px',
      border: '1px solid rgba(80, 80, 80, 0.2)'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <span style={{ fontSize: '1.3rem' }}>🚁</span>
        <div>
          <strong style={{ color: '#ffd580', display: 'block' }}>Patrol Helicopter</strong>
          <div style={{ fontSize: '0.85rem', color: '#a0a0a0' }}>Aerial challenges</div>
        </div>
      </div>
    </div>
    <div style={{ 
      padding: '1rem',
      background: 'rgba(251, 211, 128, 0.05)',
      borderRadius: '8px',
      border: '1px solid rgba(80, 80, 80, 0.2)'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <span style={{ fontSize: '1.3rem' }}>🛡️</span>
        <div>
          <strong style={{ color: '#ffd580', display: 'block' }}>Bradley APC</strong>
          <div style={{ fontSize: '0.85rem', color: '#a0a0a0' }}>Tank encounters</div>
        </div>
      </div>
    </div>
  </div>
</div>

## Need Help?

<div className="prestige-notes">
  <h3>💡 Support Resources</h3>
  <p style={{ lineHeight: '1.8' }}>If you run into any issues or have questions:</p>
  <ol style={{ fontSize: '1rem', lineHeight: '1.8', color: '#d4d4d4' }}>
    <li>Check our <a href="/docs/server-info/commands" style={{ color: '#ffd580', fontWeight: '600' }}>Commands List</a></li>
    <li>Ask in our <a href="https://discord.gg/britspve" style={{ color: '#ffd580', fontWeight: '600' }}>Discord</a></li>
    <li>Create a support ticket (don't DM staff directly)</li>
    <li>Review the <a href="/docs/server-info/rules" style={{ color: '#ffd580', fontWeight: '600' }}>rules</a> if you're unsure about something</li>
  </ol>
</div>

<div style={{
  background: 'linear-gradient(135deg, rgba(251, 211, 128, 0.08) 0%, rgba(22, 23, 26, 0.6) 100%)',
  border: '1px solid rgba(251, 211, 128, 0.3)',
  borderRadius: '12px',
  padding: '2rem',
  marginTop: '2rem',
  textAlign: 'center'
}}>
  <h3 style={{ color: '#ffd580', fontSize: '1.4rem', margin: '0 0 1rem 0' }}>🎮 Ready to Jump In?</h3>
  <p style={{ color: '#d4d4d4', margin: '0 0 1rem 0', lineHeight: '1.7', fontSize: '1.05rem' }}>
    Jump in and begin your journey on BritsPVE! We can't wait to see you in-game.
  </p>
  <p style={{ color: '#d4d4d4', margin: '0', lineHeight: '1.7', fontSize: '0.95rem' }}>
    Join our <a href="https://discord.gg/britspve" style={{ color: '#ffd580', fontWeight: '600' }}>Discord</a> for the latest updates and community support, and review our <a href="/docs/server-info/rules" style={{ color: '#ffd580', fontWeight: '600' }}>server rules</a> to ensure a smooth experience.
  </p>
</div>