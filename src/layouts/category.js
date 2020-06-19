import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import ArticlesWrapper from "../components/ArticlesWrapper"
import { formatData } from "../utils/format"
import Article from "../components/Article"
import { down } from "styled-breakpoints"
import SearchIcon from "../assets/images/search_category.svg"

const CategoryTagTitleWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  width: 100%;
  margin: 0 16px 24px;

  ${down("sm")} {
    flex-direction: column;
    align-items: flex-start;
  }
`

const CategoryTagTitle = styled.h2`
  font-size: 36px;
  margin-right: 20px;
  color: ${({ theme }) => theme.font.black};
`

const CategoryNumberOfTags = styled.p`
  font-size: 20px;
  padding-bottom: 5px;
  color: ${({ theme }) => theme.font.secondary};
`

const CategoryTagDescriptionWrapper = styled.div`
  margin: 0 16px 24px;
`

const CategoryTagDescription = styled.p`
  width: 50%;
  line-height: 1.7;
  font-size: 18px;
  color: ${({ theme }) => theme.font.secondary};

  ${down("sm")} {
    width: 100%;
  }
`
const NewsletterInputWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  height: 40px;
  margin: 0 16px 42px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    width: 20px;
    height: 40px;
    background: url(${SearchIcon}) center center no-repeat;
    background-size: contain;
    margin-left: 20px;
  }

  ${down("sm")} {
    width: 100%;
    height: 100px;
    flex-direction: column;
    justify-content: space-between;
  }
`

const NewsletterInput = styled.input`
  width: 300px;
  min-height: 40px;
  border: ${({ theme }) => `1px solid ${theme.background.light.tertiary}`};
  border-radius: 50px;
  padding-left: 50px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.3s cubic-bezier(0.77, 0.2, 0.05, 1);

  &:focus {
    outline: none;
    box-shadow: ${({ theme }) => `0 0 0 1px ${theme.font.primary}`};
  }

  ${down("sm")} {
    width: 100%;
    border-radius: 50px;
  }
`

const getArticleName = data => {
  if (data.length === 1) return "Artykuł"
  else if (data.length >= 2 && data.length <= 4) return "Artykuły"
  else return "Artkułów"
}

const CategoryLayout = ({ data }) => {
  // const {
  //   allDatoCmsArticle: { edges },
  // } = data
  console.log(data)
  return ( 123
    // <ArticlesWrapper numberOfArticles={edges.length}>
    //   <CategoryTagTitleWrapper>
    //     <CategoryTagTitle>
    //       {`${edges[0].node.tag
    //         .charAt(0)
    //         .toUpperCase()}${edges[0].node.tag.slice(1)}`}
    //     </CategoryTagTitle>
    //     <CategoryNumberOfTags>
    //       {edges.length} {getArticleName(edges)}
    //     </CategoryNumberOfTags>
    //   </CategoryTagTitleWrapper>
    //   <CategoryTagDescriptionWrapper>
    //     <CategoryTagDescription>
    //       At first glance, Inheritance appears to be the biggest benefit of the
    //       Object Oriented Paradigm. All the simplistic examples of shape
    //       hierarchies that are paraded out as examples to the newly
    //       indoctrinated seem to make logical sense.
    //     </CategoryTagDescription>
    //   </CategoryTagDescriptionWrapper>
    //   <NewsletterInputWrapper>
    //     <NewsletterInput
    //       type="text"
    //       name="article"
    //       id="article"
    //       placeholder="Wyszukaj"
    //     />
    //   </NewsletterInputWrapper>
    //   {edges.map(({ node }) => (
    //     <Article key={node.id} data={formatData(node)[0]} />
    //   ))}
    // </ArticlesWrapper>
  )
}

// export const query = graphql`
//   query allArticlesByTag($id: String!) {
//     allDatoCmsArticle(filter: { tag: { eq: $id } }) {
//       edges {
//         node {
//           id
//           title
//           author
//           articleDescription
//           meta {
//             firstPublishedAt(formatString: "DD-MM-YYYY")
//           }
//           image {
//             fluid(maxWidth: 392, maxHeight: 240) {
//               ...GatsbyDatoCmsFluid_tracedSVG
//             }
//           }
//         }
//       }
//     }
//   }
// `

export default CategoryLayout
