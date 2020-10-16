require("dotenv").config();

const siteMetadata = {
  title: `Scott Webb Photography | London Ontario Architectural Photographer`,
  name: `Scott Webb`,
  siteUrl: `https://wwww.scottwebb.me`,
  description: `London Ontario Architectural Photographer creating beautiful architectural photography for architects, designers, developers.`,
  hero: {
    heading: `An Architectural Photographer for visionary studios & firms doing remarkable work in London and Southwestern Ontario`,
    writingHeading: `Photography is about the communication of the Architecture with the viewer.`,
    maxWidth: 800,
  },
  social: [
    {
      name: `twitter`,
      url: `https://twitter.com/scotty_webb`,
    },
    {
      name: `facebook`,
      url: `https://www.facebook.com/scottwebbphotography`,
    },
    {
      name: `instagram`,
      url: `https://instagram.com/scottwebb`,
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
      trackingId: "UA-180538052-1",
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
