import React from 'react';
import styled from 'styled-components';
import { down } from 'styled-breakpoints';
import { graphql } from 'gatsby';

const ContactWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  max-width: 1280px;
  margin: 0 auto 30px;
  padding: 20px;
`;

const StyledTitle = styled.h2`
  display: block;
  width: 100%;
  font-weight: 500;
  font-size: 32px;
  color: ${({ theme }) => theme.font.black};
  margin-bottom: 32px;

  ${down('sm')} {
    font-size: 28px;
  }
`;

const StyledWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  ${down('md')} {
    flex-direction: column;
  }
`;

const StyledAboutWrapper = styled.div`
  flex: 1 1;

  ${down('md')} {
    &:nth-child(1) {
      margin-bottom: 32px;
    }
  }
`;

const StyledAboutParagraph = styled.p`
  margin-bottom: 20px;
  font-size: 24px;
  color: ${({ theme }) => theme.font.secondary};

  ${down('sm')} {
    font-size: 18px;
  }

  ${down('xs')} {
    font-size: 16px;
  }
`;

const StyledFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  flex: 1 1;
`;

const StyledInput = styled.input`
  margin-bottom: 32px;
  height: 40px;
  padding: 10px;
  background-color: ${({ theme }) => theme.background.light.primary};
  border: 1px solid #e4e4e4;
  border-radius: 4px;
`;

const StyledTextArea = styled.textarea`
  margin-bottom: 32px;
  padding: 10px;
  background-color: ${({ theme }) => theme.background.light.primary};
  border: 1px solid #e4e4e4;
  border-radius: 4px;
`;

const StyledButton = styled.button`
  padding: 12px;
  background-color: ${({ theme }) => theme.font.primary};
  color: ${({ theme }) => theme.font.white};
  border: none;
  text-transform: uppercase;
  border-radius: 4px;
`;

const ContactPage = () => (
  <ContactWrapper>
    <StyledWrapper>
      <StyledAboutWrapper>
        <StyledTitle>Kontakt</StyledTitle>
        <StyledAboutParagraph>Mateusz Matysiak</StyledAboutParagraph>
        <StyledAboutParagraph>mateuszmatysiak96@gmail.com</StyledAboutParagraph>
        <StyledAboutParagraph>662 365 914</StyledAboutParagraph>
      </StyledAboutWrapper>
      <StyledFormWrapper>
        <StyledTitle>Skontaktuj się ze mną</StyledTitle>
        <StyledInput placeholder="Tytuł" />
        <StyledInput placeholder="Imię" />
        <StyledInput placeholder="Nazwisko" />
        <StyledTextArea placeholder="Opis..." rows="6" cols="40" />
        <StyledButton>Wyślij wiadomość</StyledButton>
      </StyledFormWrapper>
    </StyledWrapper>
  </ContactWrapper>
);

export const query = graphql`
  {
    allDatoCmsArticle {
      edges {
        node {
          title
        }
      }
    }
  }
`;

export default ContactPage;
