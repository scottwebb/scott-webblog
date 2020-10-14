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


module.exports = {
  siteMetadata,
  plugins,
};
