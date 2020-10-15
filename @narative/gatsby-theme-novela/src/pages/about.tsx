import React from "react";
import styled from "@emotion/styled";
import mediaqueries from "@styles/media";

import Section from "@components/Section";
import SEO from "@components/SEO";
import Image from '@components/Image';
import Layout from "@components/Layout";

import { Template } from "@types";
import { Link } from "gatsby";

const image = '/scott-webb-photographer.jpg';

const AboutPage: Template = ({ location, pageContext }) => {

  return (
    <Layout>
      <SEO pathname={location.pathname} title={"About me"}/>
      <Section relative>
        <HeadingContainer>
          <HeroHeading>Nice to meet you!</HeroHeading>
        </HeadingContainer>
      </Section>
      <Section>
        <ContentContainer>
          <MyImage><Image src={image} alt="Scott Webb, Photographer"/></MyImage>
          <MyText>
            <InfoHeading>
            Hi! I’m Scott Webb, a proud London Ontario Photographer with a love for architecture.
            </InfoHeading>
            <InfoText>
            Instead of telling you I grew up with a camera in my hands, I was more interested in being an architect. I graduated from Ryerson University with a Bachelor of Architecture, but I found myself even more fascinated with photographing buildings as digital cameras began to enter the marketplace.
            </InfoText>
            <InfoText>
            I help raise the bar of the photography of architecture and the city. I work with top architectural firmms in London, but I also give away images of London for anyone to download and use for anything such as blogging, websites, social media, print.
            </InfoText>
            <InfoText>
            As a <Link to='/'>London Ontario Architectural Photographer</Link>, it’s a blessing to be able to help showcase the buildings and spaces clients have successfully completed. Since most people experience architecture through visual content, it’s my mission to help visually spread the positive impact of the amazing architecture amongst Londoners and the world.
            </InfoText>
            <InfoText>
            I know the architecture niche. It’s so natural and comes out in my photography.
            </InfoText>
          </MyText>
        </ContentContainer>
      </Section>
      <ArticlesGradient />
    </Layout>
  );
};

export default AboutPage;

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



const HeadingContainer = styled.div`
  margin: 100px 0;
  font-family: ${p => p.theme.fonts.title};

  ${mediaqueries.desktop`
    width: 80%;
  `}

  ${mediaqueries.tablet`
    width: 100%;
  `}
`;

const HeroHeading = styled.h2`
  font-style: normal;
  font-weight: 600;
  font-size: 100px;
  line-height: 1.1;
  max-width: 600px;
  color: ${p => p.theme.colors.primary};

  a {
    color: ${p => p.theme.colors.accent};
  }

  ${mediaqueries.desktop`
    font-size: 64px
  `}

  ${mediaqueries.phablet`
    font-size: 54px;
  `}
`;

const ContentContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 56px;
  z-index: 1;

  ${mediaqueries.desktop`
    grid-template-columns: 1fr;
  `}
`;

const InfoHeading = styled.h1`
  font-weight: 600;
  font-family: ${p => p.theme.fonts.title};
  font-size: 28px;
  line-height: 1.35;
  max-width: 100%;
  margin-bottom: 32px;
  color: ${p => p.theme.colors.primary};

 

  ${mediaqueries.phablet`
    font-size: 24px;
  `}
`;

const InfoText = styled.p`
  font-size: 16px;
  margin-top: 24px;
  line-height: 1.7;
  color: ${p => p.theme.colors.primary};

  a {
    color: ${p => p.theme.colors.primary};
    text-decoration: underline;
  }

  a:hover {
    color: ${p => p.theme.colors.accent};
  } 

`;



const MyText = styled.div`
  position: relative;
`;

const MyImage = styled.div`
  position: relative;
  display: block;
  width: 100%;
  box-shadow: 0 22px 44px 0 rgba(0,0,0,0.22);
  margin-bottom: 5px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    background: #fff;

  }
`;