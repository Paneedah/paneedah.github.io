// legendaryData.js — clean rebuild (no bonuses, explicit items arrays, descriptive sources)

// -----------------------------------------------------------------------------
// Shared “display” names for sources (human-readable, spreadsheet-aligned)
// -----------------------------------------------------------------------------
const SOURCES = {
  // Drone
  DRONE_LOCKED: "Drone (Locked)",
  DRONE_ELITE: "Drone (Elite)",

  // Dungeons
  DUNGEON_EASY: "Dungeon (Easy)",
  DUNGEON_NORMAL: "Dungeon (Normal)",
  DUNGEON_MEDIUM: "Dungeon (Medium)",
  DUNGEON_HARD: "Dungeon (Hard)",
  DUNGEON_NIGHTMARE: "Dungeon (Nightmare)",

  // Helis
  HELI_EASY: "Heli (Easy)",
  HELI_MULTI_EASY: "Heli (Multi-Easy)",
  HELI_MEDIUM: "Heli (Medium)",
  HELI_MULTI_MED: "Heli (Multi-Medium)",
  HELI_HARD: "Heli (Hard)",
  HELI_MULTI_HARD: "Heli (Multi-Hard)",
  HELI_ELITE: "Heli (Elite)",
  HELI_LEG: "Heli (Legendary)",

  // Raids
  RAID_EASY: "Raid (Easy)",
  RAID_MEDIUM: "Raid (Medium)",
  RAID_HARD: "Raid (Hard)",
  RAID_EXPERT: "Raid (Expert)",
  RAID_NIGHTMARE: "Raid (Nightmare)",

  // Bradley
  BRADLEY_EASY: "Bradley (Easy)",
  BRADLEY_MEDIUM: "Bradley (Med)",
  BRADLEY_HARD: "Bradley (Hard)",
  BRADLEY_ELITE: "Bradley (Elite)",

  // Supply / Misc
  SUPPLY_DROP: "Supply Drop",
  BROWN_CRATES: "Brown Crates",
  WILD_PREFABS: "Wild Prefabs",
};

