import React from "react"
import { graphql } from "gatsby"
import ArticlesWrapper from "../components/ArticlesWrapper"
import ArticlesButton from "../components/ArticlesButton"
import Article from "../components/Article"
import Newsletter from "../components/Newsletter"
import { formatData } from "../utils/format";

const BlogPage = ({ data }) => {
  const {
    allDatoCmsArticle: { edges },
  } = data

  return (
    <>
      <Newsletter />
      <ArticlesWrapper numberOfArticles={edges.length}>
        {edges.map(({ node }, index) => (
          <Article large={index === 0} key={node.id} data={formatData(node)[0]} />
        ))}
        <ArticlesButton />
      </ArticlesWrapper>
    </>
  )
}

export const query = graphql`
  {
    allDatoCmsArticle {
      edges {
        node {
          id
          title
          author
          articleDescription
          meta {
            firstPublishedAt(formatString: "DD-MM-YYYY")
          }
          image {
            fluid(maxWidth: 392, maxHeight: 240) {
              ...GatsbyDatoCmsFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default BlogPage
