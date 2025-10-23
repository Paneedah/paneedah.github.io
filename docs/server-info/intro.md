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
  Join our awesome Discord community for support, updates, and events!
  <a href="https://discord.gg/britspve" target="_blank" rel="noopener noreferrer">
    <img 
      src="https://discord.com/api/guilds/1222282816918786150/widget.png?style=banner2" 
      alt="Join our Discord"
      style={{ 
        maxWidth: '100%', 
        height: 'auto',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
        transition: 'transform 0.2s ease',
        cursor: 'pointer'
      }}
      onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
      onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
    />
  </a>
</div>

## Core Features

<div className="prestige-grid" style={{ marginBottom: '2rem' }}>
  <div className="prestige-card">
    <h3>⭐ Prestige System</h3>
    <p>Level up to 100, then prestige to unlock permanent bonuses! Each prestige grants:</p>
    <ul style={{ fontSize: '0.9rem', color: '#d4d4d4' }}>
      <li>Increased health & backpack size</li>
      <li>Faster crafting & TC upgrades</li>
      <li>Movement speed bonuses</li>
      <li>Rested XP bonuses</li>
      <li>Access to exclusive perks</li>
    </ul>
    <div style={{ marginTop: '1rem' }}>
      <a href="/docs/progression/passive-perks" style={{ color: '#ffd580', textDecoration: 'none' }}>View Passive Perks →</a>
    </div>
  </div>

  <div className="prestige-card">
    <h3>🎯 Pickable Perks</h3>
    <p>Choose powerful abilities that suit your playstyle:</p>
    <ul style={{ fontSize: '0.9rem', color: '#d4d4d4' }}>
      <li>Pet Bear companion</li>
      <li>Teleport Gun</li>
      <li>Portable Recycler</li>
      <li>Night Vision</li>
      <li>Double Jump</li>
      <li>And more!</li>
    </ul>
    <div style={{ marginTop: '1rem' }}>
      <a href="/docs/progression/pickable-perks" style={{ color: '#ffd580', textDecoration: 'none' }}>View Pickable Perks →</a>
    </div>
  </div>

  <div className="prestige-card">
    <h3>🌍 Multiple Worlds</h3>
    <p>Explore different server types:</p>
    <ul style={{ fontSize: '0.9rem', color: '#d4d4d4' }}>
      <li><strong>W-Servers:</strong> Standard PVE worlds</li>
      <li><strong>R-Servers:</strong> Raid-enabled worlds</li>
      <li><strong>H-Servers:</strong> Hardcore challenges</li>
    </ul>
    <div style={{ marginTop: '1rem' }}>
      <a href="/docs/server-info/connection" style={{ color: '#ffd580', textDecoration: 'none' }}>View Server List →</a>
    </div>
  </div>

  <div className="prestige-card">
    <h3>🔄 Wipe Schedule</h3>
    <p>Plan your progression:</p>
    <ul style={{ fontSize: '0.9rem', color: '#d4d4d4' }}>
      <li><strong>Map:</strong> Every 2 weeks (Thursdays)</li>
      <li><strong>RP:</strong> Wipes with map</li>
      <li><strong>XP:</strong> Every 6 months</li>
      <li><strong>Blueprints:</strong> Only when forced</li>
    </ul>
    <div style={{ marginTop: '1rem' }}>
      <a href="/docs/server-info/wipe-info" style={{ color: '#ffd580', textDecoration: 'none' }}>View Wipe Schedule →</a>
    </div>
  </div>
</div>

## Essential Commands

Here are some commands you'll use frequently:

