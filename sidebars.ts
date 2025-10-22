import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    {
      type: 'category',
      label: 'Server Info',
      collapsed: false,
      items: [
        'intro',
        'rules',
        'wipe-info',
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
        'pve-content/dungeons',
        'pve-content/raids',
      ],
    },
    {
      type: 'category',
      label: 'Features',
      collapsed: false,
      items: [
        'features/farming',
        'features/cooking',
      ],
    },
  ],
};

export default sidebars;
