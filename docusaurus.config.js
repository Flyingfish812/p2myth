// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Phoenix 2 Wiki - By Group Myth',
  tagline: 'An illustrated handbook for game Phoenix 2',
  favicon: 'img/phoenix2.ico',

  // Set the production url of your site here
  url: 'https://Flyingfish812.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/p2myth',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Flyingfish812', // Usually your GitHub org/user name.
  projectName: 'p2myth', // Usually your repo name.
  deploymentBranch: 'site-pages',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en','zh'],
    localeConfigs: {
      en: {
        label: 'English',
      },
      zh: {
        label: '简体中文',
      },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Phoenix 2 Wiki',
        logo: {
          alt: 'My Site Logo',
          src: 'img/phoenix2.ico',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Intro',
          },
          {to: '/docs/Beginners', label: 'Beginners', position: 'left'},
          {to: '/docs/Ship', label: 'Ships', position: 'left'},
          {to: '/docs/Invader', label: 'Invaders', position: 'left'},
          {to: '/docs/Story', label: 'Story', position: 'left'},
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/Flyingfish812/p2myth',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Forums',
            items: [
              {
                label: 'Baidu Forums',
                to: 'https://tieba.baidu.com/f?ie=utf-8&kw=%E5%87%A4%E5%87%B0%E6%88%98%E6%9C%BA2',
              },
              {
                label: 'Reddit',
                to: 'https://www.reddit.com/r/Phoenix_2/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'QQ Myth Group',
                href: 'http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=-8n35KnfwEY0GZ0-Nakolll8PAyMuMf-&authKey=4EI2BogWGEA39vFeWPGqYxKhgfiTasf%2FzWy2yThOHW9vdbR8la964%2FrWxUlSzyr6&noverify=0&group_code=464763890',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/phoenix2',
              },
            ],
          },
          {
            title: 'More Tutorials',
            items: [
              {
                label: 'Apex Search - By Elegater',
                to: 'https://elegater.github.io/',
              },
              {
                label: 'Guide - By FBI Light Rock',
                href: 'https://gamefaqs.gamespot.com/iphone/193681-phoenix-ii/faqs/76704/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Flyingfish, All right reserved. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
