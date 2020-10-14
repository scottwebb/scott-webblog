require("dotenv").config();

const siteMetadata = {
  title: `Scott Webb Photography`,
  name: `Scott Webb`,
  siteUrl: `https://trongnguyen.co`,
  description: `London Ontario Architectural Photographer creating beautiful architectural photography for architects, designers, developers.`,
  hero: {
    heading: `An Architectural Photographer for visionary studios & firms doing remarkable work in London and Southwestern Ontario`,
    writingHeading: `Writing is designing.`,
    maxWidth: 800,
  },
  social: [
    {
      name: `twitter`,
      url: `https://twitter.com/scotty_webb`,
    },
    {
      name: `facebook`,
      url: `https://www.facebook.com/Scott.r.Webb`,
    },
    {
      name: `instagram`,
      url: `https://instagram.com/skot.bot`,
    },
    {
      name: `linkedin`,
      url: `https://www.linkedin.com/in/thescottwebb/`,
    },
    {
      name: `unsplash`,
      url: `https://unsplash.com/@scottwebb`,
    },
  ],
};

const plugins = [
  {
    resolve: "@narative/gatsby-theme-novela",
    options: {
      contentPosts: "content/posts",
      contentAuthors: "content/authors",
      contentPortfolios: "content/portfolios",
      rootPath: "/",
      basePath: "/",
      authorsPage: true,
      mailchimp: true,
      sources: {
        local: true,
        contentful: false,
      },
    },
  },
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `Scott Webb Photography`,
      short_name: `Webblog`,
      start_url: `/`,
      background_color: `#fff`,
      theme_color: `#fff`,
      display: `standalone`,
      icon: `src/assets/favicon.png`,
    },
  },
  {
    resolve: `gatsby-plugin-google-analytics`,
    options: {
      trackingId: "UA-55555555-4",
    },
  },
  {
    resolve: "gatsby-plugin-mailchimp",
    options: {
      endpoint:
        "https://scottwebb.us1.list-manage.com/subscribe/post?u=71b80417c67ca4e547bc685fa&amp;id=c9a649ef64",
    },
  },

];

/**
 * For development purposes if there's no Contentful Space ID and Access Token
 * set we don't want to add in gatsby-source-contentful because it will throw
 * an error.
 *
 * To enanble Contentful you must
 * 1. Create a new Space on contentful.com
 * 2. Import the Contentful Model from @narative/gatsby-theme-novela/conteful
 * 3. Add .env to www/ (see www/env.example)
 * 4. Enable contentful as a source in this file for @narative/gatsby-theme-novela
 */
if (process.env.CONTENTFUL_SPACE_ID && process.env.CONTENTFUL_ACCESS_TOKEN) {
  plugins.push({
    resolve: "gatsby-source-contentful",
    options: {
      spaceId: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    },
  });
}

module.exports = {
  siteMetadata,
  plugins,
};
