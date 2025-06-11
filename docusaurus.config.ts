import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';


const config: Config = {
  title: 'Wiki',
  tagline: 'Dinosaurs are cool',
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
          sidebarPath: './sidebars.ts',
          path: './docs',
          routeBasePath: '/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
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
    navbar: {
      title: 'TūlBOX Wiki',
      logo: {
        alt: 'TūlBOX Wiki',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'wiki',
          position: 'left',
          label: 'Music Pub',
        },
        {
          type: 'docSidebar',
          sidebarId: 'tulbox',
          position: 'left',
          label: 'TūlBOX',
        },
        {to: '/blog', label: 'Updates', position: 'left'},
        {
          href: 'https://tulbox.app',
          label: 'TūlBOX',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Wiki',
              to: '/',
            },
            {
              label: 'Documentation',
              to: 'tulbox/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Docusaurus',
              href: 'https://docusaurus.io',
            },
            {
              label: 'GitHub',
              href: 'https://github.com',
            },
            {
              label: 'TūlBOX',
              href: 'https://tulbox.app',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Updates',
              to: '/blog',
            },
            {
              label: 'ZappBrandigan',
              href: 'https://github.com/zappbrandigan',
            },
          ],
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
