import React from "react"
import styled from "styled-components"
import { down } from "styled-breakpoints"

const StyledTitle = styled.h1`
  color: ${({ theme }) => theme.font.black};
  font-size: 32px;

  ${down("sm")} {
    font-size: 28px;
  }
`

const PostTitle = ({ children }) => {
  return <StyledTitle>{children}</StyledTitle>
}

export default PostTitle
