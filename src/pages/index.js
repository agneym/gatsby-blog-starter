import React from 'react';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';

const BlogIndex = () => (
  <Layout>
    <SEO title="All Posts" keywords={[`gatsby`, `blog`, `react`]} />
  </Layout>
);

export default BlogIndex;
