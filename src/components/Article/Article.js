import React from 'react';
import styled from 'styled-components';
import Avatar from "../../assets/images/avatar.png";

const ArticleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex-basis: calc(33.33% - 60px);
    min-width: 250px;
    margin-bottom: 60px;
    flex-grow: 1;
    border: ${({ theme }) => `1px solid ${theme.background.light.tertiary}`};
    border-radius: 4px;
    min-height: 500px;
    transition: all .5s;
    cursor: pointer;

    &:hover {
        box-shadow: 0 0 30px 0 rgba(0,0,0,0.2);
    }
`;

const ArticleImg = styled.div`
    background: url("https://i.picsum.photos/id/321/500/500.jpg") center center no-repeat;
    height: 200px;
    background-size: cover;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
`;

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1 1;
`;

const Tag = styled.div`
    display: flex;
    align-items: center;
    margin: 16px;
    color: ${({ theme }) => theme.font.primary};
    text-transform: uppercase;
    font-weight: 600;
    font-size: 13px;
`;

const Title = styled.h3`
    margin: 0 16px 16px;
    line-height: 27px;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const DescriptionWrapper = styled.div`
    flex: 1 1;
    max-height: 110px;
    margin: 0 16px 16px;
    display: -webkit-box;
   -webkit-line-clamp: 5;
   -webkit-box-orient: vertical;
    overflow: hidden;
`;

const Description = styled.p`
    min-height: 110px;
    margin: 0;
    font-size: 14px;
    color: ${({ theme }) => theme.font.secondary};
    line-height: 22px;
    letter-spacing: 1px;
`;

const BottomWrapper = styled.div`
    display: flex;
    align-items: center;
    margin: 0 16px 16px; 
`;

const Author = styled.p`
    font-size: 12px;
    color: ${({ theme }) => theme.font.secondary};
`;

const AvatarImg = styled.div`
    background: url(${Avatar}) center center no-repeat;
    background-size: contain;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    margin-right: 8px;
`;

const Article = () => {
    return (
        <ArticleWrapper>
            <ArticleImg />
            <ContentWrapper>
                <Tag>Frontsource</Tag>
                <Title>Testowy tytul dla mojego bloga, który bedzie nieco dluzszy</Title>
                <DescriptionWrapper>
                    <Description>Od muzyki po webinary, ebooki i kursy online.</Description>
                </DescriptionWrapper>
                <BottomWrapper>
                    <AvatarImg />
                    <Author>Mateusz Matysiak, Kwi 14</Author>
                </BottomWrapper>
            </ContentWrapper>
        </ArticleWrapper>
    );
};

export default Article;