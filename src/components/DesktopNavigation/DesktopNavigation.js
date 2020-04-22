import React from "react"
import styled, { css } from "styled-components"
import { Link } from "gatsby"
import { down } from "styled-breakpoints"
import SearchIcon from "../../assets/images/search.svg"

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  margin-left: 50px;

  ${down("sm")} {
    display: none;
  }
`

const StyledNavList = styled.ul`
  display: flex;
`

const StyledNavListItem = styled.li`
  margin-left: 32px;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.font.secondary};
`

const StyledNavListLink = styled(Link)`
  position: relative;
  transition: color 0.5s;

  &:hover {
    color: ${({ theme }) => theme.font.primary};
  }
`

const StyledDesktopSearch = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  transform: translateX(-100%);
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.font.primary};
  z-index: 1;

  ${({ open }) =>
    open &&
    css`
      transform: translateX(0);
    `}
`

const StyledDesktopSearchIcon = styled.picture`
  background: url(${SearchIcon}) center center no-repeat;
  display: block;
  width: 24px;
  height: 24px;
  background-size: contain;
  margin-top: 2px;
  margin-left: 16px;
`

const StyleDesktopButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
`

const DesktopNavigation = ({ data }) => {
  const [open, setOpen] = React.useState(false)
  return (
    <>
      <StyledNav>
        <StyledNavList>
          {data.map(({ to, name }, index) => (
            <StyledNavListItem key={index}>
              <StyledNavListLink to={to}>{name}</StyledNavListLink>
            </StyledNavListItem>
          ))}
        </StyledNavList>
        <StyleDesktopButton onClick={() => setOpen(!open)}>
          <StyledDesktopSearchIcon />
        </StyleDesktopButton>
      </StyledNav>
      <StyledDesktopSearch open={open}>Search</StyledDesktopSearch>
    </>
  )
}

export default DesktopNavigation
