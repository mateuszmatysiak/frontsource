import React from "react"
import styled from "styled-components"
import DesktopNavigation from "../DesktopNavigation"
import MobileNavigation from "../MobileNavigation"
import { mainNavigation } from "../../utils/navigation"
import { Link } from "gatsby"
import Logo from "../../assets/images/logo.svg"

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  margin: 0 auto;
  padding: 0 16px;
  max-width: 1280px;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 80px;
    background-color: ${({ theme }) => theme.background.light.primary};
    z-index: -1;
  }
`

const StyledLogo = styled.img`
  display: block;
`

const Header = () => {
  return (
    <StyledHeader>
      <Link to="/blog">
        <StyledLogo src={Logo} />
      </Link>
      <MobileNavigation data={mainNavigation} />
      <DesktopNavigation data={mainNavigation} />
    </StyledHeader>
  )
}

export default Header
