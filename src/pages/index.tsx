// index.tsx
import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';
import { useEffect, useState } from 'react';

function usePlayerCount(query: string) {
  const [count, setCount] = useState<number | null>(null);
  const [max, setMax] = useState<number | null>(null);

  useEffect(() => {
    async function fetchCount() {
      try {
        const res = await fetch(
          `https://api.battlemetrics.com/servers?filter[game]=rust&filter[search]=${encodeURIComponent(query)}`
        );
        const data = await res.json();
        const server = data.data[0]?.attributes;
        if (server) {
          setCount(server.players);
          setMax(server.maxPlayers);
        }
      } catch (error) {
        console.error('Failed to fetch player count:', error);
      }
    }
    fetchCount();
    const interval = setInterval(fetchCount, 60000);
    return () => clearInterval(interval);
  }, [query]);

  return { count, max };
}

function HomepageHeader() {
  const us = usePlayerCount('worlds.us.britspve.com');
  const eu = usePlayerCount('worlds.eu.britspve.com');

  const totalPlayers = (us.count || 0) + (eu.count || 0);

  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <div className={styles.mainPanel}>
          <div className={styles.panelHeader}>
            <h1>britRust Worlds</h1>
            <span className={styles.badge}>PvE ⚡</span>
          </div>
          
          <div className={styles.serverList}>
            <div className={styles.serverRow}>
              <span className={styles.region}>🇺🇸</span>
              <code className={styles.ip}>worlds.us.britspve.com</code>
              <span className={styles.players}>
                {us.count ?? '...'} / {us.max ?? '...'}
                {us.count !== null && ' 🟢'}
              </span>
            </div>
            <div className={styles.serverRow}>
              <span className={styles.region}>🇪🇺</span>
              <code className={styles.ip}>worlds.eu.britspve.com</code>
              <span className={styles.players}>
                {eu.count ?? '...'} / {eu.max ?? '...'}
                {eu.count !== null && ' 🟢'}
              </span>
            </div>
          </div>
          
          {/* Stats */}
          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <span className={styles.statIcon}>👥</span>
              <span className={styles.statValue}>{totalPlayers > 0 ? totalPlayers : '...'}</span>
              <span className={styles.statLabel}>Online</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statIcon}>⏰</span>
              <span className={styles.statValue}>0d</span>
              <span className={styles.statLabel}>Next Wipe</span>
            </div>
            <a href="https://store.britspve.com" target="_blank" rel="noopener noreferrer" className={styles.statItem}>
              <span className={styles.statIcon}>🛒</span>
              <span className={styles.statValue}>VIP</span>
              <span className={styles.statLabel}>Store</span>
            </a>
          </div>
          
          {/* Actions */}
          <div className={styles.actionGrid}>
            <Link to="/docs/server-info/intro" className={`${styles.actionCard} ${styles.actionPrimary}`}>
              <span className={styles.actionIcon}>🚀</span>
              <span className={styles.actionTitle}>Get Started</span>
            </Link>
            <Link to="/docs/server-info/connection" className={`${styles.actionCard} ${styles.actionSecondary}`}>
              <span className={styles.actionIcon}>📡</span>
              <span className={styles.actionTitle}>Server Info</span>
            </Link>
          </div>

          {/* Discord */}
          <a href="https://discord.gg/britspve" target="_blank" rel="noopener noreferrer" className={styles.discordButton}>
            <span className={styles.discordIcon}>💬</span>
            Join Our Discord
          </a>
        </div>
      </div>
    </header>
  );
}

type QuickAccessItem = {
  title: string;
  icon: string;
  description: string;
  link: string;
  image?: string;
};

const QuickAccessItems: QuickAccessItem[] = [
  {
    title: 'Progression System',
    icon: '⭐',
    description: 'Prestige perks, skill trees, and leveling rewards',
    link: '/docs/progression/passive-perks',
  },
  {
    title: 'PvE Content',
    icon: '⚔️',
    description: 'Epic bosses, challenging dungeons, and raidable bases',
    link: '/docs/bosses/patrol-helicopter',
  },
  {
    title: 'Custom Features',
    icon: '🎨',
    description: 'Unique gameplay mechanics and quality-of-life improvements',
    link: '/docs/features/farming',
  },
];

function QuickAccessCard({title, icon, description, link, image}: QuickAccessItem) {
  return (
    <div className={clsx('col col--4')}>
      <Link to={link} className={styles.quickAccessCard}>
        <div className={styles.cardContent}>
          {image ? (
            <div className={styles.cardImage}>
              <img src={image} alt={title} />
            </div>
          ) : (
            <div className={styles.cardIcon}>{icon}</div>
          )}
          <Heading as="h3" className={styles.cardTitle}>{title}</Heading>
          <p className={styles.cardDescription}>{description}</p>
        </div>
      </Link>
    </div>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="BritRust PvE Server - Custom Features, Events, and Community">
      <HomepageHeader />
      <main>
        <section className={styles.quickAccess}>
          <div className="container">
            <div className="row">
              {QuickAccessItems.map((props, idx) => (
                <QuickAccessCard key={idx} {...props} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}