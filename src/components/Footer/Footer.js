import React from "react"
import styled from "styled-components"
import TwitterIcon from "../../assets/images/twitter.svg"
import GithubIcon from "../../assets/images/github.svg"
import LinkedinIcon from "../../assets/images/linkedin.svg"

const StyledFooter = styled.footer`
  width: 100%;
  height: 500px;
  background-color: ${({ theme }) => theme.font.black};
`

const StyledContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1280px;
  margin: 0 auto;
  color: ${({ theme }) => theme.font.white};
`

const StyledInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const StyledLink = styled.a`
  &:nth-child(2) {
    margin: 0 40px;
  }

  img {
    width: 30px;
    height: 30px;
  }
`

const StyledTypography = styled.span`
  margin-bottom: 10px;
`

const Footer = () => {
  return (
    <StyledFooter>
      <StyledContentWrapper>
        <div>
          <StyledLink target="_blank" href="https://github.com/mateuszmatysiak">
            <img src={GithubIcon} alt="Github icon" />
          </StyledLink>
          <StyledLink
            target="_blank"
            href="https://www.linkedin.com/in/mateusz-matysiak/"
          >
            <img src={LinkedinIcon} alt="Linkedin icon" />
          </StyledLink>
          <StyledLink target="_blank" href="https://twitter.com/matys0">
            <img src={TwitterIcon} alt="Twitter icon" />
          </StyledLink>
        </div>
        <StyledInfoWrapper>
          <StyledTypography>Mateusz Matysiak</StyledTypography>
          <StyledTypography>testowyxyz@gmail.com</StyledTypography>
          <StyledTypography>123 456 789</StyledTypography>
        </StyledInfoWrapper>
      </StyledContentWrapper>
    </StyledFooter>
  )
}

export default Footer
