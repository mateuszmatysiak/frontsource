import React from "react"
import styled, { css } from "styled-components"
import { up } from "styled-breakpoints"
import Avatar from "../../../assets/images/avatar.png"
import tooltip from "../../../utils/tooltip"

const AuthorWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 16px 16px 32px 0;
  width: 100%;
  ${tooltip()}

  ${up("xl")} {
    ${({ large }) =>
      large &&
      css`
        padding: 16px 32px 32px 0;
      `}
  }
`

const Author = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.font.secondary};

  ${up("xl")} {
    ${({ large }) =>
      large &&
      css`
        font-size: 14px;
      `}
  }
`

const AuthorImage = styled.div`
  background: url(${Avatar}) center center no-repeat;
  background-size: cover;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-right: 8px;

  ${up("xl")} {
    ${({ large }) =>
      large &&
      css`
        width: 36px;
        height: 36px;
      `}
  }
`

const PostAuthor = ({ title, large, children }) => {
  return (
    <AuthorWrapper title={title} large={large}>
      <AuthorImage large={large} />
      <Author large={large}>{children}</Author>
    </AuthorWrapper>
  )
}

export default PostAuthor
