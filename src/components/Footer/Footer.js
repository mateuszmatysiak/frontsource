import React from "react"
import styled from "styled-components"
import { down } from "styled-breakpoints"
import { mainNavigation } from "../../utils/navigation"
import { frontsourceTest } from "../../utils/dummyData"
import { Link } from "gatsby"

const StyledFooter = styled.footer`
  display: flex;
  width: 100%;
  background-color: ${({ theme }) => theme.font.black};
`
const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 1280px;
  margin: 0 auto;
  color: white;
`
const StyledCategoryWrapper = styled.div`
  display: flex;

  ${down("sm")} {
    display: none;
  }
`

const StyledCategory = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  margin: 80px 20px;
`
const StyledTitle = styled.h3`
  font-size: 14px;
  text-transform: uppercase;
  margin-bottom: 40px;
`

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
`

const StyledListItem = styled.li`
  font-size: 13px;
  margin-bottom: 15px;
`

const StyledListItemLink = styled(Link)`
  color: ${({ theme }) => theme.font.tertiary};
  &:hover {
    color: ${({ theme }) => theme.font.white};
  }
`

const StyledAboutMe = styled.div`
  color: ${({ theme }) => theme.font.tertiary};
  font-size: 13px;
  margin-bottom: 15px;
`

const StyledRightReserved = styled.div`
  padding: 15px;
  font-size: 13px;
  color: ${({ theme }) => theme.font.tertiary};
  text-align: center;
`

const Footer = () => {
  return (
    <StyledFooter>
      <StyledContainer>
        <StyledCategoryWrapper>
          <StyledCategory>
            <StyledTitle>Kategorie</StyledTitle>
            <StyledList>
              {mainNavigation.map(({ name, to }) => (
                <StyledListItem key={name}>
                  <StyledListItemLink to={to}>{name}</StyledListItemLink>
                </StyledListItem>
              ))}
            </StyledList>
          </StyledCategory>
          <StyledCategory>
            <StyledTitle>Frontsource</StyledTitle>
            <StyledList>
              {frontsourceTest.map(({ name, to }) => (
                <StyledListItem key={name}>
                  <StyledListItemLink to={to}>{name}</StyledListItemLink>
                </StyledListItem>
              ))}
            </StyledList>
          </StyledCategory>
          <StyledCategory>
            <StyledTitle>O mnie</StyledTitle>
            <StyledAboutMe>Mateusz Matysiak</StyledAboutMe>
            <StyledAboutMe>testmail@gmail.com</StyledAboutMe>
            <StyledAboutMe>123 456 789</StyledAboutMe>
          </StyledCategory>
        </StyledCategoryWrapper>
        <StyledRightReserved>
          © All rights reserved 2020. Mateusz Matysiak
        </StyledRightReserved>
      </StyledContainer>
    </StyledFooter>
  )
}

export default Footer
