// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const { themes } = require("prism-react-renderer");
const lightCodeTheme = themes.github,
  darkCodeTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Aragon Developer Portal",
  tagline: "Let's build cool sh*t together",
  url: "https://devs.aragon.org",
  baseUrl: "/",
  onBrokenLinks: "ignore",
  onBrokenMarkdownLinks: "ignore",
  favicon: "img/Aragon-logo-circle.png",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Aragon", // Usually your GitHub org/user name.
  projectName: "Aragon Developer Portal", // Usually your repo name.

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  plugins: ["@graphql-markdown/docusaurus"],
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        blog: false,
        docs: {
          include: ["**/*.md", "**/*.mdx"],
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        logo: {
          alt: "Aragon",
          src: "img/logo-light.png",
        },
        items: [
          {
            to: "/subgraph", // adjust the location depending on your baseURL (see configuration)
            label: "Subgraph Schema", // change the label with yours
            position: "left",
          },
        ],
      },
      footer: {
        style: "light",
        links: [],
        copyright: `Copyright © ${new Date().getFullYear()} My Website, Inc. Built with GraphQL-Markdown & Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
