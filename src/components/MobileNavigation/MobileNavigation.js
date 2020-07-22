import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { up } from 'styled-breakpoints';
import { Link } from 'gatsby';

const StyledHamburger = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 19px;
  padding: 10px;
  border: unset;
  background-color: transparent;
  outline: none;
  box-sizing: content-box;
  z-index: 3;

  ${up('md')} {
    display: none;
  }
`;

const StyledHamburgerItem = styled.span`
  display: block;
  width: 30px;
  height: 3px;
  background: ${({ theme }) => theme.font.secondary};
  transform-origin: 4px 0px;
  transition: ${`transform 0.3s cubic-bezier(0.77,0.2,0.05,1.0),
              background 0.3s cubic-bezier(0.77,0.2,0.05,1.0),
              opacity 0.35s ease`};

  &:first-child {
    transform-origin: 0% 0%;
  }

  &:nth-last-child(2) {
    transform-origin: 50% 50%;
  }

  ${({ open }) =>
    open &&
    css`
      opacity: 1;
      transform: rotate(-45deg) translate(-2px, -1px);
      background: white;

      &:nth-last-child(3) {
        opacity: 0;
        transform: rotate(0deg) scale(0.2, 0.2);
      }

      &:nth-last-child(2) {
        transform: rotate(45deg) translate(-2px, 3px);
      }
    `}
`;

const StyledNav = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  transform: translateX(-100%);
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.font.primary};
  transition: transform 0.3s cubic-bezier(0.77, 0.2, 0.05, 1);
  z-index: 2;

  ${({ open }) =>
    open &&
    css`
      transform: translateX(0);
    `}
`;

const StyledNavList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const StyledNavListItem = styled.li`
  color: white;
  margin: 40px 0;
  font-size: 24px;
`;

const StyledNavListLink = styled(Link)`
  padding: 10px;
`;

const StyledNavListLinkOut = styled.a`
  ${StyledNavListLink}
`;

const MobileNavigation = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <StyledHamburger onClick={() => setOpen(!open)}>
        <StyledHamburgerItem open={open} />
        <StyledHamburgerItem open={open} />
        <StyledHamburgerItem open={open} />
      </StyledHamburger>
      <StyledNav open={open}>
        <StyledNavList>
          <StyledNavListItem>
            <StyledNavListLink to="/blog">Blog</StyledNavListLink>
          </StyledNavListItem>
          <StyledNavListItem>
            <StyledNavListLinkOut
              href="https://matysiakmateusz.pl/"
              target="_blank"
              rel="noreferrer noopener"
            >
              O mnie
            </StyledNavListLinkOut>
          </StyledNavListItem>
          <StyledNavListItem>
            <StyledNavListLink to="/contact">Kontakt</StyledNavListLink>
          </StyledNavListItem>
        </StyledNavList>
      </StyledNav>
    </>
  );
};

export default MobileNavigation;
