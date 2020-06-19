import React from "react"
import styled from "styled-components"
import { down } from "styled-breakpoints"

const StyledSubtitle = styled.h3`
  font-size: 28px;
  font-weight: 500;
  padding-bottom: 16px;
  width: 100%;

  ${down("sm")} {
    font-size: 24px;
  }
`

const PostSubtitle = ({ children }) => {
  return <StyledSubtitle>{children}</StyledSubtitle>
}

export default PostSubtitle
