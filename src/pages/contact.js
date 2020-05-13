import React from "react"
import styled from "styled-components"
import { down } from "styled-breakpoints"

const ArticlesWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  max-width: 1280px;
  margin: 0 auto 30px;
  padding: 20px;
`

const StyledTitle = styled.span`
  display: block;
  width: 100%;
  font-weight: 500;
  font-size: 32px;
  color: ${({ theme }) => theme.font.black};
`

const StyledWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 32px;

  ${down("sm")} {
    flex-direction: column;
  }
`

const StyledAboutWrapper = styled.div`
  flex: 1 1;
`

const StyledAboutParagraph = styled.p`
  margin-bottom: 20px;
  font-size: 24px;
  color: ${({ theme }) => theme.font.secondary};
`

const StyledFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  flex: 1 1;
`

const StyledInput = styled.input`
  margin-bottom: 20px;
  height: 40px;
  padding: 10px;
  border: none;
  background-color: ${({ theme }) => theme.background.light.primary};
  border-radius: 4px;
`

const ContactPage = () => (
  <ArticlesWrapper>
    <StyledTitle>Kontakt</StyledTitle>
    <StyledWrapper>
      <StyledAboutWrapper>
        <StyledAboutParagraph>Mateusz Matysiak</StyledAboutParagraph>
        <StyledAboutParagraph>mojmail@gmail.com</StyledAboutParagraph>
        <StyledAboutParagraph>123 456 789</StyledAboutParagraph>
        <StyledAboutParagraph>Linkedin</StyledAboutParagraph>
      </StyledAboutWrapper>
      <StyledFormWrapper>
        <StyledInput placeholder="test" />
        <StyledInput placeholder="test" />
        <StyledInput placeholder="test" />
        <StyledInput placeholder="test" />
        <StyledInput placeholder="test" />
      </StyledFormWrapper>
    </StyledWrapper>
  </ArticlesWrapper>
)

export default ContactPage
