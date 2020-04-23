import React from "react"
import styled, { css } from "styled-components"
import { Link } from "gatsby"
import { down } from "styled-breakpoints"
import SearchIcon from "../../assets/images/search.svg"
import ReSearchIcon from "../../assets/images/research.svg"
import CloseIcon from "../../assets/images/close.svg"

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

const StyledDesktopSearchWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  transform: translateX(-100%);
  width: 100%;
  height: 100vh;
  padding-top: 200px;
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

const StyledSearchInputWrapper = styled.div`
  position: relative;
  width: 60%;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    background: url(${ReSearchIcon}) center center no-repeat;
    display: block;
    width: 32px;
    height: 32px;
    background-size: contain;
    margin-left: 16px;
  }
`

const StyledSearchInput = styled.input`
  position: relative;
  width: 100%;
  border: none;
  border-bottom: ${({ theme }) => `2px solid ${theme.font.white}`};
  padding-right: 40px;
  background-color: transparent;
  outline: none;
  font-size: 32px;
  color: ${({ theme }) => theme.font.white};

  &::placeholder {
    color: ${({ theme }) => theme.font.white};
  }
`

const StyledCloseButton = styled.button`
  position: absolute;
  top: 5%;
  right: 20.5%;
  background: url(${CloseIcon}) center center no-repeat;
  display: block;
  width: 24px;
  height: 24px;
  border: unset;
  cursor: pointer;
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
      <StyledDesktopSearchWrapper open={open}>
        <StyledSearchInputWrapper>
          <StyledSearchInput type="text" placeholder="Szukaj..." />
        </StyledSearchInputWrapper>
        <StyledCloseButton onClick={() => setOpen(!open)} />
      </StyledDesktopSearchWrapper>
    </>
  )
}

export default DesktopNavigation