// -----------------------------------------------------------------------------
// WEAPONS
// -----------------------------------------------------------------------------
export const weapons = [
  {
    id: "brits-golden-m249",
    name: "Brit's Golden M249",
    icon: "🚁",
    type: "weapon",
    abilities: [{ icon: "🚁", text: "<strong>+50% damage</strong> to all helicopter types" }],
    effectBadge: "🚁 Absolute helicopter destroyer",
    dropLocations: [
      SOURCES.HELI_EASY,
      SOURCES.HELI_MULTI_EASY,
      SOURCES.HELI_MEDIUM,
      SOURCES.HELI_MULTI_MED,
      SOURCES.HELI_HARD,
      SOURCES.HELI_MULTI_HARD,
      SOURCES.HELI_ELITE,
      SOURCES.HELI_LEG,
      SOURCES.SUPPLY_DROP,
    ],
  },
  {
    id: "the-laginator",
    name: "The LAGINATOR",
    icon: "🚀",
    type: "weapon",
    description:
      "A fully automatic high-powered rocket launcher! The most chaotic and unstable weapon ever created in Rust",
    effectBadge: "💥 Automatic rocket launcher chaos",
    dropLocations: [SOURCES.SUPPLY_DROP],
  },
  {
    id: "eooooka",
    name: "Eooooka",
    icon: "💣",
    type: "weapon",
    description: "A satchel-powered Eoka pistol",
    effectBadge: "💥 Explosive single-shot devastation",
    dropLocations: [SOURCES.SUPPLY_DROP, SOURCES.HELI_EASY, SOURCES.HELI_MULTI_EASY],
  },
  {
    id: "plaguepiercer",
    name: "PlaguePiercer",
    icon: "🏹",
    type: "weapon",
    weaponType: "Bow",
    abilities: [{ icon: "🔬", text: "<strong>+500% damage</strong> vs Scientists" }],
    effectBadge: "🔬 One-shot scientists with ease",
    dropLocations: [SOURCES.SUPPLY_DROP],
  },
  {
    id: "the-cluster-clutch",
    name: "The Cluster Clutch",
    icon: "🔫",
    type: "weapon",
    weaponType: "Waterpipe Shotgun",
    abilities: [{ icon: "💣", text: "Fires <strong>6 F1 grenades</strong> per shot" }],
    effectBadge: "💥 Multi-grenade launcher disguised as a shotgun",
    dropLocations: [SOURCES.BRADLEY_EASY, SOURCES.BRADLEY_MEDIUM, SOURCES.BRADLEY_HARD],
  },
  {
    id: "huff-n-puff",
    name: "Huff-n-Puff",
    icon: "🎯",
    type: "weapon",
    weaponType: "Blowpipe",
    abilities: [{ icon: "🚀", text: "Shoots a <strong>ring of HV rockets</strong>" }],
    requirements: [{ icon: "⚠️", text: "<strong>Reload:</strong> Wooden Dart + HV Rockets" }],
    effectBadge: "🎯 360° rocket barrage from a blowpipe",
    dropLocations: [
      SOURCES.HELI_EASY,
      SOURCES.HELI_MULTI_EASY,
      SOURCES.HELI_MEDIUM,
      SOURCES.HELI_MULTI_MED,
      SOURCES.HELI_HARD,
      SOURCES.HELI_MULTI_HARD,
      SOURCES.SUPPLY_DROP,
    ],
  },
  {
    id: "ashmaker",
    name: "Ashmaker",
    icon: "🔫",
    type: "weapon",
    weaponType: "Revolver",
    abilities: [{ icon: "🚀", text: "Shoots <strong>HV rockets</strong> instead of bullets" }],
    requirements: [{ icon: "⚠️", text: "<strong>Reload:</strong> Pistol Ammo + HV Rockets" }],
    effectBadge: "🔫 Pocket rocket launcher",
    dropLocations: [
      SOURCES.BRADLEY_EASY,
      SOURCES.BRADLEY_MEDIUM,
      SOURCES.BRADLEY_HARD,
      SOURCES.BRADLEY_ELITE,
      SOURCES.RAID_EXPERT,
    ],
  },
  {
    id: "brits-boom-stick",
    name: "Brit's Boom Stick",
    icon: "💥",
    type: "weapon",
    description: "A chaotic fusion of high-powered revolver and rocket launcher",
    requirements: [{ icon: "⚠️", text: "<strong>Reload:</strong> Normal Rockets + Pistol Bullets" }],
    effectBadge: "💥 Hybrid destruction incarnate",
    dropLocations: [SOURCES.BRADLEY_MEDIUM, SOURCES.BRADLEY_HARD, SOURCES.BRADLEY_ELITE, SOURCES.SUPPLY_DROP],
  },
  {
    id: "brits-golden-ak",
    name: "Brit's Golden AK",
    icon: "👻",
    type: "weapon",
    abilities: [
      { icon: "👻", text: "<strong>Invisible to Bradley radar</strong> when held" },
      { icon: "🚁", text: "<strong>+20% damage</strong> to all helicopter types" },
    ],
    effectBadge: "👻 Ghost mode AK for stealth Bradley runs",
    dropLocations: [SOURCES.BRADLEY_MEDIUM, SOURCES.SUPPLY_DROP],
  },
  {
    id: "aces-python",
    name: "Ace's Python",
    icon: "🔫",
    type: "weapon",
    abilities: [
      { icon: "🔫", text: "<strong>50 round magazine</strong>" },
      { icon: "🚁", text: "<strong>+30% damage</strong> to all helicopter types" },
      { icon: "🥚", text: "Additional <strong>+20% damage</strong> when wearing Egg Suit" },
    ],
    effectBadge: "🔫 High-capacity heli melter",
    dropLocations: [
      SOURCES.DUNGEON_NORMAL,
      SOURCES.DUNGEON_MEDIUM,
      SOURCES.DUNGEON_HARD,
      SOURCES.DUNGEON_NIGHTMARE,
      SOURCES.HELI_EASY,
      SOURCES.HELI_MULTI_EASY,
      SOURCES.HELI_MEDIUM,
      SOURCES.HELI_MULTI_MED,
      SOURCES.HELI_HARD,
      SOURCES.HELI_MULTI_HARD,
      SOURCES.SUPPLY_DROP,
    ],
  },
];

