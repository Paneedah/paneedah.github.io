---
sidebar_position: 1
---

# 🗡️ Legendary Weapons

import '/src/css/legendary.css';
import { WeaponCard } from '@site/src/components/LegendaryItems';
import { weapons } from '@site/src/data/legendaryData';

<div className="legendary-info">
  <h3>About Legendary Weapons</h3>
  <p>
    Legendary weapons are the most powerful and unique armaments in britRust. Each weapon features special abilities, enhanced stats, or devastating effects that make them highly sought after by players.
  </p>
  <p>
    For detailed drop locations, see the <a href="./drop-locations">Drop Locations Guide</a>.
  </p>
</div>

<div className="legendary-grid">
  {weapons.map(weapon => (
    <WeaponCard key={weapon.id} weapon={weapon} />
  ))}
</div>