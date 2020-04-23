import React from "react"
import styled from "styled-components"
import MailIcon from "../../assets/images/mail.svg"
import { down } from "styled-breakpoints";

const backgroundLetter = (type, content, top, left) =>
  `&::${type} {
  content: "${content}";
  position: absolute;
  top: ${top};
  left: ${left};
  display: block;
  font-size: 100px;
  color: rgba(0, 0, 0, 0.1);
  opacity: 0.5;
  font-weight: 700;
  z-index: -1;
}`

const NewsletterWrapper = styled.section`
  position: relative;
  margin: 0 auto;
  text-align: center;
  width: 50%;

  ${backgroundLetter("before", "F", "10%", "10%")}
  ${backgroundLetter("after", "R", "-13%", "45%")}

  ${down("sm")} {
    width: unset;
    margin: 0 16px;
  }
`

const NewsletterTitle = styled.h1`
  font-size: 36px;
  color: ${({ theme }) => theme.font.black};
`

const NewsletterSubtitle = styled.h2`
  font-size: 24px;
  font-weight: 500;
  margin: 24px 0;
  color: ${({ theme }) => theme.font.secondary};
`

const NewsletterInputWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 400px;
  height: 40px;
  margin: 0 auto 20px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    width: 20px;
    height: 40px;
    background: url(${MailIcon}) center center no-repeat;
    background-size: contain;
    margin-left: 20px;
  }

  ${backgroundLetter("after", "O", "10%", "10%")}

  ${down("sm")} {
    width: 100%;
    height: 100px;
    flex-direction: column;
    justify-content: space-between;
  }
`

const NewsletterInput = styled.input`
  width: 300px;
  min-height: 40px;
  border: ${({ theme }) => `1px solid ${theme.background.light.tertiary}`};
  border-radius: 50px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  padding-left: 50px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.3s cubic-bezier(0.77, 0.2, 0.05, 1);

  &:focus {
    outline: none;
    box-shadow: ${({ theme }) => `0 0 0 1px ${theme.font.primary}`};
  }

  ${down("sm")} {
    width: 100%;
    border-radius: 50px;
  }
`

const NewsletterButton = styled.button`
  text-transform: uppercase;
  background-color: ${({ theme }) => theme.font.primary};
  color: ${({ theme }) => theme.font.white};
  border: 1px solid transparent;
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
  width: 100px;
  min-height: 42px;
  font-size: 10px;
  font-weight: 700;
  outline: none;

  ${down("sm")} {
    width: 100%;
    border-radius: 50px;
  }
`

const NewsletterCheckboxWrapper = styled.div`
  display: flex;
  width: 70%;
  margin: 0 auto 40px;
  text-align: left;

  ${backgroundLetter("before", "N", "25%", "70%")}
  ${backgroundLetter("after", "T", "67%", "60%")}
`

const NewsletterCheckbox = styled.input`
  margin: 5px 10px 0 0;
`

const NewsletterCheckboxLabel = styled.label`
  font-size: 11px;
  color: ${({ theme }) => theme.font.secondary};
  cursor: pointer;
`

const Newsletter = () => {
  return (
    <NewsletterWrapper>
      <NewsletterTitle>Blog poswiecony frontendowi.</NewsletterTitle>
      <NewsletterSubtitle>
        Dowiedz sie, jak pisac strony internetowe. Poznaj swiat frameworkow.
      </NewsletterSubtitle>
      <NewsletterInputWrapper>
        <NewsletterInput
          type="text"
          name="mail"
          id="mail"
          placeholder="Adres e-mail"
        />
        <NewsletterButton>Zapisz sie</NewsletterButton>
      </NewsletterInputWrapper>
      <NewsletterCheckboxWrapper>
        <NewsletterCheckbox type="checkbox" id="checkbox" />
        <NewsletterCheckboxLabel htmlFor="checkbox">
          Wyrazam zgode na kontaktowanie sie ze mna poprzez newsletter w celu
          informowania mnie o nowościach w Frontsource oraz akceptuje polityke
          prywatnosci.*
        </NewsletterCheckboxLabel>
      </NewsletterCheckboxWrapper>
    </NewsletterWrapper>
  )
}

export default Newsletter
