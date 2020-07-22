import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { graphql } from 'gatsby';

const HomeWrapper = styled.section`
  max-width: 1280px;
  margin: 0 auto 30px;
  padding: 0 16px;
`;

const StyledLink = styled(Link)`
  display: block;
  color: blue;
  margin-bottom: 32px;
`;

const StyledHR = styled.hr`
  border: 0;
  border-top: 1px solid #ccc;
`;

const HomePage = () => {
  return (
    <HomeWrapper>
      <StyledLink to="/blog">Kliknij tutaj, aby przejść na bloga.</StyledLink>
      <StyledHR></StyledHR>
    </HomeWrapper>
  );
};

export const query = graphql`
  query AllArticles {
    allDatoCmsArticle {
      edges {
        node {
          title
        }
      }
    }
  }
`;

export default HomePage;
