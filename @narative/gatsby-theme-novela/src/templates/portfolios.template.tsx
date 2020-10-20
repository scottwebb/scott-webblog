import React from "react";
import styled from "@emotion/styled";
import { graphql, useStaticQuery } from "gatsby";

import PortfoliosHero from "../sections/portfolios/Portfolios.Hero";
import Section from "@components/Section";
import SEO from "@components/SEO";

import mediaqueries from "@styles/media";
import Image from '@components/Image';
import Layout from "@components/Layout";
import Paginator from "@components/Navigation/Navigation.Paginator";

import PortfolioList from "../sections/portfolios/Portfolios.List";

import { Template } from "@types";

const siteQuery = graphql`
  {
    allSite {
      edges {
        node {
          siteMetadata {
            name
          }
        }
      }
    }
  }
`;

const image = '/architectural-photographer-london-ontario-portfolioHero-1b.jpg';

const PortfoliosPage: Template = ({ location, pageContext }) => {
  const portfolio = pageContext.group;
  const authors = pageContext.additionalContext.authors;

  const results = useStaticQuery(siteQuery);
  const name = results.allSite.edges[0].node.siteMetadata.name;

  return (
    <Layout>
      <SEO
        pathname={location.pathname}
        title={name}
      />
      
      <PortfoliosHero authors={authors} />
      <Section narrow>
        <ImageContainerHome>
      <Image src={image} title="Architectural Photographer, Scott Webb Photography" alt="Scott Webb Photography, Architectural Photographer in London Ontario Canada"></Image>
      <SidekickText>
        <h2>
        Scott Webb Photography helps architects, designers, engineers, builders, developers and other businesses to elevate the experience of built projects through creative and authentic architectural photography
        </h2>
        <h2>———</h2>
        <h3>Architectural Photography Galleries</h3>
        </SidekickText>
      </ImageContainerHome>
        <PortfolioList articles={portfolio} />
        <ArticlesPaginator show={pageContext.pageCount > 1}>
          <Paginator {...pageContext} />
        </ArticlesPaginator>
        <SidekickText_B>
        <h3>
        Your built work is invaluable; it represents a considerable time and energy investment. I understand your niche and desire to capture beautiful spaces making incredible impacts in the built environment around London Ontario.
      </h3>
        
        </SidekickText_B>
        <SidekickText_C>
        <h4><a href="/contact/">Contact Scott →</a>
</h4>
        </SidekickText_C>
      </Section>
      <ArticlesGradient />
    </Layout>
  );
};

export default PortfoliosPage;


const ArticlesGradient = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 590px;
  z-index: 0;
  pointer-events: none;
  background: ${p => p.theme.colors.gradient};
  transition: ${p => p.theme.colorModeTransition};
`;

const ArticlesPaginator = styled.div<{ show: boolean }>`
  ${p => p.show && `margin-top: 64px;`}
`;

const ImageContainerHome = styled.div`
  position: relative;
  display: block;
  width: 100%;
  margin-bottom: 35px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
    background: #fff;

  }
`;

const SidekickText = styled.div`
position: relative;
font-style: normal;
  font-weight: 400;
  font-size: 34px;
  line-height: 1.1;
  color: ${p => p.theme.colors.primary};
width: 100%;
display: block;
text-align: center;
padding: 5rem;

h2 {

  font-weight: 400!important;
  padding: 2rem 0 3rem;
}

  a {
    color: ${p => p.theme.colors.primary};
    text-decoration: underline;
  }

  ${mediaqueries.desktop`
  padding: 2rem 0 0 1rem;
    font-size: 21px;
  `}

  ${mediaqueries.phablet`

font-weight: 400!important;
    font-size: 18px;
  `}
`;

const SidekickText_B = styled.div`
position: relative;
font-style: normal;
  font-weight: 600;
  font-size: 44px;
  line-height: 1.1;
  color: ${p => p.theme.colors.primary};
width: 100%;
display: block;
padding: 10rem 0 4rem 0;
text-align: left;



  a {
    color: ${p => p.theme.colors.accent};
  }

  ${mediaqueries.desktop`
    font-size: 30px
  `}

  ${mediaqueries.phablet`
    font-size: 22px;
  `}
`;

const SidekickText_C = styled.div`
position: relative;
font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 1.1;
  color: ${p => p.theme.colors.primary};
width: 100%;
display: block;
padding: 4rem 0 4rem 0;
text-align: left;



  a {
    color: ${p => p.theme.colors.primary};
    text-decoration: underline;
  }
  a:hover {
    color: ${p => p.theme.colors.accent};
    text-decoration: underline;
  }

  ${mediaqueries.desktop`
    font-size: 24px
  `}

  ${mediaqueries.phablet`
    font-size: 20px;
  `}
`;