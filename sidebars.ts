import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    {
      type: 'category',
      label: 'Server Info',
      collapsed: false,
      items: [
        'server-info/intro',
        'server-info/rules',
        'server-info/wipe-info',
        'server-info/connection',
        'server-info/commands',
      ],
    },
    {
      type: 'category',
      label: 'Progression',
      collapsed: false,
      items: [
        'progression/passive-perks',
        'progression/pickable-perks',
        'progression/xp-requirements',
      ],
    },
    {
      type: 'category',
      label: 'Boss Guides & PvE Content',
      collapsed: false,
      items: [
        'bosses/patrol-helicopter',
        'bosses/bradley-apc',
        'pve-content/buyable-raids',
        'pve-content/dungeons',
      ],
    },
    {
      type: 'category',
      label: 'Legendary Items',
      collapsed: false,
      items: [
        'legendary/drop-locations',
        'legendary/armor-sets',
        'legendary/weapons',
        'legendary/tools',
      ],
    },
    {
      type: 'category',
      label: 'Features',
      collapsed: false,
      items: [
        'features/farming',
        'features/virtual-quarry',
        'features/shop',
        'features/quests',
      ],
    },
  ],
};

export default sidebars;
