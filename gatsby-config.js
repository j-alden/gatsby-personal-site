const path = require(`path`);

module.exports = {
  siteMetadata: {
    title: `Josh Holt - Product Manager`,
    name: `Josh Holt`,
    siteUrl: `https://joshholt.dev/`,
    description: `Personal website for Josh Holt, a product manager in Minneapolis, MN.`,
    hero: {
      heading: `Hi, I'm Josh, product manager.`,
      maxWidth: 652,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/aldenholt`,
      },
      {
        name: `github`,
        url: `https://github.com/j-alden`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/joshua-a-holt/`,
      },
    ],
  },
  plugins: [
    {
      resolve: '@narative/gatsby-theme-novela',
      options: {
        contentPosts: 'content/posts',
        contentAuthors: 'content/authors',
        basePath: '/',
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Novela by Narative`,
        short_name: `Novela`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#CAE4D7`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        typekit: {
          id: 'gwv2sec',
        },
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    'gatsby-plugin-theme-ui',
  ],
};
