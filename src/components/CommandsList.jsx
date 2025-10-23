// src/components/CommandsList.jsx
import React, { useState } from 'react';

const CommandsList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [copiedCmd, setCopiedCmd] = useState(null);

  const commands = {
    'Teleports': [
      { cmd: '/outpost', desc: 'Outpost teleport' },
      { cmd: '/bandit', desc: 'Bandit camp teleport' },
      { cmd: '/tower1-6', desc: 'Public Heli towers' },
      { cmd: '/hub', desc: 'Hub world teleport' },
    ],
    'Home Teleports': [
      { cmd: '/home add (name)', desc: 'Adds a home spawn point (Only while on a foundation)' },
      { cmd: '/home remove "name"', desc: 'Removes a home' },
      { cmd: '/home list', desc: 'Shows a list of your homes/names' },
      { cmd: '/home help', desc: 'Gives more information' }
    ],
    'Personal Teleports': [
      { cmd: '/tpr (name)', desc: 'Sends a teleport request to person' },
      { cmd: '/tpa', desc: 'Accepts incoming teleport request' },
      { cmd: '/tpb', desc: 'Teleports back to your location' },
      { cmd: '/tpc', desc: 'Cancel teleport' }
    ],
    'Skill Tree': [
      { cmd: '/locatenodes', desc: 'Locate skill nodes' },
      { cmd: '/track', desc: 'Track your progress' },
      { cmd: '/setgenes', desc: 'Set your genes' },
      { cmd: '/forage', desc: 'Foraging abilities' },
      { cmd: '/pouch', desc: 'Open pouch' },
      { cmd: '/teatime', desc: 'Tea time menu' },
      { cmd: '/strike', desc: 'Strike abilities' },
      { cmd: '/picklock', desc: 'Lockpicking' },
      { cmd: '/traps', desc: 'Trap management' },
      { cmd: '/sonar', desc: 'Sonar abilities' }
    ],
    'Shops': [
      { cmd: '/shop or /s or /m', desc: 'Shop/Marketplace' },
      { cmd: '/redeem shop', desc: 'Redeems items you have listed or sold in shop' },
      { cmd: '/sell', desc: 'Allows you to sell resources' },
      { cmd: '/fmarket', desc: 'Farmers market' }
    ],
    'Cooking': [
      { cmd: '/ibag', desc: 'Open ingredients bag' },
      { cmd: '/cook', desc: 'Opens cooking menu' },
      { cmd: '/backpack', desc: 'Opens backpack' }
    ],
    'Raidable Bases': [
      { cmd: '/buyraid', desc: 'Menu for purchasing raids' },
      { cmd: '/rb', desc: 'Stats on how many bases you\'ve raided' }
    ],
    'Dungeons': [
      { cmd: '/buydungeon', desc: 'Buy a dungeon with duct tape' }
    ],
    'Personal Vehicles': [
      { cmd: '/buy (vehicle)', desc: 'Vehicle purchase' },
      { cmd: '/spawn (vehicle)', desc: 'Spawn vehicle' }
    ],
    'Skinner': [
      { cmd: '/skin', desc: 'Skins your inventory' },
      { cmd: '/skincraft', desc: 'Sets default items to be skinned' },
      { cmd: '/skinitem', desc: 'Skins items you have already placed' },
      { cmd: '/skinrequest', desc: 'Requests skins to be added' },
      { cmd: '/skinbase', desc: 'Automatically skin all deployables in your base' }
    ],
    'Share Boxes/Barrels': [
      { cmd: '/share', desc: 'Allow access to all players' },
      { cmd: '/share <username>', desc: 'Allow access only to certain players' },
      { cmd: '/unshare', desc: 'Deny access from all players' },
      { cmd: '/unshare <username>', desc: 'Deny access to specific players only' },
      { cmd: '/sharelist', desc: 'List of permissions for the entity' },
      { cmd: '/shareclear', desc: 'Clear the list of permissions for the entity' },
      { cmd: '/checkit', desc: 'Checking loot protection' },
      { cmd: '/autoauthui', desc: 'Opens a customization panel for auto auth settings' }
    ],
    'Misc Commands': [
      { cmd: '/q', desc: 'Brings up the quest menu' },
      { cmd: '/wipe', desc: 'Shows you how long until next wipe' },
      { cmd: '/sb', desc: 'Skin Box' },
      { cmd: '/vq or /qr', desc: 'Virtual Quarries' },
      { cmd: '/st', desc: 'Skill Tree' },
      { cmd: '/bonus', desc: 'Shows the current total bonus value of your worn gathering clothes' },
      { cmd: '/remove', desc: 'Remove Items (with resources in inventory)' },
      { cmd: '/limit', desc: 'Entity limits' },
      { cmd: '/jet', desc: 'Activate JetPack' },
      { cmd: '/score', desc: 'Shows your XP ranking vs other players' },
      { cmd: '/tod', desc: 'Time of day' },
      { cmd: '/top', desc: 'Opens leaderboard' },
      { cmd: '/tc', desc: 'Check how many TCs you have' },
      { cmd: '/skini', desc: 'Skin the item you\'re looking at' },
      { cmd: '/stfix', desc: 'Allows players to fix most issues tied to their skills not loading' }
    ]
  };

  const filteredCommands = Object.entries(commands).reduce((acc, [category, cmds]) => {
    const filtered = cmds.filter(cmd => 
      cmd.cmd.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cmd.desc.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if (filtered.length > 0) {
      acc[category] = filtered;
    }
    return acc;
  }, {});

  const copyToClipboard = (text, cmdKey) => {
    navigator.clipboard.writeText(text);
    setCopiedCmd(cmdKey);
    setTimeout(() => setCopiedCmd(null), 2000);
  };

  return (
    <div>
      <h2 style={{ marginBottom: '1.5rem', color: '#d4d4d4' }}>Commands List</h2>

      <input
        type="text"
        placeholder="Search commands..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          width: '100%',
          padding: '0.75rem 1rem',
          background: 'rgba(20, 20, 20, 0.4)',
          border: '1px solid rgba(80, 80, 80, 0.3)',
          borderRadius: '6px',
          color: '#d4d4d4',
          fontSize: '0.95rem',
          outline: 'none',
          marginBottom: '2rem'
        }}
      />

      {Object.entries(filteredCommands).length > 0 ? (
        Object.entries(filteredCommands).map(([category, cmds]) => (
          <div key={category} style={{ marginBottom: '2.5rem' }}>
            <h3 style={{ 
              color: '#a0a0a0', 
              fontSize: '0.9rem',
              fontWeight: 'normal',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              marginBottom: '1rem',
              paddingBottom: '0.5rem',
              borderBottom: '1px solid rgba(80, 80, 80, 0.2)'
            }}>
              {category}
            </h3>
            <div style={{ display: 'grid', gap: '0.5rem' }}>
              {cmds.map((command, idx) => {
                const cmdKey = `${category}-${idx}`;
                const isCopied = copiedCmd === cmdKey;
                
                return (
                  <div
                    key={idx}
                    onClick={() => copyToClipboard(command.cmd.split(' ')[0], cmdKey)}
                    style={{
                      padding: '0.75rem 0.5rem',
                      background: 'rgba(20, 20, 20, 0.3)',
                      border: '1px solid rgba(80, 80, 80, 0.2)',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      position: 'relative'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(30, 30, 30, 0.5)';
                      e.currentTarget.style.borderColor = 'rgba(251, 211, 128, 0.3)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(20, 20, 20, 0.3)';
                      e.currentTarget.style.borderColor = 'rgba(80, 80, 80, 0.2)';
                    }}>
                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                      <code style={{
                        color: '#fbd380',
                        fontSize: '0.9rem',
                        fontWeight: '500',
                        minWidth: '180px',
                        flexShrink: 0,
                        paddingLeft: '0.5rem'
                      }}>
                        {command.cmd}
                      </code>
                      <span style={{ 
                        color: '#a0a0a0', 
                        fontSize: '0.9rem',
                        lineHeight: '1.4',
                        flex: 1
                      }}>
                        {command.desc}
                      </span>
                      {isCopied && (
                        <span style={{
                          color: '#4CAF50',
                          fontSize: '0.85rem',
                          fontWeight: '500',
                          marginLeft: 'auto',
                          animation: 'fadeIn 0.2s ease'
                        }}>
                          ✓ Copied
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))
      ) : (
        <div style={{
          textAlign: 'center',
          padding: '2rem',
          color: '#808080'
        }}>
          No commands found
        </div>
      )}

      <div style={{
        marginTop: '2rem',
        padding: '1rem',
        background: 'rgba(20, 20, 20, 0.3)',
        border: '1px solid rgba(80, 80, 80, 0.2)',
        borderRadius: '6px',
        fontSize: '0.9rem',
        color: '#a0a0a0',
        textAlign: 'center'
      }}>
        Click any command to copy it. Missing a command? Add it in the "Commands Megathread".
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default CommandsList;