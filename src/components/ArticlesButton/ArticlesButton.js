import React from "react"
import styled from "styled-components"

const ArticleButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  margin: 16px;
`

const ArticleButton = styled.button`
  text-transform: uppercase;
  background-color: transparent;
  padding: 16px 26px;
  border-radius: 50px;
  border: ${({ theme }) => `1px solid ${theme.font.primary}`};
  color: ${({ theme }) => theme.font.primary};
  font-weight: 700;
  transition: background-color 0.4s, color 0.4s;
  outline: none;

  &:hover {
    background-color: ${({ theme }) => theme.font.primary};
    color: ${({ theme }) => theme.font.white};
  }
`

const ArticlesButton = () => {
  return (
    <ArticleButtonWrapper>
      <ArticleButton>Zobacz więcej</ArticleButton>
    </ArticleButtonWrapper>
  )
}

export default ArticlesButton
