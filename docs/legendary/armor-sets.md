---
sidebar_position: 2
---

# 🛡️ Legendary Armor Sets

import '/src/css/legendary.css';
import { ArmorSetCard } from '@site/src/components/LegendaryItems';
import { armorSets } from '@site/src/data/legendaryData';

<div className="legendary-info">
  <h3>About Legendary Armor</h3>
  <p>
    Legendary armor sets provide powerful bonuses and unique effects. Combat armor enhances your survivability in PvP and PvE scenarios, while gathering armor significantly boosts your resource collection efficiency.
  </p>
  <p>
    Set bonuses stack as you equip more pieces. For detailed drop locations, see the <a href="./drop-locations">Drop Locations Guide</a>.
  </p>
</div>

<div className="legendary-section-header">
  <h2>⚔️ Combat Armor</h2>
</div>

<div className="legendary-grid">
  {armorSets
    .filter(set => set.type === 'armor-combat')
    .map(armorSet => (
      <ArmorSetCard key={armorSet.id} armorSet={armorSet} />
    ))}
</div>

<div className="legendary-section-header">
  <h2>⚒️ Gathering Armor</h2>
</div>

<div className="legendary-grid">
  {armorSets
    .filter(set => set.type === 'armor-gathering')
    .map(armorSet => (
      <ArmorSetCard key={armorSet.id} armorSet={armorSet} />
    ))}
</div>