// DropLocationsSearch.jsx - Interactive search & filter (no bonuses, no set prefix, ordered categories)
import React, { useState, useMemo } from 'react';
import { weapons, armorSets, tools, dropLocations } from '../data/legendaryData';

const CATEGORY_RENDER_ORDER = ['Drone', 'Dungeon', 'Helis', 'Raid', 'Bradley', 'Misc'];

const DropLocationsSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all'); // Weapons / Armor / Tools
  const [selectedType, setSelectedType] = useState('all'); // Combat / Gathering
  const [selectedLocationCategory, setSelectedLocationCategory] = useState('all'); // Drone, Dungeon, Helis, Raid, Bradley, Misc

  // Flatten all items with their drop locations
  const allItems = useMemo(() => {
    const items = [];

    weapons.forEach(weapon => {
      items.push({
        ...weapon,
        category: 'weapon',
        displayType: 'Weapon',
      });
    });

    // Flatten armor pieces (no bonus, no prefix—use plain piece name)
    armorSets.forEach(set => {
      set.pieces.forEach(piece => {
        const locations = set.dropLocations[piece.name] || [];
        if (locations.length > 0) {
          items.push({
            id: `${set.id}-${piece.name.toLowerCase().replace(/\s+/g, '-')}`,
            name: piece.name, // plain piece name
            type: set.type,
            category: set.type === 'armor-combat' ? 'Combat Armor' : 'Gathering Armor',
            displayType: 'Armor',
            setName: set.name, // kept if needed elsewhere, but not rendered as prefix here
            dropLocations: locations,
          });
        }
      });
    });

    tools.forEach(tool => {
      items.push({
        ...tool,
        category: 'tool',
        displayType: 'Tool',
      });
    });

    return items;
  }, []);

  // Filter items based on search and filters
  const filteredItems = useMemo(() => {
    return allItems.filter(item => {
      const q = searchQuery.trim().toLowerCase();
      const matchesSearch =
        q === '' ||
        item.name.toLowerCase().includes(q) ||
        (item.setName && item.setName.toLowerCase().includes(q));

      const matchesCategory =
        selectedCategory === 'all' ||
        (selectedCategory === 'weapons' && item.displayType === 'Weapon') ||
        (selectedCategory === 'armor' && item.displayType === 'Armor') ||
        (selectedCategory === 'tools' && item.displayType === 'Tool');

      const matchesType =
        selectedType === 'all' ||
        (selectedType === 'combat' && item.type === 'armor-combat') ||
        (selectedType === 'gathering' && item.type === 'armor-gathering');

      return matchesSearch && matchesCategory && matchesType;
    });
  }, [allItems, searchQuery, selectedCategory, selectedType]);

  // Group items by drop location
  const itemsByLocation = useMemo(() => {
    const grouped = {};
    // Initialize all known locations
    dropLocations.forEach(location => {
      grouped[location.id] = {
        ...location,
        items: { weapons: [], armor: [], tools: [] },
      };
    });

    // Assign items into their respective locations by fuzzy name match
    filteredItems.forEach(item => {
      if (!item.dropLocations) return;
      item.dropLocations.forEach(locName => {
        const ln = String(locName).toLowerCase();
        const location = dropLocations.find(
          dl =>
            dl.name.toLowerCase() === ln ||
            dl.name.toLowerCase().includes(ln) ||
            ln.includes(dl.name.toLowerCase())
        );
        if (!location) return;

        if (item.displayType === 'Weapon') grouped[location.id].items.weapons.push(item);
        else if (item.displayType === 'Armor') grouped[location.id].items.armor.push(item);
        else if (item.displayType === 'Tool') grouped[location.id].items.tools.push(item);
      });
    });

    // Only keep populated locations
    return Object.values(grouped).filter(
      loc =>
        loc.items.weapons.length > 0 ||
        loc.items.armor.length > 0 ||
        loc.items.tools.length > 0
    );
  }, [filteredItems]);

  // Group by location category and lock rendering order
  const locationsByCategory = useMemo(() => {
    const grouped = {};
    itemsByLocation.forEach(loc => {
      if (!grouped[loc.category]) grouped[loc.category] = [];
      grouped[loc.category].push(loc);
    });
    return grouped;
  }, [itemsByLocation]);

  // Apply drop category filter and forced order
  const orderedCategoryEntries = useMemo(() => {
    const categories = selectedLocationCategory === 'all'
      ? CATEGORY_RENDER_ORDER
      : CATEGORY_RENDER_ORDER.filter(c => c === selectedLocationCategory);

    return categories
      .map(cat => [cat, locationsByCategory[cat] || []])
      .filter(([, locs]) => locs.length > 0);
  }, [locationsByCategory, selectedLocationCategory]);

  return (
    <div className="drop-locations-container">
      <div className="drop-search-controls">
        <div className="search-bar-container">
          <input
            type="text"
            className="drop-search-input"
            placeholder="🔍 Search items..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button
              className="search-clear-btn"
              onClick={() => setSearchQuery('')}
              aria-label="Clear search"
            >
              ✕
            </button>
          )}
        </div>

        <div className="filter-controls">
          {/* Item Category Filter */}
          <div className="filter-group">
            <label>Item Type:</label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="filter-select"
            >
              <option value="all">All Items</option>
              <option value="weapons">Weapons</option>
              <option value="armor">Armor</option>
              <option value="tools">Tools</option>
            </select>
          </div>

          {/* Armor Type Filter */}
          {selectedCategory === 'armor' && (
            <div className="filter-group">
              <label>Armor Type:</label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="filter-select"
              >
                <option value="all">All Types</option>
                <option value="combat">Combat</option>
                <option value="gathering">Gathering</option>
              </select>
            </div>
          )}

          {/* Drop Category Filter */}
          <div className="filter-group">
            <label>Drop Category:</label>
            <select
              value={selectedLocationCategory}
              onChange={(e) => setSelectedLocationCategory(e.target.value)}
              className="filter-select"
            >
              <option value="all">All Categories</option>
              <option value="Drone">Drone</option>
              <option value="Dungeon">Dungeon</option>
              <option value="Helis">Helis</option>
              <option value="Raid">Raid</option>
              <option value="Bradley">Bradley</option>
              <option value="Misc">Misc</option>
            </select>
          </div>

          <button
            className="filter-reset-btn"
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
              setSelectedType('all');
              setSelectedLocationCategory('all');
            }}
          >
            Reset Filters
          </button>
        </div>
      </div>

      <div className="results-count">
        {(() => {
            // Count total items across all visible locations
            let visibleCount = 0;
            orderedCategoryEntries.forEach(([, locations]) => {
            locations.forEach(location => {
                visibleCount +=
                location.items.weapons.length +
                location.items.armor.length +
                location.items.tools.length;
            });
            });
            return (
            <span>
                Showing {visibleCount} item{visibleCount !== 1 ? 's' : ''}
            </span>
            );
        })()}
      </div>


      {orderedCategoryEntries.map(([category, locations]) => (
        <div key={category}>
          <h2 className="category-header">{getCategoryIcon(category)} {category}</h2>
          <div className="legendary-grid">
            {locations.map(location => (
              <div key={location.id} className="legendary-card">
                <h3>{location.icon} {location.name}</h3>
                <div className="legendary-card-content">
                  {location.items.weapons.length > 0 && (
                    <div className="legendary-stat-group">
                      <h4>Weapons</h4>
                      {location.items.weapons.map(weapon => (
                        <div className="legendary-stat" key={weapon.id}>
                          <span className="legendary-stat-icon">⚔️</span>
                          <span className="legendary-stat-text">{weapon.name}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  {location.items.armor.length > 0 && (
                    <div className="legendary-stat-group">
                      <h4>Armor</h4>
                      {location.items.armor.map(armor => (
                        <div className="legendary-stat" key={armor.id}>
                          <span className="legendary-stat-icon">🛡️</span>
                          <span className="legendary-stat-text">{armor.name}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  {location.items.tools.length > 0 && (
                    <div className="legendary-stat-group">
                      <h4>Tools</h4>
                      {location.items.tools.map(tool => (
                        <div className="legendary-stat" key={tool.id}>
                          <span className="legendary-stat-icon">⛏️</span>
                          <span className="legendary-stat-text">{tool.name}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {filteredItems.length === 0 && (
        <div className="no-results">
          <p>No items found matching your search criteria.</p>
          <p>Try adjusting your filters or search query.</p>
        </div>
      )}
    </div>
  );
};

const getCategoryIcon = (category) => {
  const icons = {
    Drone: '🎯',
    Dungeon: '🗝️',
    Helis: '🚁',
    Raid: '🛡️',
    Bradley: '🤖',
    Misc: '📦',
  };
  return icons[category] || '📍';
};

export default DropLocationsSearch;
