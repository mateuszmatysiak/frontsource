import React from "react"
import styled, { css } from "styled-components"
import { up } from "styled-breakpoints"
import { Link } from "gatsby"
import tooltip from "../../../utils/tooltip"

const Tag = styled(Link)`
  display: flex;
  align-items: center;
  margin: 16px;
  color: ${({ theme }) => theme.font.primary};
  text-transform: uppercase;
  font-weight: 600;
  font-size: 13px;
  transition: color 0.3s;
  ${tooltip()}
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.font.secondary};
  }

  ${up("xl")} {
    ${({ large }) =>
      large &&
      css`
        margin: 56px 32px 16px 32px;
      `}
  }
`

const ArticleTag = ({ large, title, to, children }) => {
  return (
    <Tag to={to} title={title} large={large}>
      {children}
    </Tag>
  )
}

export default ArticleTag
