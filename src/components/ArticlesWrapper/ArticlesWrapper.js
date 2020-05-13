import React from "react"
import styled from "styled-components"

const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: ${({ numberOfArticles }) =>
    numberOfArticles >= 2 ? "flex-start" : "center"};
  align-items: flex-start;
  max-width: 1280px;
  margin: 0 auto 30px;
`

const ArticlesWrapper = ({ children, numberOfArticles }) => (
  <Wrapper numberOfArticles={numberOfArticles}>{children}</Wrapper>
)

export default ArticlesWrapper
