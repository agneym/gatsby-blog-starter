import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import StyledLink from '../utils/styled-link';

const Container = styled.div`
  padding: 1rem 0;
  margin: 1rem 0;
`;

const Title = styled.h4`
  margin-bottom: 0.2rem;
`;

const Post = ({ node }) => (
  <StyledLink to={node.fields.slug}>
    <Container>
      <Title>{node.frontmatter.title}</Title>
      <small>on {node.frontmatter.date}</small>
      <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
    </Container>
  </StyledLink>
);

Post.propTypes = {
  node: PropTypes.objectOf({
    id: PropTypes.string.isRequired,
    frontmatter: PropTypes.objectOf({
      title: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
    }),
    fields: PropTypes.objectOf({
      slug: PropTypes.string.isRequired,
    }),
    excerpt: PropTypes.string.isRequired,
  }),
};

export default Post;
