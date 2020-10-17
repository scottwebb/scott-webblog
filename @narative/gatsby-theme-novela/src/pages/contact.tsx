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
          <HeroHeading>Contact Scott</HeroHeading>
        </HeadingContainer>
      </Section>
      <Section>
        <ContentContainer>
          <MyImage><Image src={image} alt="Scott Webb, Photographer"/></MyImage>
          
          <MyText>
          <InfoText>
          Please feel free to contact me to say hi, ask a question, or request pricing for a project. Please provide as much detail as you can. The best way to get a hold of me is via <b>email: hello@scottwebb.me</b>, but you can also reach me by text/phone: 519.200.2792 or the contact form provided below. I'll get back to you as soon as possible.           </InfoText>
          <div>
        <form
          name="contact"
          method="post"
          action="/thanks/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
          <input type="hidden" name="contact" value="contact" />
          <p hidden>
            <label>
              Don’t fill this out:{" "}
              <input name="bot-field"/>
            </label>
          </p>
          <p>
            <label>
              Your name:<br />
              <input type="text" name="name"/>
            </label>
          </p>
          <p>
            <label>
              Your email:<br />
              <input type="email" name="email"/>
            </label>
          </p>
          <p>
            <label>
              Message:<br />
              <textarea name="message"/>
            </label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
      </div>
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
  margin-bottom: 50px;
  line-height: 1.7;
  color: ${p => p.theme.colors.grey};

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

  button {
      color: #fff;
      background: #000;
      padding: 14px 40px;
      width: 100%;
      border-radius: 3px;
      margin-top: 30px;
  }

  button:hover {
      background-color: #56c843;
  }

  input, textarea {
    color: inherit;
    font-family: inherit;
    font-style: inherit;
    font-weight: inherit;
    border-color: #ddd;
    border-width: 0;
    width: 100%;
    border-radius: 3px;
    padding: 10px;
    margin: 14px 0;
  }

  p {
    color: ${p => p.theme.colors.grey};
  }
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