// -----------------------------------------------------------------------------
// ARMOR (bonuses removed)
// -----------------------------------------------------------------------------
export const armorSets = [
  {
    id: "impact-guard",
    name: "Impact Guard Armor",
    type: "armor-combat",
    category: "Combat Armor",
    pieces: [
      { name: "Impact Facemask" },
      { name: "Impact Chestplate" },
      { name: "Impact Kilt" },
      { name: "Impact Hoodie" },
      { name: "Impact Gloves" },
      { name: "Impact Pants" },
      { name: "Impact Boots" },
    ],
    setBonus: { icon: "✨", text: "<strong>75% Uncanny Dodge</strong> chance" },
    effectBadge: "🎲 Uncanny Dodge: Chance to completely negate incoming damage",
    dropLocations: {
      "Impact Facemask": [SOURCES.DRONE_LOCKED, SOURCES.BRADLEY_ELITE, SOURCES.HELI_LEG],
      "Impact Chestplate": [SOURCES.DRONE_LOCKED, SOURCES.BRADLEY_ELITE, SOURCES.HELI_LEG],
      "Impact Kilt": [SOURCES.DRONE_LOCKED, SOURCES.BRADLEY_HARD, SOURCES.HELI_ELITE],
      "Impact Hoodie": [
        SOURCES.DRONE_LOCKED,
        SOURCES.DUNGEON_MEDIUM,
        SOURCES.HELI_MEDIUM,
        SOURCES.HELI_MULTI_MED,
        SOURCES.HELI_MULTI_HARD,
      ],
      "Impact Gloves": [SOURCES.DRONE_LOCKED, SOURCES.DUNGEON_MEDIUM, SOURCES.RAID_MEDIUM],
      "Impact Pants": [
        SOURCES.DRONE_LOCKED,
        SOURCES.DUNGEON_HARD,
        SOURCES.HELI_EASY,
        SOURCES.HELI_MULTI_EASY,
        SOURCES.BRADLEY_HARD,
      ],
      "Impact Boots": [SOURCES.DRONE_LOCKED, SOURCES.HELI_HARD, SOURCES.RAID_HARD],
    },
  },
  {
    id: "dragon-thorns",
    name: "Dragon Thorns Armor",
    type: "armor-combat",
    category: "Combat Armor",
    pieces: [
      { name: "Dragon Thorns Facemask" },
      { name: "Dragon Thorns Hoodie" },
      { name: "Dragon Thorns Cloak" },
      { name: "Dragon Thorns Gloves" },
      { name: "Dragon Thorns Boots" },
      { name: "Dragon Thorns Pants" },
    ],
    setBonus: { icon: "❤️", text: "<strong>12.5% Vampiric Healing</strong> total" },
    effectBadge: "💉 Vampiric Healing: Heal yourself when taking damage",
    dropLocations: {
      "Dragon Thorns Facemask": [SOURCES.DRONE_ELITE],
      "Dragon Thorns Hoodie": [SOURCES.DRONE_ELITE, SOURCES.DUNGEON_EASY, SOURCES.BRADLEY_MEDIUM],
      "Dragon Thorns Cloak": [SOURCES.DRONE_ELITE, SOURCES.DUNGEON_NORMAL, SOURCES.RAID_MEDIUM],
      "Dragon Thorns Gloves": [SOURCES.DRONE_ELITE, SOURCES.RAID_MEDIUM],
      "Dragon Thorns Boots": [SOURCES.DRONE_ELITE, SOURCES.BRADLEY_MEDIUM],
      "Dragon Thorns Pants": [SOURCES.DRONE_ELITE, SOURCES.DUNGEON_HARD, SOURCES.BRADLEY_MEDIUM],
    },
  },
  // Gathering sets (Brown Crates preserved)
  {
    id: "hunters",
    name: "Hunter's Armor Set",
    type: "armor-gathering",
    category: "Gathering Armor",
    gatherType: "Skinning",
    pieces: [{ name: "Hunter's Hat" }, { name: "Hunter's Chest" }, { name: "Hunter's Pants" }],
    setBonus: { icon: "🦌", text: "<strong>+50% Skinning Yield</strong>" },
    effectBadge: "🦌 Maximize animal harvest yields",
    dropLocations: {
      "Hunter's Hat": [SOURCES.BROWN_CRATES],
      "Hunter's Chest": [SOURCES.BROWN_CRATES],
      "Hunter's Pants": [SOURCES.BROWN_CRATES],
    },
  },
  {
    id: "mining",
    name: "Mining Armor Set",
    type: "armor-gathering",
    category: "Gathering Armor",
    gatherType: "Mining",
    pieces: [{ name: "Miner's Hat" }, { name: "Miner's Chest" }, { name: "Miner's Pants" }],
    setBonus: { icon: "⛏️", text: "<strong>+50% Mining Yield</strong>" },
    effectBadge: "⛏️ Double your ore gathering efficiency",
    dropLocations: {
      "Miner's Hat": [SOURCES.BROWN_CRATES],
      "Miner's Chest": [SOURCES.BROWN_CRATES],
      "Miner's Pants": [SOURCES.BROWN_CRATES],
    },
  },
  {
    id: "anglers",
    name: "Angler's Armor Set",
    type: "armor-gathering",
    category: "Gathering Armor",
    gatherType: "Fishing",
    pieces: [{ name: "Angler's Hat" }, { name: "Angler's Chest" }, { name: "Angler's Pants" }],
    setBonus: { icon: "🎣", text: "<strong>+100% Bonus</strong> (Research Pending)" },
    effectBadge: "🎣 Enhanced fishing capabilities",
    dropLocations: {
      "Angler's Hat": [SOURCES.BROWN_CRATES],
      "Angler's Chest": [SOURCES.BROWN_CRATES],
      "Angler's Pants": [SOURCES.BROWN_CRATES],
    },
  },
  {
    id: "farmers",
    name: "Farmer's Armor Set",
    type: "armor-gathering",
    category: "Gathering Armor",
    gatherType: "Farming",
    pieces: [{ name: "Farmer's Hat" }, { name: "Farmer's Chest" }, { name: "Farmer's Pants" }],
    setBonus: { icon: "🌾", text: "<strong>+30% Farming Yield</strong>" },
    effectBadge: "🌾 Harvest more crops from your farm",
    dropLocations: {
      "Farmer's Hat": [SOURCES.BROWN_CRATES],
      "Farmer's Chest": [SOURCES.BROWN_CRATES],
      "Farmer's Pants": [SOURCES.BROWN_CRATES],
    },
  },
  {
    id: "lumberjacks",
    name: "Lumberjack's Armor Set",
    type: "armor-gathering",
    category: "Gathering Armor",
    gatherType: "Woodcutting",
    pieces: [{ name: "Lumberjack's Hat" }, { name: "Lumberjack's Chest" }, { name: "Lumberjack's Pants" }],
    setBonus: { icon: "🪓", text: "<strong>+50% Wood Yield</strong>" },
    effectBadge: "🪓 Double your wood gathering rate",
    dropLocations: {
      "Lumberjack's Hat": [SOURCES.BROWN_CRATES],
      "Lumberjack's Chest": [SOURCES.BROWN_CRATES],
      "Lumberjack's Pants": [SOURCES.BROWN_CRATES],
    },
  },
  {
    id: "scavengers",
    name: "Scavenger's Armor Set",
    type: "armor-gathering",
    category: "Gathering Armor",
    gatherType: "Scavenging",
    pieces: [{ name: "Scavenger's Hat" }, { name: "Scavenger's Chest" }, { name: "Scavenger's Pants" }],
    setBonus: { icon: "🔍", text: "<strong>+30% Bonus</strong> (Research Pending)" },
    effectBadge: "🔍 Enhanced scavenging abilities",
    dropLocations: {
      "Scavenger's Hat": [SOURCES.BROWN_CRATES],
      "Scavenger's Chest": [SOURCES.BROWN_CRATES],
      "Scavenger's Pants": [SOURCES.BROWN_CRATES],
    },
  },
];

