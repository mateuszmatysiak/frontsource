import React from "react"
import styled from "styled-components"
import { down } from "styled-breakpoints"
import TwitterIcon from "../../assets/images/twitter.svg"
import GithubIcon from "../../assets/images/github.svg"
import LinkedinIcon from "../../assets/images/linkedin.svg"

const StyledInformationWrapper = styled.section`
  height: 250px;
  width: 100%;
  background-color: ${({ theme }) => theme.background.primary};

  ${down("md")} {
    height: 350px;
  }
`

const StyledContentWrapper = styled.div`
  display: flex;
  max-width: 1280px;
  height: 100%;
  margin: 0 auto;

  ${down("md")} {
    flex-direction: column;
  }
`

const StyledDescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 24px;
  width: 50%;

  ${down("md")} {
    align-items: center;
    width: 100%;
    height: 150px;
    margin: 40px 0 20px 0;
    text-align: center;
  }
`

const StyledTitle = styled.h2`
  font-size: 40px;
  margin-bottom: 24px;
  color: ${({ theme }) => theme.font.black};
`

const StyledDescription = styled.p`
  font-size: 18px;
  font-weight: 500;
  color: ${({ theme }) => theme.font.secondary};
`

const StyledIconsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;

  ${down("md")} {
    width: 100%;
    height: 150px;
  }
`

const StyledIconLink = styled.a`
  width: 70px;
  margin: 20px;
`

const StyledIcon = styled.img``

const Information = () => {
  return (
    <StyledInformationWrapper>
      <StyledContentWrapper>
        <StyledDescriptionWrapper>
          <StyledTitle>Gdzie mnie znajdziesz?</StyledTitle>
          <StyledDescription>
            Moje projekty, informacje o mnie i wiele wiecej...
          </StyledDescription>
        </StyledDescriptionWrapper>
        <StyledIconsWrapper>
          <StyledIconLink
            target="_blank"
            href="https://github.com/mateuszmatysiak"
          >
            <StyledIcon src={GithubIcon} alt="Github icon" />
          </StyledIconLink>
          <StyledIconLink
            target="_blank"
            href="https://www.linkedin.com/in/mateusz-matysiak/"
          >
            <StyledIcon src={LinkedinIcon} alt="Linkedin icon" />
          </StyledIconLink>
          <StyledIconLink target="_blank" href="https://twitter.com/matys0">
            <StyledIcon src={TwitterIcon} alt="Twitter icon" />
          </StyledIconLink>
        </StyledIconsWrapper>
      </StyledContentWrapper>
    </StyledInformationWrapper>
  )
}

export default Information
