---
slug: wipe-and-changelog-oct-2025
title: "16th October | 🗒️ Wipe & Changelog"
authors: [brit, mad, crying]
tags: [wipe, changelog, rust, update, prestige]
date: 2025-10-16T12:06:00-06:00
description: "Map wipe announcement and detailed changelog for October 16, 2025 — including quest fixes, loot balance, new kits, and plugin improvements."
image: /img/wipe-banner.jpg
---

import '/src/css/prestige.css';

<br />

<div class="prestige-notes">
  <h3>🧭 What has Wiped?</h3>
  <ul>
    <li>This is a <strong>map wipe only</strong> — blueprints, XP, and Prestige remain.</li>
    <li>Multiple systems updated to improve quest rewards, loot balance, and plugin stability.</li>
  </ul>
</div>

---

<div class="prestige-grid" style={{gridTemplateColumns: 'repeat(1, minmax(320px, 1fr))'}}>

  <div class="prestige-card">
    <h3>🧾 General Notes</h3>
    <div class="prestige-card-content">
      <ul>
        <li>This is a <strong>map wipe only</strong>.</li>
        <li>Blueprints, XP, and Prestige remain untouched.</li>
        <li>Several systems received backend improvements for reward balancing and plugin performance.</li>
      </ul>
    </div>
  </div>

  <div class="prestige-card">
    <h3>📜 Quests</h3>
    <div class="prestige-card-content">
      <ul>
        <li>Fixed quests that didn’t reset on wipe.</li>
        <li>Added <code>Basic</code> & <code>Advanced Blueprint Fragments</code> to starter and Tier 2 Quartermaster quest rewards.</li>
        <li>Yellow barrels now count towards <strong>“Barrel Basher.”</strong></li>
        <li>Adjusted XP reward for “Things seem to have gotten… out of hand” from <code>150k XP → 1.5m XP</code>.</li>
      </ul>
    </div>
  </div>

  <div class="prestige-card">
    <h3>🍳 Cooking</h3>
    <div class="prestige-card-content">
      <ul>
        <li>
          Added <code>Blueprint Fragments</code> and <code>Tarp</code> to the blacklist for:
          <ul>
            <li><strong>Duplicator Buff</strong></li>
            <li><strong>Crafting Refund Buff</strong></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>

  <div class="prestige-card">
    <h3>🌳 Skill Tree</h3>
    <div class="prestige-card-content">
      <ul>
        <li>
          Added <code>Blueprint Fragments</code> and <code>Planters</code> to blacklist on:
          <ul>
            <li>Duplicator</li>
            <li>Thrift Tinkerer</li>
          </ul>
        </li>
        <li>
          <strong>Strike Command</strong> changes:
          <ul>
            <li>Reduced radius: <code>60m → 15m</code></li>
            <li>Reduced prevention timer: <code>30m → 5m</code></li>
          </ul>
        </li>
        <li>Reworded Prestige Menu for clarity and validation.</li>
        <li>Fixed Wild Collectables and resource gathering accuracy.</li>
      </ul>
    </div>
  </div>

  <div class="prestige-card">
    <h3>🎁 Loot Tables</h3>
    <div class="prestige-card-content">
      <ul>
        <li>
          Added <strong>Basic Blueprint Frags</strong> to:
          <ul>
            <li>Junkpile Scientists</li>
            <li>Brown Crates</li>
            <li>Barrels</li>
          </ul>
        </li>
        <li>
          Added <strong>Advanced Blueprint Frags</strong> to:
          <ul>
            <li>Military Crates</li>
            <li>Elite Crates</li>
            <li>Locked Crates</li>
          </ul>
        </li>
        <li>Removed broken RP coins and replaced with the correct item.</li>
      </ul>
    </div>
  </div>

  <div class="prestige-card">
    <h3>🛒 ShoppyStock</h3>
    <div class="prestige-card-content">
      <ul>
        <li>RP coins changed from <code>Research Paper</code> to <code>Sticks</code>.</li>
        <li>RP in your inventory can now be spent directly — no deposit required.</li>
        <li>Predator Missile per-purchase multiplier reduced: <code>1.5 → 0.2</code>.</li>
      </ul>
    </div>
  </div>

  <div class="prestige-card">
    <h3>🌀 Portals</h3>
    <div class="prestige-card-content">
      <ul>
        <li>Updated for <code>R3</code> and <code>W6</code> (active on Production).</li>
        <li>3 new worlds added per region, going live shortly after or with wipe.</li>
      </ul>
    </div>
  </div>

  <div class="prestige-card">
    <h3>🎁 Kits</h3>
    <div class="prestige-card-content">
      <ul>
        <li>
          Added new <strong>Prestige Kits</strong> (requires matching perk):
          <ul>
            <li><code>/kit predator</code> → 5 Predator Missiles</li>
            <li><code>/kit terminal</code> → 1 Terminal, 10 Wireless Adaptors, 6 Tier 1 Cells</li>
            <li><code>/kit bear</code> → 1 Teddy Bear</li>
            <li><code>/kit portgun</code> → 1 Teleport Gun, 16x Scope, 50 HV 5.56 Rounds</li>
          </ul>
        </li>
        <li>Overhauled Kit UI to match <code>/info</code> and <code>/quests</code>.</li>
      </ul>
    </div>
  </div>

  <div class="prestige-card">
    <h3>🎰 Casino</h3>
    <div class="prestige-card-content">
      <ul>
        <li>Changed RP item to restore RP betting functionality.</li>
      </ul>
    </div>
  </div>

  <div class="prestige-card">
    <h3>🌿 Global Limits</h3>
    <div class="prestige-card-content">
      <ul>
        <li>Added <strong>6 Plant Pot</strong> limit (for decorations).</li>
        <li>Implemented improved validation to prevent duping and bypasses.</li>
      </ul>
    </div>
  </div>

  <div class="prestige-card">
    <h3>🧩 Terminal Plugin</h3>
    <div class="prestige-card-content">
      <ul>
        <li>Fixed issue where storage adapters could vanish when interacting nearby.</li>
      </ul>
    </div>
  </div>

  <div class="prestige-card">
    <h3>📦 Portable Locker</h3>
    <div class="prestige-card-content">
      <ul>
        <li>Fixed several NREs preventing functionality on multiple servers.</li>
      </ul>
    </div>
  </div>

  <div class="prestige-card">
    <h3>👥 Teams</h3>
    <div class="prestige-card-content">
      <ul>
        <li>Added blacklist for offensive team names.</li>
        <li>
          New commands for players:
          <ul>
            <li><code>/teams create &lt;name&gt;</code> - Create a new team</li>
            <li><code>/teams invite &lt;player&gt;</code> - Invite another player</li>
            <li><code>/teams accept</code> - Accept a pending invite</li>
            <li><code>/teams kick &lt;player&gt;</code> - Remove player (leader only)</li>
            <li><code>/teams leave</code> - Leave your team</li>
            <li><code>/teams disband</code> - Disband your team</li>
          </ul>
        </li>
      </ul>
    </div>
  </div>

  <div class="prestige-card">
    <h3>💥 Predator Missile</h3>
    <div class="prestige-card-content">
      <ul>
        <li>Now functions correctly on raid islands.</li>
        <li>Increased damage output — “hits like a truck.”</li>
      </ul>
    </div>
  </div>

  <div class="prestige-card">
    <h3>ℹ️ /info Updates</h3>
    <div class="prestige-card-content">
      <ul>
        <li>Added <strong>Brit’s Golden AK</strong>.</li>
        <li>Added <strong>Ace’s Python</strong>.</li>
        <li>Added <strong>Gathering Sets</strong>.</li>
        <li>Adjusted Legendary Heli timer to correct <code>2-hour</code> duration.</li>
      </ul>
    </div>
  </div>

</div>

---

<div class="prestige-notes">
  <h3>✅ Final Notes</h3>
  <p>All systems validated for the upcoming wipe. Expect smoother performance, balanced progression, and improved QoL across all servers.</p>
</div>