// -----------------------------------------------------------------------------
// TOOLS
// -----------------------------------------------------------------------------
export const tools = [
  {
    id: "brits-broken-axe",
    name: "Brit's Broken Axe",
    icon: "🪓",
    type: "tool",
    toolType: "Hatchet",
    abilities: [{ icon: "⛏️", text: "Chance to <strong>spawn 4 ore nodes</strong> when hitting trees" }],
    effectBadge: "✨ Turn wood farming into ore bonanza",
    dropLocations: [SOURCES.SUPPLY_DROP],
  },
  {
    id: "brits-broken-pickaxe",
    name: "Brit's Broken Pickaxe",
    icon: "⛏️",
    type: "tool",
    toolType: "Pickaxe",
    abilities: [{ icon: "💎", text: "<strong>+60% Yield</strong> when hitting ore nodes" }],
    effectBadge: "💰 Massively boost ore collection",
    dropLocations: [
      SOURCES.SUPPLY_DROP,
      SOURCES.HELI_EASY,
      SOURCES.HELI_MULTI_EASY,
      SOURCES.HELI_MEDIUM,
      SOURCES.HELI_MULTI_MED,
      SOURCES.HELI_MULTI_HARD,
    ],
  },
  {
    id: "fertile-bone",
    name: "Fertile Bone",
    icon: "🦴",
    type: "tool",
    toolType: "Farming Tool",
    abilities: [{ icon: "⚡", text: "<strong>Instantly grows crops</strong> to the next stage" }],
    requirements: [{ icon: "⚠️", text: "<strong>Cost:</strong> 50 Bone Fragments per plant stage" }],
    effectBadge: "🌾 Instant crop growth",
    dropLocations: [SOURCES.WILD_PREFABS],
  },
  {
    id: "reaping-spade",
    name: "Reaping Spade",
    icon: "🌿",
    type: "tool",
    toolType: "Harvesting Tool",
    abilities: [{ icon: "🔄", text: "Harvests <strong>all plants in 6m radius</strong> at once" }],
    effectBadge: "🚜 Mass harvest entire farms instantly",
    dropLocations: [SOURCES.WILD_PREFABS],
  },
];

