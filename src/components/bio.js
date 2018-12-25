import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql, Link } from 'gatsby';
import Image from 'gatsby-image';

import Twitter from '../images/social/twitter.svg';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 5rem 0;
`;

const Name = styled.h3`
  font-size: 2rem;
  letter-spacing: 0.1rem;
  font-weight: 800;
  margin-bottom: 1rem;
  width: 100%;
  white-space: nowrap;
`;

const TagLine = styled.h4`
  font-weight: normal;
  font-size: 1.6rem;
  margin: 0;
`;

const TwitterIcon = styled.img`
  height: 1.5rem;
  width: 1.5rem;
  padding: 1.5rem 1rem;
`;

const Bio = () => (
  <StaticQuery
    query={bioQuery}
    render={data => {
      const { author, authorTagline, social } = data.site.siteMetadata;
      return (
        <Container>
          <div>
            <Name>{author}</Name>
            <TagLine>{authorTagline}</TagLine>
            <a
              href={`https://twitter.com/${social.twitter}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <TwitterIcon src={Twitter} alt="twitter" />
            </a>
          </div>
          <Image fixed={data.avatar.childImageSharp.fixed} alt={author} />
        </Container>
      );
    }}
  />
);

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/icon.png/" }) {
      childImageSharp {
        fixed(width: 70, height: 70) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        authorTagline
        social {
          twitter
        }
      }
    }
  }
`;

export default Bio;
