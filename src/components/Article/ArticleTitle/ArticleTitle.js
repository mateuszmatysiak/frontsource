import React from "react"
import styled, { css } from "styled-components"
import { up } from "styled-breakpoints"
import { Link } from "gatsby"

const Title = styled(Link)`
  margin: 0 16px 16px;
  font-size: 18px;
  line-height: 27px;
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({ theme }) => theme.font.black};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  cursor: pointer;

  ${up("xl")} {
    ${({ large }) =>
      large &&
      css`
        margin: 0 32px 16px;
        font-size: 26px;
        line-height: 35px;
        -webkit-line-clamp: 3;
      `}
  }
`

const ArticleTitle = ({ large, to, children }) => {
  return (
    <Title large={large} to={to}>
      {children}
    </Title>
  )
}

export default ArticleTitle
