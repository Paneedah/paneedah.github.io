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
      { name: 'EU-W1', restartTime: '17:00' },
      { name: 'EU-W2', restartTime: '18:00' },
      { name: 'EU-W3', restartTime: '19:00' },
      { name: 'EU-W4', restartTime: '21:00' },
      { name: 'EU-W5', restartTime: '22:00' },
      { name: 'EU-W6', restartTime: '00:00' },
      { name: 'EU-R1', restartTime: '20:00' },
      { name: 'EU-R2', restartTime: '23:00' },
      { name: 'EU-R3', restartTime: '01:00' },
      { name: 'EU-H1', restartTime: '02:00' },
      { name: 'EU-W7', restartTime: '03:00' },
      { name: 'EU-W8', restartTime: '04:00' },
      { name: 'EU-W9', restartTime: '05:00' }
    ],
    US: [
      { name: 'US-W1', restartTime: '00:00' },
      { name: 'US-W2', restartTime: '01:00' },
      { name: 'US-W3', restartTime: '02:00' },
      { name: 'US-W4', restartTime: '04:00' },
      { name: 'US-W5', restartTime: '05:00' },
      { name: 'US-W6', restartTime: '07:00' },
      { name: 'US-R1', restartTime: '03:00' },
      { name: 'US-R2', restartTime: '06:00' },
      { name: 'US-R3', restartTime: '08:00' },
      { name: 'US-H1', restartTime: '09:00' },
      { name: 'US-W7', restartTime: '10:00' },
      { name: 'US-W8', restartTime: '11:00' },
      { name: 'US-W9', restartTime: '12:00' }
    ]
  };

  const getNextRestartTime = (timeString) => {
    const [hours, minutes] = timeString.split(':').map(Number);
    
    const today = new Date();
    const restartToday = new Date(
      `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}T${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:00`
    );
    
    const mstTimeStr = restartToday.toLocaleString('en-US', { timeZone: 'America/Denver' });
    const localTimeStr = restartToday.toLocaleString('en-US');
    const mstDate = new Date(mstTimeStr);
    const localDate = new Date(localTimeStr);
    const offset = localDate - mstDate;
    const restartLocal = new Date(restartToday.getTime() - offset);
    
    // If restart time + 5 minutes has passed, show tomorrow's restart
    const fiveMinutesAfter = new Date(restartLocal.getTime() + 5 * 60 * 1000);
    if (fiveMinutesAfter <= currentTime) {
      restartLocal.setDate(restartLocal.getDate() + 1);
    }
    
    return restartLocal;
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
    
    // If within 5 minutes after restart time, show "Restarting..."
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
        background: restarting ? 'rgba(220, 20, 60, 0.15)' : soon ? 'rgba(255, 107, 53, 0.15)' : 'rgba(30, 32, 35, 0.85)',
        border: restarting ? '2px solid rgba(220, 20, 60, 0.6)' : soon ? '2px solid rgba(255, 107, 53, 0.5)' : '1px solid rgba(122, 128, 128, 0.3)',
        borderRadius: '8px',
        padding: '1rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        transition: 'all 0.3s ease',
        boxShadow: restarting ? '0 4px 12px rgba(220, 20, 60, 0.4)' : soon ? '0 4px 12px rgba(255, 107, 53, 0.3)' : '0 2px 4px rgba(0, 0, 0, 0.2)'
      }}>
        <div>
          <div style={{ 
            fontSize: '1.1rem', 
            fontWeight: 'bold', 
            color: restarting ? '#DC143C' : soon ? '#ff6b35' : '#ffd580',
            marginBottom: '0.25rem'
          }}>
            {server.name}
          </div>
          <div style={{ fontSize: '0.9rem', color: '#d4d4d4' }}>
            {formatRestartTime(restartDate)}
          </div>
        </div>
        <div style={{
          background: restarting ? 'rgba(220, 20, 60, 0.3)' : soon ? 'rgba(255, 107, 53, 0.3)' : 'rgba(255, 255, 255, 0.1)',
          padding: '0.5rem 1rem',
          borderRadius: '6px',
          fontWeight: 'bold',
          color: restarting ? '#DC143C' : soon ? '#ff6b35' : '#ffd580',
          minWidth: '80px',
          textAlign: 'center'
        }}>
          {getTimeUntilRestart(restartDate)}
        </div>
      </div>
    );
  };

  return (
    <div>
      <div style={{ 
        background: 'rgba(255, 107, 53, 0.15)',
        borderRadius: '12px',
        padding: '1.5rem',
        marginBottom: '2rem',
        border: '2px solid rgba(255, 107, 53, 0.4)',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
        textAlign: 'center'
      }}>
        <h3 style={{ color: '#ffd580', marginBottom: '1rem' }}>🌐 Connection IPs</h3>
        <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <div>
            <div style={{ fontSize: '0.9rem', color: '#d4d4d4', marginBottom: '0.5rem' }}>🇪🇺 Europe</div>
            <code style={{ 
              background: 'rgba(0, 0, 0, 0.3)', 
              padding: '0.5rem 1rem', 
              borderRadius: '6px',
              fontSize: '1.1rem',
              color: '#ffd580',
              display: 'inline-block'
            }}>
              worlds.eu.britspve.com
            </code>
          </div>
          <div>
            <div style={{ fontSize: '0.9rem', color: '#d4d4d4', marginBottom: '0.5rem' }}>🇺🇸 United States</div>
            <code style={{ 
              background: 'rgba(0, 0, 0, 0.3)', 
              padding: '0.5rem 1rem', 
              borderRadius: '6px',
              fontSize: '1.1rem',
              color: '#ffd580',
              display: 'inline-block'
            }}>
              worlds.us.britspve.com
            </code>
          </div>
        </div>
      </div>

      <div style={{
        background: 'rgba(30, 32, 35, 0.85)',
        border: '1px solid rgba(122, 128, 128, 0.3)',
        borderRadius: '12px',
        padding: '1rem',
        marginBottom: '2rem',
        textAlign: 'center',
        color: '#d4d4d4'
      }}>
        ⏰ All servers are given <strong style={{ color: '#ff6b35' }}>1 hour notice</strong> prior to restart times. Times shown in your local timezone.
      </div>

      {/* Region Selector */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        gap: '1rem', 
        marginBottom: '2rem' 
      }}>
        <button
          onClick={() => setSelectedRegion('EU')}
          style={{
            background: selectedRegion === 'EU' ? 'linear-gradient(135deg, rgba(255, 107, 53, 0.3), rgba(255, 107, 53, 0.2))' : 'rgba(30, 32, 35, 0.85)',
            border: selectedRegion === 'EU' ? '2px solid rgba(255, 107, 53, 0.6)' : '1px solid rgba(122, 128, 128, 0.3)',
            color: selectedRegion === 'EU' ? '#ff6b35' : '#d4d4d4',
            padding: '1rem 2rem',
            borderRadius: '12px',
            fontSize: '1.1rem',
            fontWeight: 'bold',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            boxShadow: selectedRegion === 'EU' ? '0 4px 12px rgba(255, 107, 53, 0.3)' : '0 2px 4px rgba(0, 0, 0, 0.2)'
          }}
        >
          🇪🇺 EU Servers
        </button>
        <button
          onClick={() => setSelectedRegion('US')}
          style={{
            background: selectedRegion === 'US' ? 'linear-gradient(135deg, rgba(255, 107, 53, 0.3), rgba(255, 107, 53, 0.2))' : 'rgba(30, 32, 35, 0.85)',
            border: selectedRegion === 'US' ? '2px solid rgba(255, 107, 53, 0.6)' : '1px solid rgba(122, 128, 128, 0.3)',
            color: selectedRegion === 'US' ? '#ff6b35' : '#d4d4d4',
            padding: '1rem 2rem',
            borderRadius: '12px',
            fontSize: '1.1rem',
            fontWeight: 'bold',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            boxShadow: selectedRegion === 'US' ? '0 4px 12px rgba(255, 107, 53, 0.3)' : '0 2px 4px rgba(0, 0, 0, 0.2)'
          }}
        >
          🇺🇸 US Servers
        </button>
      </div>

      {/* Server List */}
      <div>
        <h3 style={{ color: '#ffd580', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          {selectedRegion === 'EU' ? '🇪🇺 EU Servers' : '🇺🇸 US Servers'}
        </h3>
        <div style={{ display: 'grid', gap: '0.75rem' }}>
          {servers[selectedRegion].map(server => (
            <ServerCard key={server.name} server={server} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServerRestarts;