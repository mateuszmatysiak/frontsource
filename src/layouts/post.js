import React from "react"
import { graphql } from "gatsby"
import PostImage from "../components/Post/PostImage"
import PostTag from "../components/Post/PostTag"
import PostAuthor from "../components/Post/PostAuthor"
import PostTitle from "../components/Post/PostTitle"
import Post from "../components/Post"
import generatePost from "../utils/generatePost"

const PostLayout = ({ data: { datoCmsArticle } }) => {
  const {
    title,
    author,
    image: { fluid },
    meta: { firstPublishedAt },
    articleContent,
  } = datoCmsArticle

  return (
    <Post>
      <PostTag backTo="/blog" tagTo={`blog/category/${0}`}>
        {0}
      </PostTag>
      <PostImage fluid={fluid} />
      <PostTitle>{title}</PostTitle>
      <PostAuthor title="Autor" large>
        {author}, {firstPublishedAt}
      </PostAuthor>

      {generatePost(articleContent)}
    </Post>
  )
}

export const query = graphql`
  query querySingleArticle($id: String!) {
    datoCmsArticle(id: { eq: $id }) {
      title
      author
      image {
        fluid(maxWidth: 800, maxHeight: 300) {
          ...GatsbyDatoCmsFluid_tracedSVG
        }
      }
      meta {
        firstPublishedAt(formatString: "DD-MM-YYYY")
      }
      articleContent {
        ... on DatoCmsParagraph {
          paragraphContent
        }
        ... on DatoCmsArticleImage {
          imageContent {
            fluid(maxWidth: 800, maxHeight: 300) {
              ...GatsbyDatoCmsFluid_tracedSVG
            }
          }
        }
        ... on DatoCmsHeading {
          headingContent
        }
      }
    }
  }
`

export default PostLayout
