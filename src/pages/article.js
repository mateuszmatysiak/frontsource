import React from "react"
import styled, { css } from "styled-components"
import { down, up } from "styled-breakpoints"
import Avatar from "../assets/images/avatar.png"
import tooltip from "../utils/tooltip"

const ArticlesWrapper = styled.section`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: flex-start;
  max-width: 800px;
  margin: 0 auto 30px;
  padding: 20px;
`

const Title = styled.h1`
  color: ${({ theme }) => theme.font.black};
  font-size: 32px;

  ${down("sm")} {
    font-size: 28px;
  }
`

const Tag = styled.div`
  background-color: ${({ theme }) => theme.font.primary};
  color: ${({ theme }) => theme.font.white};
  padding: 8px;
  border-radius: 4px;
  text-transform: uppercase;
  font-size: 11px;
  font-weight: 600;
  margin-bottom: 20px;
`

const AuthorWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 16px 16px 32px 0;
  ${tooltip()}

  ${up("xl")} {
    ${({ large }) =>
      large &&
      css`
        margin: 16px 32px 32px 0;
      `}
  }
`

const Author = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.font.secondary};

  ${up("xl")} {
    ${({ large }) =>
      large &&
      css`
        font-size: 14px;
      `}
  }
`

const AuthorImg = styled.picture`
  background: url(${Avatar}) center center no-repeat;
  background-size: cover;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-right: 8px;

  ${up("xl")} {
    ${({ large }) =>
      large &&
      css`
        width: 36px;
        height: 36px;
      `}
  }
`

const Paragraph = styled.p`
  line-height: 30px;
  font-weight: 500;
  font-size: 18px;
  color: ${({ theme }) => theme.font.secondary};
  margin-bottom: 20px;
`
const StyledImg = styled.div`
  background: url(${`https://i.picsum.photos/id/20/1200/800.jpg`}) center center
    no-repeat;
  height: 400px;
  width: 100%;
  background-size: cover;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  margin-bottom: 30px;
`

const ArticlePage = () => (
  <ArticlesWrapper>
    <Tag>Frontsource</Tag>
    <Title>Jak stworzyc strone internetowa?</Title>
    <AuthorWrapper title="Autor" large={"isLarge"}>
      <AuthorImg large={"isLarge"} />
      <Author large={"isLarge"}>Mateusz Matysiak, Kwi 14</Author>
    </AuthorWrapper>
    <Paragraph>
      W przeciwienstwie do rozpowszechnionych opinii, Lorem Ipsum nie jest tylko
      przypadkowym tekstem. Ma ono korzenie w klasycznej lacinskiej literaturze
      z 45 roku przed Chrystusem, czyli ponad 2000 lat temu! Richard McClintock,
      wykladowca laciny na uniwersytecie Hampden-Sydney w Virginii, przyjrzal
      sie uwazniej jednemu z najbardziej niejasnych slow w Lorem Ipsum
    </Paragraph>
    <StyledImg />
    <Paragraph>
      W przeciwienstwie do rozpowszechnionych opinii, Lorem Ipsum nie jest tylko
      przypadkowym tekstem. Ma ono korzenie w klasycznej lacinskiej literaturze
      z 45 roku przed Chrystusem
    </Paragraph>
    <Paragraph>
      W przeciwienstwie do rozpowszechnionych opinii, Lorem Ipsum nie jest tylko
      przypadkowym tekstem. Ma ono korzenie w klasycznej lacinskiej literaturze
      z 45 roku przed Chrystusem
    </Paragraph>
    <StyledImg />
  </ArticlesWrapper>
)

export default ArticlePage
