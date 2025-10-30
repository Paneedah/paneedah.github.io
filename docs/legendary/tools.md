---
sidebar_position: 3
---

# ⛏️ Legendary Tools

import '/src/css/legendary.css';
import { ToolCard } from '@site/src/components/LegendaryItems';
import { tools } from '@site/src/data/legendaryData';

<div className="legendary-info">
  <h3>About Legendary Tools</h3>
  <p>
    Legendary tools are specialized equipment designed to maximize your gathering and farming efficiency. These powerful tools offer unique abilities that can dramatically improve your resource collection.
  </p>
  <p>
    For detailed drop locations, see the <a href="./drop-locations">Drop Locations Guide</a>.
  </p>
</div>

<div className="legendary-grid">
  {tools.map(tool => (
    <ToolCard key={tool.id} tool={tool} />
  ))}
</div>