<div style={{ 
  background: 'rgba(20, 20, 20, 0.3)',
  border: '1px solid rgba(80, 80, 80, 0.2)',
  borderRadius: '8px',
  padding: '1.5rem',
  marginBottom: '2rem'
}}>
  <div style={{ display: 'grid', gap: '0.75rem' }}>
    <div style={{ display: 'flex', gap: '1rem', paddingLeft: '0.5rem' }}>
      <code style={{ color: '#fbd380', minWidth: '140px' }}>/st</code>
      <span style={{ color: '#a0a0a0' }}>Open Skill Tree (prestige at level 100)</span>
    </div>
    <div style={{ display: 'flex', gap: '1rem', paddingLeft: '0.5rem' }}>
      <code style={{ color: '#fbd380', minWidth: '140px' }}>/s or /shop</code>
      <span style={{ color: '#a0a0a0' }}>Open the marketplace</span>
    </div>
    <div style={{ display: 'flex', gap: '1rem', paddingLeft: '0.5rem' }}>
      <code style={{ color: '#fbd380', minWidth: '140px' }}>/home</code>
      <span style={{ color: '#a0a0a0' }}>Manage your home teleports</span>
    </div>
    <div style={{ display: 'flex', gap: '1rem', paddingLeft: '0.5rem' }}>
      <code style={{ color: '#fbd380', minWidth: '140px' }}>/outpost</code>
      <span style={{ color: '#a0a0a0' }}>Teleport to Outpost</span>
    </div>
    <div style={{ display: 'flex', gap: '1rem', paddingLeft: '0.5rem' }}>
      <code style={{ color: '#fbd380', minWidth: '140px' }}>/bandit</code>
      <span style={{ color: '#a0a0a0' }}>Teleport to Bandit Camp</span>
    </div>
    <div style={{ display: 'flex', gap: '1rem', paddingLeft: '0.5rem' }}>
      <code style={{ color: '#fbd380', minWidth: '140px' }}>/remove</code>
      <span style={{ color: '#a0a0a0' }}>Remove placed items (get resources back)</span>
    </div>
    <div style={{ display: 'flex', gap: '1rem', paddingLeft: '0.5rem' }}>
      <code style={{ color: '#fbd380', minWidth: '140px' }}>/wipe</code>
      <span style={{ color: '#a0a0a0' }}>Check time until next wipe</span>
    </div>
  </div>
  <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
    <a href="/docs/server-info/commands" style={{ color: '#ffd580', textDecoration: 'none' }}>View All Commands →</a>
  </div>
</div>

## First Steps

<div className="prestige-notes">
  <h3>🎯 Getting Started Checklist</h3>
  <ol style={{ fontSize: '0.95rem' }}>
    <li>Connect to a server using the IPs above or by searching <code style={{ background: 'rgba(255, 255, 255, 0.1)', padding: '0.15rem 0.35rem', borderRadius: '4px' }}>Brits 2x PvE Worlds</code></li>
    <li>Read the <a href="/docs/server-info/rules" style={{ color: '#ffd580' }}>server rules</a> to avoid any issues</li>
    <li>Join our <a href="https://discord.gg/britspve" style={{ color: '#ffd580' }}>Discord</a> for community support</li>
    <li>Set up your first home with <code style={{ background: 'rgba(255, 255, 255, 0.1)', padding: '0.15rem 0.35rem', borderRadius: '4px' }}>/home add [name]</code></li>
    <li>Start gathering XP to level up your Skill Tree</li>
    <li>Explore monuments and complete quests with <code style={{ background: 'rgba(255, 255, 255, 0.1)', padding: '0.15rem 0.35rem', borderRadius: '4px' }}>/q</code></li>
    <li>Work towards your first prestige at level 100!</li>
  </ol>
</div>

## Server Features (Coming Soon)

Some features are still being documented. Check back soon for guides on:

- 🍳 **Cooking System** - Advanced meal preparation
- 🌾 **Farming System** - Grow crops and manage plantations  
- 💣 **Buyable Raids** - Purchase and conquer raidable bases
- ⚔️ **Dungeons** - Challenging PvE dungeons
- ⛏️ **Virtual Quarries** - Automated resource gathering
- 🚁 **Patrol Helicopter** - Aerial challenges
- 🛡️ **Bradley APC** - Tank encounters

## Need Help?

If you run into any issues or have questions:

1. Check our <a href="/docs/server-info/commands" style={{ color: '#ffd580' }}>Commands List</a>
2. Ask in our <a href="https://discord.gg/britspve" style={{ color: '#ffd580' }}>Discord</a>
3. Create a support ticket (don't DM staff directly)
4. Review the <a href="/docs/server-info/rules" style={{ color: '#ffd580' }}>rules</a> if you're unsure about something

<div style={{ marginTop: '2rem' }}>
  <div style={{
    background: 'rgba(20, 20, 20, 0.4)',
    border: '1px solid rgba(80, 80, 80, 0.3)',
    borderRadius: '8px',
    padding: '1.5rem',
    marginBottom: '1rem'
  }}>
    <h3 style={{ color: '#ffd580', fontSize: '1.1rem', margin: '0 0 1rem 0' }}>Ready to Jump In?</h3>
    <p style={{ color: '#d4d4d4', margin: '0 0 0.75rem 0' }}>
      Jump in and begin your journey on BritsPVE! We can't wait to see you in-game.
    </p>
    <p style={{ color: '#d4d4d4', margin: '0 0 0.75rem 0' }}>
      It's also a good idea to join our <a href="https://discord.gg/britspve" style={{ color: '#ffd580' }}>Discord</a> for the latest updates and community support, as well as reading through our <a href="/docs/server-info/rules" style={{ color: '#ffd580' }}>server rules</a> to ensure a smooth experience.
    </p>
  </div>
</div>