import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'BritRust Wiki',
  tagline: 'PvE Server Documentation & Features',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://britrust.com',
  baseUrl: '/',

  organizationName: 'britrust',
  projectName: 'britrust-wiki',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: undefined,
        },
        blog: {
          showReadingTime: true,
          blogTitle: 'Server Updates',
          blogDescription: 'Latest updates, events, and announcements from BritRust',
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: undefined,
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/britrust-social-card.jpg',
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    announcementBar: {
      id: 'support_us',
      content: '<b>This wiki is NOT an official part of britRust, and this is heavily in-development. Join our <a href="https://discord.gg/britrust" target="_blank" rel="noopener noreferrer">Discord</a> to stay updated!</b>',
      backgroundColor: '#ff6f64ff',
      textColor: '#2e2e2eff',
      isCloseable: false,
    },
    navbar: {
      title: 'BritRust',
      logo: {
        alt: 'BritRust Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {to: '/blog', label: 'Updates', position: 'left'},
        {
        type: 'html',
        position: 'right',
        value: '<a href="https://discord.gg/britrust" target="_blank" rel="noopener noreferrer"><img src="/img/Discord-logo.png" alt="Join our Discord" style="height: 40px; border-radius: 8px; vertical-align: middle;" /></a>',
      },
      ],
    },
    docs: {
      sidebar: {
        autoCollapseCategories: false,
      },
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Getting Started',
              to: '/docs/server-info/intro',
            },
            {
              label: 'Server Info',
              to: '/docs/server-info/connection',
            },
            {
              label: 'Progression',
              to: '/docs/progression/passive-perks',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/britrust',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Server Updates',
              to: '/blog',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} BritRust Server. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
