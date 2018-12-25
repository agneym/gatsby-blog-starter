import React, { Component } from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

class BlogIndex extends Component {
  render() {
    const { data } = this.props;
    console.log(this.props);
    const siteTitle = data.site.siteMetadata.title;
    const posts = data.allMarkdownRemark.edges;

    return (
      <Layout>
        <SEO title="All Posts" keywords={[`gatsby`, `blog`, `react`]} />
        <main>
          {posts.map(({ node }) => {
            return (
              <article key={node.id}>
                <h4>{node.frontmatter.title}</h4>
                <p>{node.excerpt}</p>
              </article>
            );
          })}
        </main>
      </Layout>
    );
  }
}

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt(pruneLength: 150)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`;
