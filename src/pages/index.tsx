import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <div className={styles.mainPanel}>
          <div className={styles.panelHeader}>
            <h1>britRust Worlds</h1>
            <span className={styles.badge}>PvE</span>
          </div>
          
          <div className={styles.serverList}>
            <div className={styles.serverRow}>
              <span className={styles.region}>🇺🇸</span>
              <code className={styles.ip}>worlds.us.britspve.com</code>
              <span className={styles.players}>0 / 100</span>
            </div>
            <div className={styles.serverRow}>
              <span className={styles.region}>🇪🇺</span>
              <code className={styles.ip}>worlds.eu.britspve.com</code>
              <span className={styles.players}>0 / 100</span>
            </div>
          </div>
          
          <div className={styles.wipeInfo}>Next wipe in 0 days</div>
          
          <div className={styles.actions}>
            <Link to="/docs/intro">Get Started</Link>
            <Link to="/docs/server-info/connection">Server Info</Link>
          </div>
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
    icon: '📈',
    description: 'Learn about prestige perks and leveling',
    link: '/docs/progression/passive-perks',
  },
  {
    title: 'PvE Content',
    icon: '⚔️',
    description: 'Bosses, dungeons, and raid information',
    link: '/docs/bosses/patrol-helicopter',
  },
  {
    title: 'Server Features',
    icon: '⚡',
    description: 'Explore custom features and mechanics',
    link: '/docs/features/cooking',
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
