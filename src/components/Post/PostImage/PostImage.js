import React from "react"
import styled, { css } from "styled-components"
import Image from "gatsby-image"

const StyledImage = styled(Image)`
  width: 100%;
  border-radius: 2px;
  margin-bottom: 30px;

  ${({ post }) =>
    post &&
    css`
      width: 100%;
      max-height: 300px;
    `}
`

const PostImage = ({ fluid, post }) => {
  return <StyledImage fluid={fluid} post={post} />
}

export default PostImage
