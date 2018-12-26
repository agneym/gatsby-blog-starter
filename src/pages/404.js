import React from 'react';
import styled from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';

const Container = styled.div`
  text-align: center;
`;

const Smiley = styled.span`
  font-size: 10rem;
  display: block;
  margin: 20vmin 0;
`;

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Container>
      <Smiley role="img" aria-label="facepalm">
        🤦🏻‍♂️
      </Smiley>
      <h1>NOT FOUND</h1>
      <p>I have not added this page yet.</p>
    </Container>
  </Layout>
);

export default NotFoundPage;
