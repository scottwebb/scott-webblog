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
      <SEO pathname={location.pathname} title={"About Photographer, Scott Webb"}/>
      <Section relative>
        <HeadingContainer>
          <HeroHeading>About Scott</HeroHeading>
        </HeadingContainer>
      </Section>
      <Section>
        <ContentContainer>
          <MyImage><Image src={image} alt="Scott Webb, Photographer"/></MyImage>
          <MyText>
          <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
  <p>
    <label>Your Name: <input type="text" name="name" /></label>   
  </p>
  <p>
    <label>Your Email: <input type="email" placeholder="Your Email" name="email" /></label>
  </p>
  <p>
    <label>Message: <textarea name="message"></textarea></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form>
          </MyText>
        </ContentContainer>
      </Section>
      <Section>
        <ContentContainer_b>
          <MyText>
          <HeadingContainer>
          <HeroHeading>Clients</HeroHeading>
        </HeadingContainer>
            <InfoText>
            <li>
              City of London
            </li>
            <li>
              Cornerstone Architecture Inc.
            </li>
            <li>
              Nicholson Sheffield Architects Inc.
            </li>
            <li>
              architects Tillmann Ruth Robinson
            </li>
            <li>
              Matter Architectural Studio Inc.
            </li>
            <li>
              Abbott Building Systems
            </li>
            <li>
              Grassmere Construction Ltd.
            </li>
            <li>
              OLD OAK
            </li>
            <li>
              EDGE Architects Ltd.
            </li>
            <li>
              Architectural Conservancy Ontario - London
            </li>
            <li>
              Goodwill Industries
            </li>
            <li>
              The Tricar Group
            </li>
            <li>
              Zedd Architecture Inc.
            </li>
            </InfoText>
          
          </MyText>
          <MyImage><Image src={image} alt="Scott Webb, Photographer"/></MyImage>
        </ContentContainer_b>
      </Section>
      <Section>
        <ContentContainer_c>
        <MyImage><Image src={image} alt="Scott Webb, Photographer"/></MyImage>
        </ContentContainer_c>
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
  max-width: 800px;
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

const ContentContainer_b = styled.div`
  position: relative;
  display: grid;
  margin: 150px 0 0 0;
  grid-template-columns: 1fr 1fr;
  column-gap: 56px;
  z-index: 1;

  ${mediaqueries.desktop`
    grid-template-columns: 1fr;
  `}
`;

const ContentContainer_c = styled.div`
  position: relative;
  display: grid;
  margin: 150px 0 0 0;
  grid-template-columns: 1fr;
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
  padding-bottom: 50px;
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