import React from "react"
import styled from "styled-components"
import Article from "../components/Article"
import Newsletter from "../components/Newsletter"
import Information from "../components/Information"

const ArticlesWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  max-width: 1280px;
  margin: 0 auto 30px;
`

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
  transition: background-color .4s, color .4s;
  outline: none;

  &:hover {
    background-color: ${({ theme }) => theme.font.primary};
    color: ${({ theme }) => theme.font.white};
  }
`

const BlogPage = () => {
  return (
    <>
      <Newsletter />
      <ArticlesWrapper>
        <Article large />
        <Article />
        <Article />
        <Article />
        <Article />
        <ArticleButtonWrapper>
          <ArticleButton>Zobacz wiecej</ArticleButton>
        </ArticleButtonWrapper>
      </ArticlesWrapper>
      <Information />
    </>
  )
}

export default BlogPage
