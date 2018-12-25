import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';

const Container = styled.nav`
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.05);
  padding: 2rem 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: rgba(0, 0, 0, 0.8);
`;

const Title = styled.h1`
  font-size: 1.6rem;
  font-weight: 800;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  margin: 0;
`;

const Header = ({ title }) => (
  <Container>
    <StyledLink to={'/'}>
      <Title>{title}</Title>
    </StyledLink>
  </Container>
);

Header.defaultProps = {
  title: '',
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
