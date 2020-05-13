import React from "react"
import styled, { css } from "styled-components"
import { up, down } from "styled-breakpoints"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import ArticleTag from "./ArticleTag"
import ArticleDescription from "./ArticleDescription"
import ArticleAuthor from "./ArticleAuthor"
import ArticleImage from "./ArticleImage"
import ArticleTitle from "./ArticleTitle"

const ArticleWrapper = styled.article`
  display: flex;
  flex-direction: column;
  flex: 0 0 calc(33.33% - 32px);
  margin: 0 16px 40px;
  min-width: 350px;
  border: ${({ theme }) => `1px solid ${theme.background.light.tertiary}`};
  border-radius: 4px;
  min-height: 500px;
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.2);
  }

  ${down("md")} {
    min-width: 330px;
    flex-grow: 1;
  }

  ${down("xxs")} {
    min-width: 300px;
  }

  ${({ large }) =>
    large &&
    css`
      ${up("xl")} {
        flex-direction: row;
        flex: 0 0 calc(66.66% - 32px);
      }

      ${down("lg")} {
        flex: 0 0 calc(33.33% - 32px);
      }

      ${down("md")} {
        flex-grow: 1;
      }
    `}
`

const ArticleContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1 1;
`

const Article = ({ large, data }) => {
  const isLarge = large ? 1 : 0
  const {
    image: { fluid },
    title,
    author,
    articleDescription,
    meta: { firstPublishedAt },
    slug,
  } = data

  return (
    <ArticleWrapper large={isLarge}>
      <ArticleImage large={isLarge} fluid={fluid} />
      <ArticleContentWrapper>
        <ArticleTag
          to="/frontsource"
          title="Kategoria: Frontsource"
          large={isLarge}
        >
          Frontsource
        </ArticleTag>
        <ArticleTitle large={isLarge} to={`/blog/${slug}`}>
          {title}
        </ArticleTitle>
        <ArticleDescription large={isLarge} to={`/blog/${slug}`}>
          {articleDescription}
        </ArticleDescription>
        <ArticleAuthor title="Author" large={isLarge}>
          {author}, {firstPublishedAt}
        </ArticleAuthor>
      </ArticleContentWrapper>
    </ArticleWrapper>
  )
}

Article.propTypes = {
  large: PropTypes.bool,
}

Article.defaultProps = {
  large: false,
}

export default Article
