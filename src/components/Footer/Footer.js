import React from 'react';
import styled from 'styled-components';
import { down } from 'styled-breakpoints';
import { Link } from 'gatsby';

const slugify = require('slugify');

const StyledFooter = styled.footer`
  display: flex;
  width: 100%;
  background-color: ${({ theme }) => theme.font.black};
`;
const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 1280px;
  margin: 0 auto;
  color: white;
  overflow: hidden;
`;
const StyledCategoryWrapper = styled.div`
  display: flex;
`;

const StyledCategory = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  margin: 80px 20px;

  ${down('sm')} {
    margin: 40px 20px 0 20px;

    &:nth-child(1) {
      flex: unset;
    }

    &:nth-child(2) {
      width: 90px;
      min-width: 160px;
    }

    &:nth-child(3) {
      display: none;
    }
  }
`;
const StyledTitle = styled.h3`
  font-size: 14px;
  text-transform: uppercase;
  margin-bottom: 40px;
  white-space: nowrap;
`;

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
`;

const StyledListItem = styled.li`
  font-size: 13px;
  margin-bottom: 15px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

const StyledListItemLink = styled(Link)`
  color: ${({ theme }) => theme.font.tertiary};
  &:hover {
    color: ${({ theme }) => theme.font.white};
  }
`;

const StyledListItemLinkOut = styled.a`
  color: ${({ theme }) => theme.font.tertiary};
  &:hover {
    color: ${({ theme }) => theme.font.white};
  }
`;

const StyledAboutMe = styled.div`
  color: ${({ theme }) => theme.font.tertiary};
  font-size: 13px;
  margin-bottom: 15px;
`;

const StyledRightReserved = styled.div`
  padding: 15px;
  font-size: 13px;
  color: ${({ theme }) => theme.font.tertiary};
  text-align: center;
`;

const Footer = ({ edges }) => {
  return (
    <StyledFooter>
      <StyledContainer>
        <StyledCategoryWrapper>
          <StyledCategory>
            <StyledTitle>Kategorie</StyledTitle>
            <StyledList>
              <StyledListItem>
                <StyledListItemLink to="/blog">Blog</StyledListItemLink>
              </StyledListItem>
              <StyledListItem>
                <StyledListItemLinkOut
                  href="https://matysiakmateusz.pl"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  O mnie
                </StyledListItemLinkOut>
              </StyledListItem>
              <StyledListItem>
                <StyledListItemLink to="/contact">Kontakt</StyledListItemLink>
              </StyledListItem>
            </StyledList>
          </StyledCategory>
          <StyledCategory>
            <StyledTitle>Ostatnie artykuły</StyledTitle>
            <StyledList>
              {edges?.slice(0, 6)?.map(({ node }) => {
                const slug = slugify(node.title, { lower: true });
                return (
                  <StyledListItem key={node.id}>
                    <StyledListItemLink to={`blog/${slug}`}>
                      {node.title}
                    </StyledListItemLink>
                  </StyledListItem>
                );
              })}
            </StyledList>
          </StyledCategory>
          <StyledCategory>
            <StyledTitle>O mnie</StyledTitle>
            <StyledAboutMe>Mateusz Matysiak</StyledAboutMe>
            <StyledAboutMe>mateuszmatysiak96@gmail.com</StyledAboutMe>
            <StyledAboutMe>662 365 914</StyledAboutMe>
          </StyledCategory>
        </StyledCategoryWrapper>
        <StyledRightReserved>
          © All rights reserved 2020. Mateusz Matysiak
        </StyledRightReserved>
      </StyledContainer>
    </StyledFooter>
  );
};

export default Footer;
