import React from "react";
import styled from "@emotion/styled";
import { graphql, useStaticQuery } from "gatsby";
import Image from '@components/Image';
import Section from "@components/Section";
import SocialLinks from "@components/SocialLinks";

import mediaqueries from "@styles/media";

const image = './images/process_thumb.jpg';
const imageB = './images/portfolio_thumb.jpg';
const imageC = './images/for_photographers_thumb.jpg';

const siteQuery = graphql`
  {
    allSite {
      edges {
        node {
          siteMetadata {
            name
            social {
              url
              name
            }
          }
        }
      }
    }
    allMdx(sort: {fields: frontmatter___date, order: ASC}) {
      edges {
        node {
          frontmatter {
            date
          }
        }
      }
    }
  }
`;

const Footer: React.FC<{}> = () => {
  const results = useStaticQuery(siteQuery);
  const { name, social } = results.allSite.edges[0].node.siteMetadata;

  const copyrightDate = (() => {
    const { edges } = results.allMdx;
    const years = [0, edges.length - 1].map((edge) =>
      new Date(edges[edge].node.frontmatter.date).getFullYear()
    );
    return years[0] === years[1] ? `${years[0]}` : `${years[0]}–${years[1]}`;
  })();

  return (
    <>
      <FooterGradient />
      <Section narrow>
        <HoritzontalRule />
        
        <ContentContainer>
          <MyImage><a href="/"><Image src={image} title="" alt="Scott Webb, Photography Process for Projects"/></a></MyImage>
          <MyImage><Image src={imageB} title="View Architectural Photography Portfolio" alt="View Architectural Photography Portfolio"/></MyImage>
          <MyImage><Image src={imageC} title="For Photographers" alt="Secion for photographers to go to"/></MyImage>
        </ContentContainer>
      
        <FooterContainer>
          <FooterText>
            © {copyrightDate} {name} Photography // <a href="/contact">Contact Info</a>
          </FooterText>
          <div>
            <SocialLinks links={social} />
          </div>
        </FooterContainer>
      </Section>
    </>
  );
};

export default Footer;

const FooterContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 40px;
  color: ${p => p.theme.colors.secondary};

  ${mediaqueries.tablet`
    flex-direction: column;
    padding-bottom: 100px;
  `}

  ${mediaqueries.phablet`
    padding-bottom: 50px;
  `}
`;


const HoritzontalRule = styled.div`
  position: relative;
  margin: 80px auto 32px;
  border-bottom: 1px solid ${p => p.theme.colors.horizontalRule};

  ${mediaqueries.tablet`
    margin: 60px auto;
  `}

  ${mediaqueries.phablet`
    display: none;
  `}
`;

const ContentContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 56px;
  padding: 2rem 0 4rem 0;
  z-index: 1;

  ${mediaqueries.desktop`
    grid-template-columns: 1fr;
  `}
`;

const FooterText = styled.div`

a {
  color: ${p => p.theme.colors.primary};
  font-weight: 800;
}

a:hover {
  color: ${p => p.theme.colors.accent};

}

  ${mediaqueries.tablet`
    margin-bottom: 80px;
  `}

  ${mediaqueries.phablet`
    margin: 64px auto 24px;
  `}
`;

const FooterGradient = styled.div`
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

const MyImage = styled.div`
  position: relative;
  display: block;
  width: 100%;
  margin-bottom: 5px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    background: #fff;

  }

  img:hover {
    box-shadow: 0 22px 44px 0 rgba(0,0,0,0.22);
  }
`;