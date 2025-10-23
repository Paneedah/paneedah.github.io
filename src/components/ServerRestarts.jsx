// ServerRestarts.jsx - Already good, just minor emoji updates
// src/components/ServerRestarts.jsx
import React, { useState, useEffect } from 'react';

const ServerRestarts = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [selectedRegion, setSelectedRegion] = useState('US');

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const servers = {
    EU: [
      { name: 'EU-W1', restartTime: 1759791600 },
      { name: 'EU-W2', restartTime: 1759708800 },
      { name: 'EU-W3', restartTime: 1759712400 },
      { name: 'EU-W4', restartTime: 1759719600 },
      { name: 'EU-W5', restartTime: 1759723200 },
      { name: 'EU-W6', restartTime: 1759730400 },
      { name: 'EU-W7', restartTime: 1759741200 },
      { name: 'EU-W8', restartTime: 1759744800 },
      { name: 'EU-W9', restartTime: 1759748400 },
      { name: 'EU-R1', restartTime: 1759716000 },
      { name: 'EU-R2', restartTime: 1759726800 },
      { name: 'EU-R3', restartTime: 1759734000 },
      { name: 'EU-H1', restartTime: 1759737600 }
    ],
    US: [
      { name: 'US-W1', restartTime: 1759730400 },
      { name: 'US-W2', restartTime: 1759734000 },
      { name: 'US-W3', restartTime: 1759737600 },
      { name: 'US-W4', restartTime: 1759744800 },
      { name: 'US-W5', restartTime: 1759748400 },
      { name: 'US-W6', restartTime: 1759755600 },
      { name: 'US-W7', restartTime: 1759766400 },
      { name: 'US-W8', restartTime: 1759770000 },
      { name: 'US-W9', restartTime: 1759773600 },
      { name: 'US-R1', restartTime: 1759741200 },
      { name: 'US-R2', restartTime: 1759752000 },
      { name: 'US-R3', restartTime: 1759759200 },
      { name: 'US-H1', restartTime: 1759762800 }
    ]
  };

  const getNextRestartTime = (timestamp) => {
    const originalDate = new Date(timestamp * 1000);
    const hours = originalDate.getHours();
    const minutes = originalDate.getMinutes();
    
    const now = new Date();
    const todayRestart = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hours, minutes, 0, 0);
    
    const fiveMinutesAfter = new Date(todayRestart.getTime() + 5 * 60 * 1000);
    if (fiveMinutesAfter <= now) {
      todayRestart.setDate(todayRestart.getDate() + 1);
    }
    
    return todayRestart;
  };

  const formatRestartTime = (restartDate) => {
    return restartDate.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      timeZoneName: 'short'
    });
  };

  const getTimeUntilRestart = (restartDate) => {
    const diff = restartDate - currentTime;
    
    if (diff <= 0 && diff > -5 * 60 * 1000) {
      return 'Restarting...';
    }
    
    if (diff <= 0) {
      return 'Restarting...';
    }

    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    if (hours > 0) {
      return `${hours}h ${minutes}m`;
    } else if (minutes > 0) {
      return `${minutes}m ${seconds}s`;
    } else {
      return `${seconds}s`;
    }
  };

  const isRestartSoon = (restartDate) => {
    const diff = (restartDate - currentTime) / 1000 / 60;
    return diff > 0 && diff <= 60;
  };

  const isRestarting = (restartDate) => {
    const diff = restartDate - currentTime;
    return diff <= 0 && diff > -5 * 60 * 1000;
  };

  const ServerCard = ({ server }) => {
    const restartDate = getNextRestartTime(server.restartTime);
    const soon = isRestartSoon(restartDate);
    const restarting = isRestarting(restartDate);
    
    return (
      <div style={{
        background: restarting ? 'rgba(220, 20, 60, 0.15)' : soon ? 'rgba(251, 211, 128, 0.15)' : 'rgba(20, 20, 20, 0.4)',
        border: restarting ? '2px solid rgba(220, 20, 60, 0.6)' : soon ? '1px solid rgba(251, 211, 128, 0.4)' : '1px solid rgba(80, 80, 80, 0.3)',
        borderRadius: '8px',
        padding: '1rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        transition: 'all 0.3s ease'
      }}>
        <div>
          <div style={{ 
            fontSize: '1.1rem', 
            fontWeight: 'bold', 
            color: restarting ? '#DC143C' : soon ? '#ffd580' : '#ffd580',
            marginBottom: '0.25rem'
          }}>
            {server.name}
          </div>
          <div style={{ fontSize: '0.9rem', color: '#d4d4d4' }}>
            {formatRestartTime(restartDate)}
          </div>
        </div>
        <div style={{
          background: restarting ? 'rgba(220, 20, 60, 0.3)' : soon ? 'rgba(251, 211, 128, 0.2)' : 'rgba(255, 255, 255, 0.1)',
          padding: '0.5rem 1rem',
          borderRadius: '6px',
          fontWeight: 'bold',
          color: restarting ? '#DC143C' : soon ? '#ffd580' : '#a0a0a0',
          minWidth: '80px',
          textAlign: 'center'
        }}>
          {getTimeUntilRestart(restartDate)}
        </div>
      </div>
    );
  };

  const worldServers = servers[selectedRegion]
    .filter(s => s.name.includes('-W'))
    .sort((a, b) => a.name.localeCompare(b.name));
  
  const raidHubServers = servers[selectedRegion]
    .filter(s => s.name.includes('-R') || s.name.includes('-H'))
    .sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div>
      <div style={{ 
        background: 'rgba(20, 20, 20, 0.4)',
        borderRadius: '12px',
        padding: '1.5rem',
        marginBottom: '2rem',
        border: '1px solid rgba(80, 80, 80, 0.3)',
        textAlign: 'center'
      }}>
        <h3 style={{ color: '#ffd580', marginBottom: '1rem', fontSize: '1.2rem' }}>🌐 Connection IPs</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
          <div>
            <div style={{ fontSize: '0.9rem', color: '#a0a0a0', marginBottom: '0.5rem' }}>Europe</div>
            <code style={{ 
              background: 'rgba(251, 211, 128, 0.15)', 
              padding: '1rem', 
              borderRadius: '8px',
              fontSize: '1rem',
              color: '#ffd580',
              display: 'block',
              border: '1px solid rgba(251, 211, 128, 0.3)',
              fontWeight: '500'
            }}>
              connect worlds.eu.britspve.com
            </code>
          </div>
          <div>
            <div style={{ fontSize: '0.9rem', color: '#a0a0a0', marginBottom: '0.5rem' }}>United States</div>
            <code style={{ 
              background: 'rgba(251, 211, 128, 0.15)', 
              padding: '1rem', 
              borderRadius: '8px',
              fontSize: '1rem',
              color: '#ffd580',
              display: 'block',
              border: '1px solid rgba(251, 211, 128, 0.3)',
              fontWeight: '500'
            }}>
              connect worlds.us.britspve.com
            </code>
          </div>
        </div>
      </div>

      <div style={{
        background: 'rgba(20, 20, 20, 0.4)',
        border: '1px solid rgba(80, 80, 80, 0.3)',
        borderRadius: '12px',
        padding: '1rem',
        marginBottom: '2rem',
        textAlign: 'center',
        color: '#d4d4d4',
        lineHeight: '1.6'
      }}>
        ⏰ All servers are given <strong style={{ color: '#ffd580' }}>1 hour notice</strong> prior to restart times. Times shown in your local timezone.
      </div>

      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        gap: '1rem', 
        marginBottom: '2rem' 
      }}>
        <button
          onClick={() => setSelectedRegion('EU')}
          style={{
            background: selectedRegion === 'EU' ? 'rgba(251, 211, 128, 0.15)' : 'rgba(20, 20, 20, 0.4)',
            border: selectedRegion === 'EU' ? '1px solid rgba(251, 211, 128, 0.4)' : '1px solid rgba(80, 80, 80, 0.3)',
            color: selectedRegion === 'EU' ? '#ffd580' : '#d4d4d4',
            padding: '1rem 2rem',
            borderRadius: '10px',
            fontSize: '1.1rem',
            fontWeight: 'bold',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}
        >
          EU Servers
        </button>
        <button
          onClick={() => setSelectedRegion('US')}
          style={{
            background: selectedRegion === 'US' ? 'rgba(251, 211, 128, 0.15)' : 'rgba(20, 20, 20, 0.4)',
            border: selectedRegion === 'US' ? '1px solid rgba(251, 211, 128, 0.4)' : '1px solid rgba(80, 80, 80, 0.3)',
            color: selectedRegion === 'US' ? '#ffd580' : '#d4d4d4',
            padding: '1rem 2rem',
            borderRadius: '10px',
            fontSize: '1.1rem',
            fontWeight: 'bold',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}
        >
          US Servers
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '1.5rem' }}>
        <div>
          <h3 style={{ color: '#ffd580', marginBottom: '1rem', fontSize: '1.1rem' }}>
            🌍 World Servers
          </h3>
          <div style={{ display: 'grid', gap: '0.75rem' }}>
            {worldServers.map(server => (
              <ServerCard key={server.name} server={server} />
            ))}
          </div>
        </div>

        <div>
          <h3 style={{ color: '#ffd580', marginBottom: '1rem', fontSize: '1.1rem' }}>
            ⚔️ Raid & Hub Servers
          </h3>
          <div style={{ display: 'grid', gap: '0.75rem' }}>
            {raidHubServers.map(server => (
              <ServerCard key={server.name} server={server} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServerRestarts;