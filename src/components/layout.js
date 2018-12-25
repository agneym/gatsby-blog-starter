import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';

import Header from './header';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: system;
    font-style: normal;
    font-weight: 300;
    src: local('.SFNSText-Light'), local('.HelveticaNeueDeskInterface-Light'),
      local('.LucidaGrandeUI'), local('Ubuntu Light'), local('Segoe UI Light'),
      local('Roboto-Light'), local('DroidSans'), local('Tahoma');
  }

  :root {
    font-size: 10px;
  }

  body {
    font-family: 'system';
    margin: 0;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    color: rgba(0, 0, 0, 0.8);
    min-height: 100vh;
    position: relative;
    font-size: 1.6rem;
  }

  code {
    font-family: Menlo,Monaco,"Courier New",Courier,monospace;
  }

  :not(pre) > code[class*="language-"], pre[class*="language-text"] {
    background-color: transparent;
    color: inherit;
    font-size: medium;
  }
`;

const Content = styled.div`
  width: 60%;
  max-width: 728px;
  margin: 0 auto;
`;

class Layout extends Component {
  render() {
    const { children } = this.props;
    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <>
            <Header title={data.site.siteMetadata.title} />
            <Content>{children}</Content>
            <GlobalStyles />
          </>
        )}
      />
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
