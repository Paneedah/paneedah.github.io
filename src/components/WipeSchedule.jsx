import React, { useState, useEffect } from 'react';

const WipeSchedule = ({ nextWipeDate = '2025-10-30', nextXpWipeDate = '2026-03-06' }) => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  
  const parseWipeDateTime = (dateString) => {
    const [year, month, day] = dateString.split('-').map(Number);
    const dateStr = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}T13:00:00`;
    const tempDate = new Date(dateStr);
    const mountainTimeStr = tempDate.toLocaleString('en-US', { timeZone: 'America/Denver' });
    const localTimeStr = tempDate.toLocaleString('en-US');
    const mountainDate = new Date(mountainTimeStr);
    const localDate = new Date(localTimeStr);
    const offset = localDate - mountainDate;
    return new Date(tempDate.getTime() - offset);
  };
  
  const isXpWipe = () => {
    return nextWipeDate === nextXpWipeDate;
  };
  
  useEffect(() => {
    const calculateWipeInfo = () => {
      const nextWipe = parseWipeDateTime(nextWipeDate);
      const now = new Date();
      const diff = nextWipe - now;
      
      if (diff <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true };
      }
      
      return {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
        expired: false
      };
    };
    
    setTimeLeft(calculateWipeInfo());
    const interval = setInterval(() => {
      setTimeLeft(calculateWipeInfo());
    }, 1000);
    
    return () => clearInterval(interval);
  }, [nextWipeDate]);
  
  const formatDate = (dateString) => {
    const date = parseWipeDateTime(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric'
    });
  };
  
  const formatTime = (dateString) => {
    const date = parseWipeDateTime(dateString);
    return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      timeZoneName: 'short'
    });
  };
  
  const TimeBox = ({ value, label }) => (
    <div style={{
      background: 'rgba(251, 211, 128, 0.15)',
      border: '1px solid rgba(80, 80, 80, 0.3)',
      borderRadius: '8px',
      padding: '1rem',
      textAlign: 'center',
      minWidth: '70px'
    }}>
      <div style={{
        fontSize: '2rem',
        fontWeight: 'bold',
        color: '#ffd580',
        lineHeight: '1',
        marginBottom: '0.25rem'
      }}>
        {String(value).padStart(2, '0')}
      </div>
      <div style={{
        fontSize: '0.75rem',
        color: '#a0a0a0',
        textTransform: 'uppercase',
        letterSpacing: '0.5px'
      }}>
        {label}
      </div>
    </div>
  );
  
  return (
    <div>
      {/* What's Wiping Box */}
      <div style={{ 
        background: 'rgba(20, 20, 20, 0.4)',
        borderRadius: '8px',
        padding: '1.5rem',
        marginBottom: '1.5rem',
        border: '1px solid rgba(80, 80, 80, 0.3)'
      }}>
        <h3 style={{ color: '#ffd580', marginBottom: '1rem', textAlign: 'center' }}>
          🎯 What's Wiping on {formatDate(nextWipeDate)}?
        </h3>
        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: '0.75rem',
          justifyContent: 'center',
          marginBottom: '1rem'
        }}>
          <span style={{
            background: 'rgba(251, 211, 128, 0.15)',
            padding: '0.5rem 1rem',
            borderRadius: '6px',
            color: '#ffd580',
            fontWeight: 'bold',
            border: '1px solid rgba(80, 80, 80, 0.3)'
          }}>
            🌍 Map
          </span>
          <span style={{
            background: 'rgba(251, 211, 128, 0.15)',
            padding: '0.5rem 1rem',
            borderRadius: '6px',
            color: '#ffd580',
            fontWeight: 'bold',
            border: '1px solid rgba(80, 80, 80, 0.3)'
          }}>
            💰 RP
          </span>
          {isXpWipe() && (
            <span style={{
              background: 'rgba(255, 215, 0, 0.2)',
              padding: '0.5rem 1rem',
              borderRadius: '6px',
              color: '#ffd700',
              fontWeight: 'bold',
              border: '2px solid rgba(255, 215, 0, 0.4)',
              animation: 'pulse 2s infinite'
            }}>
              ⭐ XP (RARE!)
            </span>
          )}
        </div>
        <div style={{ textAlign: 'center', fontSize: '0.9rem', color: '#d4d4d4' }}>
          <div>📋 <strong>Blueprints:</strong> Not wiping</div>
          {!isXpWipe() && (
            <div style={{ marginTop: '0.25rem' }}>
              ⭐ <strong>XP:</strong> Not wiping (Next: {formatDate(nextXpWipeDate)})
            </div>
          )}
        </div>
      </div>
      
      {/* Countdown Timer Box */}
      <div style={{ 
        background: 'rgba(20, 20, 20, 0.4)',
        borderRadius: '8px',
        padding: '1.5rem',
        marginBottom: '1.5rem',
        border: '1px solid rgba(80, 80, 80, 0.3)'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
          <div style={{ fontSize: '1.1rem', color: '#ffd580', marginBottom: '0.25rem' }}>
            📅 {formatDate(nextWipeDate)}
          </div>
          <div style={{ fontSize: '1.3rem', color: '#ffd580', fontWeight: 'bold' }}>
            🕐 {formatTime(nextWipeDate)}
          </div>
        </div>
        
        {timeLeft.expired ? (
          <div style={{
            textAlign: 'center',
            fontSize: '1.5rem',
            color: '#ffd580',
            fontWeight: 'bold',
            padding: '2rem'
          }}>
            🎉 WIPE IS LIVE! 🎉
          </div>
        ) : (
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
            flexWrap: 'wrap'
          }}>
            <TimeBox value={timeLeft.days} label="Days" />
            <TimeBox value={timeLeft.hours} label="Hours" />
            <TimeBox value={timeLeft.minutes} label="Minutes" />
            <TimeBox value={timeLeft.seconds} label="Seconds" />
          </div>
        )}
      </div>
      
      {/* General Schedule Info Box */}
      <div style={{ 
        background: 'rgba(20, 20, 20, 0.4)',
        borderRadius: '8px',
        padding: '1.5rem',
        border: '1px solid rgba(80, 80, 80, 0.3)'
      }}>
        <h3 style={{ color: '#ffd580', marginBottom: '1rem' }}>📋 Wipe Schedule Info</h3>
        <ul style={{ fontSize: '0.95rem', color: '#d4d4d4' }}>
          <li>🌍 <strong>Map Wipe:</strong> Every 2 weeks on Thursdays at 1PM MST</li>
          <li>📋 <strong>Blueprints:</strong> Don't wipe unless Facepunch forces it</li>
          <li>💰 <strong>RP:</strong> Wipes bi-weekly with the map</li>
          <li>⭐ <strong>XP:</strong> Wipes every 6 months alongside force wipe</li>
        </ul>
      </div>
      
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.05); }
        }
      `}</style>
    </div>
  );
};

export default WipeSchedule;