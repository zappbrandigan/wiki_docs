import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Docs',
  tagline: 'Tool Guides',
  favicon: 'img/favicon.svg',

  future: {
    v4: true,
  },

  url: 'https://zappbrandigan.github.io/',
  baseUrl: '/',

  organizationName: 'zappbrandigan',
  projectName: 'wiki_docs',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: 'all', // 'rss' | 'atom' | 'all'
            title: 'TūlBOX Updates',
            description: 'Updates and release notes for TūlBOX tools.',
            copyright: `Copyright © ${new Date().getFullYear()} Brandon Johnson`,
            language: 'en',
          },
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
          routeBasePath: '/blog',
          blogSidebarCount: 10,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'TūlBOX Docs',
      logo: {
        alt: 'TūlBOX Docs',
        src: 'img/logo.svg',
      },
      // items: [
      //   { to: '/blog', label: 'Updates', position: 'left' },
      //   {
      //     href: 'https://tulbox.app',
      //     label: 'TūlBOX',
      //     position: 'right',
      //   },
      // ],
    },
    // footer: {
    //   style: 'dark',
    //   links: [
    //     {
    //       title: 'Docs',
    //       items: [
    //         {
    //           label: 'Documentation',
    //           to: '/',
    //         },
    //       ],
    //     },
    //     {
    //       title: 'Community',
    //       items: [
    //         {
    //           label: 'Docusaurus',
    //           href: 'https://docusaurus.io',
    //         },
    //         {
    //           label: 'GitHub',
    //           href: 'https://github.com',
    //         },
    //         {
    //           label: 'TūlBOX',
    //           href: 'https://tulbox.app',
    //         },
    //       ],
    //     },
    //     {
    //       title: 'More',
    //       items: [
    //         {
    //           label: 'Updates',
    //           to: '/blog',
    //         },
    //       ],
    //     },
    //   ],
    // },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
