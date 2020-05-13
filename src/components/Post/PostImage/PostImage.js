import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"

const StyledImage = styled(Image)`
  width: 100%;
  height: 350px;
  border-radius: 2px;
  margin-bottom: 30px;
`

const PostImage = ({ fluid }) => {
  return <StyledImage fluid={fluid} />
}

export default PostImage
