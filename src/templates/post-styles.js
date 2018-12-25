import styled from 'styled-components';

export const Container = styled.article`
  margin-top: 8rem;

  p {
    line-height: 1.5;
  }

  blockquote {
    margin-left: 0.25rem;
    font-size: 1.6rem;
    color: inherit;
    font-style: italic;
    border-left: 0.2rem solid rgb(0, 0, 0);
    padding-left: 1rem;
    margin: 1rem 0;
  }

  pre {
    margin-bottom: 2rem;
  }

  h3 {
    line-height: 1.13;
  }

  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 5rem 0 3rem;
  }

  hr {
    border-top: 1px solid #ccc;
    display: block;
    height: 1rem;
    border: 0;
    margin: 1rem 0;
    padding: 0;
  }
`;

export const Title = styled.h1`
  margin-bottom: 1rem;
`;

export const LinkList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  padding: 0px;
`;
