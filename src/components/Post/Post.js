import React from "react"
import styled from "styled-components"

const PostWrapper = styled.section`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  max-width: 800px;
  min-height: 100vh;
  margin: 0 auto 30px;
  padding: 20px;
`

const Post = ({ children }) => {
  return <PostWrapper>{children}</PostWrapper>
}

export default Post
