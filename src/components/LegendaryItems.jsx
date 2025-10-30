// LegendaryItems.jsx - React component for rendering legendary items from data
import React from 'react';

export const WeaponCard = ({ weapon }) => {
  return (
    <div className="legendary-card legendary-weapon legendary-special">
      <h3>{weapon.name}</h3>
      <div className="legendary-card-content">
        {weapon.weaponType && (
          <div className="legendary-stat-group">
            <h4>Weapon Type</h4>
            <div className="legendary-stat">
              <span className="legendary-stat-icon">{weapon.icon}</span>
              <span className="legendary-stat-text">{weapon.weaponType}</span>
            </div>
          </div>
        )}
        
        {weapon.description && (
          <div className="legendary-stat-group">
            <h4>Description</h4>
            <div className="legendary-stat">
              <span className="legendary-stat-icon">{weapon.icon}</span>
              <span className="legendary-stat-text">{weapon.description}</span>
            </div>
          </div>
        )}
        
        {weapon.abilities && weapon.abilities.length > 0 && (
          <div className="legendary-stat-group">
            <h4>Special Abilities</h4>
            {weapon.abilities.map((ability, index) => (
              <div className="legendary-stat" key={index}>
                <span className="legendary-stat-icon">{ability.icon}</span>
                <span className="legendary-stat-text" dangerouslySetInnerHTML={{ __html: ability.text }} />
              </div>
            ))}
          </div>
        )}
        
        {weapon.requirements && weapon.requirements.length > 0 && (
          <div className="legendary-requirement">
            <h4>Requirements</h4>
            {weapon.requirements.map((req, index) => (
              <div className="legendary-requirement-item" key={index}>
                <span className="legendary-requirement-icon">{req.icon}</span>
                <span className="legendary-requirement-text" dangerouslySetInnerHTML={{ __html: req.text }} />
              </div>
            ))}
          </div>
        )}
        
        <div className="legendary-effect-badge">
          {weapon.effectBadge}
        </div>
      </div>
    </div>
  );
};

export const ArmorSetCard = ({ armorSet }) => {
  const isGathering = armorSet.type === 'armor-gathering';
  const cardClass = isGathering ? 'legendary-card legendary-gathering' : 'legendary-card legendary-armor legendary-special';
  
  return (
    <div className={cardClass}>
      <h3>{armorSet.name}</h3>
      <div className="legendary-card-content">
        <div className="legendary-stat-group">
          <h4>Set Pieces ({armorSet.pieces.length} Total)</h4>
          <div className="armor-piece-list">
            {armorSet.pieces.map((piece, index) => (
              <div className="armor-piece" key={index}>
                <span className="armor-piece-name">{piece.name}</span>
                <span className="armor-piece-bonus">{piece.bonus}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="legendary-stat-group">
          <h4>Full Set Bonus</h4>
          <div className="legendary-stat">
            <span className="legendary-stat-icon">{armorSet.setBonus.icon}</span>
            <span className="legendary-stat-text" dangerouslySetInnerHTML={{ __html: armorSet.setBonus.text }} />
          </div>
        </div>
        
        <div className="legendary-effect-badge">
          {armorSet.effectBadge}
        </div>
      </div>
    </div>
  );
};

export const ToolCard = ({ tool }) => {
  return (
    <div className="legendary-card legendary-tool legendary-special">
      <h3>{tool.icon} {tool.name}</h3>
      <div className="legendary-card-content">
        <div className="legendary-stat-group">
          <h4>Tool Type</h4>
          <div className="legendary-stat">
            <span className="legendary-stat-icon">{tool.icon}</span>
            <span className="legendary-stat-text">{tool.toolType}</span>
          </div>
        </div>
        
        {tool.abilities && tool.abilities.length > 0 && (
          <div className="legendary-stat-group">
            <h4>Special Abilities</h4>
            {tool.abilities.map((ability, index) => (
              <div className="legendary-stat" key={index}>
                <span className="legendary-stat-icon">{ability.icon}</span>
                <span className="legendary-stat-text" dangerouslySetInnerHTML={{ __html: ability.text }} />
              </div>
            ))}
          </div>
        )}
        
        {tool.requirements && tool.requirements.length > 0 && (
          <div className="legendary-requirement">
            <h4>Requirements</h4>
            {tool.requirements.map((req, index) => (
              <div className="legendary-requirement-item" key={index}>
                <span className="legendary-requirement-icon">{req.icon}</span>
                <span className="legendary-requirement-text" dangerouslySetInnerHTML={{ __html: req.text }} />
              </div>
            ))}
          </div>
        )}
        
        <div className="legendary-effect-badge">
          {tool.effectBadge}
        </div>
      </div>
    </div>
  );
};