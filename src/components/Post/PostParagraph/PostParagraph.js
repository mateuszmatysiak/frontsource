import React from "react"
import styled from "styled-components"
import { down } from "styled-breakpoints"

const Paragraph = styled.p`
  line-height: 30px;
  font-weight: 500;
  font-size: 18px;
  color: ${({ theme }) => theme.font.secondary};
  margin-bottom: 20px;

  ${down("sm")} {
    font-size: 16px;
  }
`

const PostParagraph = ({ children }) => {
  return <Paragraph>{children}</Paragraph>
}

export default PostParagraph
