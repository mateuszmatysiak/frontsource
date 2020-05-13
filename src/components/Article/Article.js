import React from 'react';
import styled, { css } from 'styled-components';
import Avatar from "../../assets/images/avatar.png";
import { up, down } from 'styled-breakpoints';
import { Link } from 'gatsby';
import tooltip from "../../utils/tooltip";
import PropTypes from 'prop-types';

const ArticleWrapper = styled.article`
    display: flex;
    flex-direction: column;
    flex: 0 0 calc(33.33% - 32px);
    margin: 0 16px 40px;
    min-width: 350px;
    border: ${({ theme }) => `1px solid ${theme.background.light.tertiary}`};
    border-radius: 4px;
    min-height: 500px;
    transition: box-shadow .3s;

    &:hover {
        box-shadow: 0 0 30px 0 rgba(0,0,0,0.2);
    }

    ${down('md')} {
        min-width: 330px;
        flex-grow: 1;
    }

    ${down('xxs')} {
        min-width: 300px;
    }

    ${({ large }) =>
        large &&
        css`
            ${up('xl')} {
                flex-direction: row;
                flex: 0 0 calc(66.66% - 32px);
            }

            ${down('lg')} {
                flex: 0 0 calc(33.33% - 32px);
            }

            ${down('md')} {
                flex-grow: 1;
            }
    `}
`;

const ArticleImg = styled.picture`
    background: url(${`https://i.picsum.photos/id/${Math.floor(Math.random() * (1 - 500)) + 500}/1200/800.jpg`}) center center no-repeat;
    height: 200px;
    width: unset;
    background-size: cover;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;

    ${up('xl')} {
        ${({ large }) =>
        large &&
        css`
            height: auto;
            width: 391px;
            border-top-left-radius: 4px;
            border-top-right-radius: 0;
            border-bottom-left-radius: 4px;
        `}
    }
`;

const ArticleContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1 1;
`;

const Tag = styled(Link)`
    display: flex;
    align-items: center;
    margin: 16px;
    color: ${({ theme }) => theme.font.primary};
    text-transform: uppercase;
    font-weight: 600;
    font-size: 13px;
    transition: color .3s;
    ${tooltip()}
    cursor: pointer;

    &:hover {
        color: ${({ theme }) => theme.font.secondary};
    }

    ${up('xl')} {
        ${({ large }) =>
        large &&
        css`
            margin: 56px 32px 16px 32px;
        `}
    }
`;

const Title = styled(Link)`
    margin: 0 16px 16px;
    font-size: 18px;
    line-height: 27px;
    font-weight: 600;
    overflow: hidden;
    text-overflow: ellipsis;
    color: ${({ theme }) => theme.font.black};
    display: -webkit-box;
   -webkit-line-clamp: 2;
   -webkit-box-orient: vertical;
   cursor: pointer;

   ${up('xl')} {
        ${({ large }) =>
        large &&
        css`
            margin: 0 32px 16px;
            font-size: 26px;
            line-height: 35px;
            -webkit-line-clamp: 3;
        `}
   }
`;

const DescriptionWrapper = styled(Link)`
    max-height: 110px;
    margin: 0 16px 16px;
    display: -webkit-box;
   -webkit-line-clamp: 5;
   -webkit-box-orient: vertical;
    overflow: hidden;
    cursor: pointer;

    ${up('xl')} {
        ${({ large }) =>
        large &&
        css`
            flex: 4 1;
            max-height: unset;
            margin: 0 32px 32px;
            -webkit-line-clamp: 7;
        `}
    }
`;

const Description = styled.p`
    min-height: 110px;
    margin: 0;
    font-size: 14px;
    color: ${({ theme }) => theme.font.secondary};
    line-height: 22px;
    letter-spacing: 1px;

    ${up('xl')} {
        ${({ large }) =>
        large &&
        css`
            line-height: 28px;
        `}
    }
`;

const AuthorWrapper = styled.div`
    display: flex;
    align-items: center;
    margin: 0 16px 16px;
    ${tooltip()}

    ${up('xl')} {
        ${({ large }) =>
        large &&
        css`
            margin: 0 32px 16px;
        `}
    }
`;

const Author = styled.p`
    font-size: 12px;
    color: ${({ theme }) => theme.font.secondary};

    ${up('xl')} {
        ${({ large }) =>
        large &&
        css`
            font-size: 14px;
        `}
    }
`;

const AuthorImg = styled.picture`
    background: url(${Avatar}) center center no-repeat;
    background-size: cover;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    margin-right: 8px;

    ${up('xl')} {
        ${({ large }) =>
        large &&
        css`
            width: 36px;
            height: 36px;
        `}
    }
`;

const Article = ({ large }) => {
    const isLarge = large ? 1 : 0;
    return (
        <ArticleWrapper large={isLarge}>
            <ArticleImg large={isLarge} />
            <ArticleContentWrapper>
                <Tag to="/frontsource" title="Kategoria: Frontsource" large={isLarge} >Frontsource</Tag>
                <Title large={isLarge} to="/article">What is Lorem Ipsum?</Title>
                <DescriptionWrapper large={isLarge} to="/article">
                    <Description large={isLarge}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book..</Description>
                </DescriptionWrapper>
                <AuthorWrapper title="Autor" large={isLarge}>
                    <AuthorImg large={isLarge} />
                    <Author large={isLarge}>Mateusz Matysiak, Kwi 14</Author>
                </AuthorWrapper>
            </ArticleContentWrapper>
        </ArticleWrapper>
    );
};

Article.propTypes = {
    large: PropTypes.bool
};

Article.defaultProps = {
    large: false
}

export default Article;