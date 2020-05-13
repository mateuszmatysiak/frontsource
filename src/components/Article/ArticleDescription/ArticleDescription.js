import React from "react"
import styled, { css } from "styled-components"
import { up } from "styled-breakpoints"
import { Link } from "gatsby"

const DescriptionWrapper = styled(Link)`
  max-height: 110px;
  margin: 0 16px 16px;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  overflow: hidden;
  cursor: pointer;

  ${up("xl")} {
    ${({ large }) =>
      large &&
      css`
        flex: 4 1;
        max-height: unset;
        margin: 0 32px 32px;
        -webkit-line-clamp: 7;
      `}
  }
`

const Description = styled.p`
  min-height: 110px;
  margin: 0;
  font-size: 14px;
  color: ${({ theme }) => theme.font.secondary};
  line-height: 22px;
  letter-spacing: 1px;

  ${up("xl")} {
    ${({ large }) =>
      large &&
      css`
        line-height: 28px;
      `}
  }
`

const ArticleDescription = ({ large, to, children }) => {
  return (
    <DescriptionWrapper large={large} to={to}>
      <Description large={large}>{children}</Description>
    </DescriptionWrapper>
  )
}

export default ArticleDescription
