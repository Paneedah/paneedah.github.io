import React, { useState, useEffect } from "react";

const WipeSchedule = ({
  nextWipe = 1761850800,
  nextXpWipe = 1746727200,
}) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    expired: false,
  });

  const isXpWipe = () => nextWipe === nextXpWipe;

  useEffect(() => {
    const calculateWipeInfo = () => {
      const nextWipeMs = nextWipe * 1000;
      const now = Date.now();
      const diff = nextWipeMs - now;

      if (diff <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true };
      }

      return {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
        expired: false,
      };
    };

    setTimeLeft(calculateWipeInfo());
    const interval = setInterval(() => {
      setTimeLeft(calculateWipeInfo());
    }, 1000);

    return () => clearInterval(interval);
  }, [nextWipe]);

  const formatDate = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const formatTime = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      timeZoneName: "short",
    });
  };

  const TimeBox = ({ value, label }) => (
    <div
      style={{
        background:
          "linear-gradient(135deg, rgba(251, 211, 128, 0.15), rgba(251, 211, 128, 0.08))",
        border: "1px solid rgba(251, 211, 128, 0.3)",
        borderRadius: "10px",
        padding: "1.25rem 1rem",
        textAlign: "center",
        minWidth: "80px",
        transition: "transform 0.2s ease",
      }}
    >
      <div
        style={{
          fontSize: "2.5rem",
          fontWeight: "bold",
          color: "#ffd580",
          lineHeight: "1",
          marginBottom: "0.5rem",
        }}
      >
        {String(value).padStart(2, "0")}
      </div>
      <div
        style={{
          fontSize: "0.75rem",
          color: "#a0a0a0",
          textTransform: "uppercase",
          letterSpacing: "1px",
          fontWeight: "600",
        }}
      >
        {label}
      </div>
    </div>
  );

  return (
    <div>
      <div
        style={{
          background:
            "linear-gradient(135deg, rgba(251, 211, 128, 0.08), rgba(20, 20, 20, 0.6))",
          borderRadius: "12px",
          padding: "2rem",
          marginBottom: "2rem",
          border: "1px solid rgba(251, 211, 128, 0.3)",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
          <div
            style={{
              fontSize: "1.2rem",
              color: "#ffd580",
              marginBottom: "0.5rem",
              fontWeight: "600",
            }}
          >
            📅 {formatDate(nextWipe)}
          </div>
          <div
            style={{
              fontSize: "1.4rem",
              color: "#ffd580",
              fontWeight: "bold",
            }}
          >
            🕐 {formatTime(nextWipe)}
          </div>
        </div>

        {timeLeft.expired ? (
          <div
            style={{
              textAlign: "center",
              fontSize: "1.8rem",
              color: "#ffd580",
              fontWeight: "bold",
              padding: "2rem",
              background: "rgba(251, 211, 128, 0.1)",
              borderRadius: "10px",
              border: "1px solid rgba(251, 211, 128, 0.3)",
            }}
          >
            🎉 WIPE IS LIVE! 🎉
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "1rem",
              flexWrap: "wrap",
            }}
          >
            <TimeBox value={timeLeft.days} label="Days" />
            <TimeBox value={timeLeft.hours} label="Hours" />
            <TimeBox value={timeLeft.minutes} label="Minutes" />
            <TimeBox value={timeLeft.seconds} label="Seconds" />
          </div>
        )}
      </div>

      <div
        style={{
          background: "rgba(20, 20, 20, 0.4)",
          borderRadius: "12px",
          padding: "2rem",
          marginBottom: "2rem",
          border: "1px solid rgba(80, 80, 80, 0.3)",
        }}
      >
        <h3
          style={{
            color: "#ffd580",
            marginBottom: "1.5rem",
            textAlign: "center",
            fontSize: "1.3rem",
          }}
        >
          🎯 What's Wiping on {formatDate(nextWipe)}?
        </h3>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem",
            justifyContent: "center",
            marginBottom: "1.5rem",
          }}
        >
          <span
            style={{
              background: "rgba(251, 211, 128, 0.15)",
              padding: "0.75rem 1.5rem",
              borderRadius: "8px",
              color: "#ffd580",
              fontWeight: "bold",
              border: "1px solid rgba(251, 211, 128, 0.3)",
              fontSize: "1rem",
            }}
          >
            🗺️ Map
          </span>
          <span
            style={{
              background: "rgba(251, 211, 128, 0.15)",
              padding: "0.75rem 1.5rem",
              borderRadius: "8px",
              color: "#ffd580",
              fontWeight: "bold",
              border: "1px solid rgba(251, 211, 128, 0.3)",
              fontSize: "1rem",
            }}
          >
            💰 RP
          </span>
          {isXpWipe() && (
            <span
              style={{
                background:
                  "linear-gradient(135deg, rgba(255, 215, 0, 0.2), rgba(255, 215, 0, 0.1))",
                padding: "0.75rem 1.5rem",
                borderRadius: "8px",
                color: "#ffd700",
                fontWeight: "bold",
                border: "2px solid rgba(255, 215, 0, 0.5)",
                animation: "pulse 2s infinite",
                fontSize: "1rem",
              }}
            >
              ⭐ XP (RARE!)
            </span>
          )}
        </div>
        <div
          style={{
            textAlign: "center",
            fontSize: "1rem",
            color: "#d4d4d4",
            lineHeight: "1.8",
          }}
        >
          <div>
            📋 <strong style={{ color: "#ffd580" }}>Blueprints:</strong> Not
            wiping
          </div>
          {!isXpWipe() && (
            <div style={{ marginTop: "0.5rem" }}>
              ⭐ <strong style={{ color: "#ffd580" }}>XP:</strong> Not wiping
              (Next: {formatDate(nextXpWipe)})
            </div>
          )}
        </div>
      </div>

      <div
        style={{
          background: "rgba(20, 20, 20, 0.4)",
          borderRadius: "12px",
          padding: "2rem",
          border: "1px solid rgba(80, 80, 80, 0.3)",
        }}
      >
        <h3
          style={{
            color: "#ffd580",
            marginBottom: "1.5rem",
            fontSize: "1.2rem",
          }}
        >
          📋 Wipe Schedule Info
        </h3>
        <div style={{ display: "grid", gap: "0.75rem" }}>
          {[
            ["🗺️", "Map Wipe:", "Every 2 weeks on Thursdays at 1PM MST"],
            [
              "📋",
              "Blueprints:",
              "Don't wipe unless Facepunch forces it",
            ],
            ["💰", "RP:", "Wipes bi-weekly with the map"],
            ["⭐", "XP:", "Wipes every 6 months alongside force wipe"],
          ].map(([icon, title, desc], i) => (
            <div
              key={i}
              style={{
                padding: "0.75rem",
                background: "rgba(251, 211, 128, 0.05)",
                borderRadius: "6px",
                border: "1px solid rgba(80, 80, 80, 0.2)",
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
              }}
            >
              <span style={{ fontSize: "1.2rem" }}>{icon}</span>
              <span style={{ color: "#d4d4d4" }}>
                <strong style={{ color: "#ffd580" }}>{title}</strong> {desc}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.85; transform: scale(1.03); }
        }
      `}</style>
    </div>
  );
};

export default WipeSchedule;