// -----------------------------------------------------------------------------
// DROP LOCATIONS (explicit items arrays for consistency)
// -----------------------------------------------------------------------------
export const dropLocations = [
  // Drone
  { id: "drone-locked", name: SOURCES.DRONE_LOCKED, icon: "🎯", category: "Drone", items: { weapons: [], armor: [], tools: [] } },
  { id: "drone-elite", name: SOURCES.DRONE_ELITE, icon: "🎁", category: "Drone", items: { weapons: [], armor: [], tools: [] } },

  // Dungeons
  { id: "dungeon-easy", name: SOURCES.DUNGEON_EASY, icon: "🗝️", category: "Dungeon", items: { weapons: [], armor: [], tools: [] } },
  { id: "dungeon-normal", name: SOURCES.DUNGEON_NORMAL, icon: "🗝️", category: "Dungeon", items: { weapons: [], armor: [], tools: [] } },
  { id: "dungeon-medium", name: SOURCES.DUNGEON_MEDIUM, icon: "🗝️", category: "Dungeon", items: { weapons: [], armor: [], tools: [] } },
  { id: "dungeon-hard", name: SOURCES.DUNGEON_HARD, icon: "🗝️", category: "Dungeon", items: { weapons: [], armor: [], tools: [] } },
  { id: "dungeon-nightmare", name: SOURCES.DUNGEON_NIGHTMARE, icon: "🗝️", category: "Dungeon", items: { weapons: [], armor: [], tools: [] } },

  // Helis
  { id: "helis-easy", name: SOURCES.HELI_EASY, icon: "🔥", category: "Helis", items: { weapons: [], armor: [], tools: [] } },
  { id: "helis-multieasy", name: SOURCES.HELI_MULTI_EASY, icon: "🔥", category: "Helis", items: { weapons: [], armor: [], tools: [] } },
  { id: "helis-med", name: SOURCES.HELI_MEDIUM, icon: "🔥", category: "Helis", items: { weapons: [], armor: [], tools: [] } },
  { id: "helis-multimed", name: SOURCES.HELI_MULTI_MED, icon: "🔥", category: "Helis", items: { weapons: [], armor: [], tools: [] } },
  { id: "helis-hard", name: SOURCES.HELI_HARD, icon: "🔥", category: "Helis", items: { weapons: [], armor: [], tools: [] } },
  { id: "helis-multihard", name: SOURCES.HELI_MULTI_HARD, icon: "🔥", category: "Helis", items: { weapons: [], armor: [], tools: [] } },
  { id: "helis-elite", name: SOURCES.HELI_ELITE, icon: "🔥", category: "Helis", items: { weapons: [], armor: [], tools: [] } },
  { id: "helis-leg", name: SOURCES.HELI_LEG, icon: "🔥", category: "Helis", items: { weapons: [], armor: [], tools: [] } },

  // Raids
  { id: "raid-easy", name: SOURCES.RAID_EASY, icon: "🛡️", category: "Raid", items: { weapons: [], armor: [], tools: [] } },
  { id: "raid-medium", name: SOURCES.RAID_MEDIUM, icon: "🛡️", category: "Raid", items: { weapons: [], armor: [], tools: [] } },
  { id: "raid-hard", name: SOURCES.RAID_HARD, icon: "🛡️", category: "Raid", items: { weapons: [], armor: [], tools: [] } },
  { id: "raid-expert", name: SOURCES.RAID_EXPERT, icon: "🛡️", category: "Raid", items: { weapons: [], armor: [], tools: [] } },
  { id: "raid-nightmare", name: SOURCES.RAID_NIGHTMARE, icon: "🛡️", category: "Raid", items: { weapons: [], armor: [], tools: [] } },

  // Bradley
  { id: "bradley-easy", name: SOURCES.BRADLEY_EASY, icon: "🤖", category: "Bradley", items: { weapons: [], armor: [], tools: [] } },
  { id: "bradley-med", name: SOURCES.BRADLEY_MEDIUM, icon: "🤖", category: "Bradley", items: { weapons: [], armor: [], tools: [] } },
  { id: "bradley-hard", name: SOURCES.BRADLEY_HARD, icon: "🤖", category: "Bradley", items: { weapons: [], armor: [], tools: [] } },
  { id: "bradley-elite", name: SOURCES.BRADLEY_ELITE, icon: "🤖", category: "Bradley", items: { weapons: [], armor: [], tools: [] } },

  // Misc
  { id: "supply-drop", name: SOURCES.SUPPLY_DROP, icon: "📦", category: "Misc", items: { weapons: [], armor: [], tools: [] } },
  { id: "brown-crates", name: SOURCES.BROWN_CRATES, icon: "📦", category: "Misc", items: { weapons: [], armor: [], tools: [] } },
  { id: "wild-prefabs", name: SOURCES.WILD_PREFABS, icon: "🌾", category: "Misc", items: { weapons: [], armor: [], tools: [] } },
];
