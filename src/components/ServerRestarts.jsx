// src/components/ServerRestarts.jsx
import React, { useState, useEffect } from 'react';

const ServerRestarts = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [selectedRegion, setSelectedRegion] = useState('EU');

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

  return (
    <div>
      <div style={{ 
        background: 'rgba(20, 20, 20, 0.4)',
        borderRadius: '8px',
        padding: '1.5rem',
        marginBottom: '2rem',
        border: '1px solid rgba(80, 80, 80, 0.3)',
        textAlign: 'center'
      }}>
        <h3 style={{ color: '#ffd580', marginBottom: '1rem' }}>🌐 Connection IPs</h3>
        <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <div>
            <div style={{ fontSize: '0.9rem', color: '#d4d4d4', marginBottom: '0.5rem' }}>🇪🇺 Europe</div>
            <code style={{ 
              background: 'rgba(251, 211, 128, 0.15)', 
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
              background: 'rgba(251, 211, 128, 0.15)', 
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
        background: 'rgba(20, 20, 20, 0.4)',
        border: '1px solid rgba(80, 80, 80, 0.3)',
        borderRadius: '8px',
        padding: '1rem',
        marginBottom: '2rem',
        textAlign: 'center',
        color: '#d4d4d4'
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
            borderRadius: '8px',
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
            borderRadius: '8px',
            fontSize: '1.1rem',
            fontWeight: 'bold',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}
        >
          US Servers
        </button>
      </div>

      <div>
        <h3 style={{ color: '#ffd580', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          {selectedRegion === 'EU' ? 'EU Servers' : 'US Servers'}
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