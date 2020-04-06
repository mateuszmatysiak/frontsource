import React from "react"
import { Link } from 'gatsby';
import styled from 'styled-components';
import Article from '../components/Article';

const TagItem = styled.span`
    font-weight: 400;
    font-size: ${({ size }) => size};

    &:not(:nth-child(1)) {
        margin-left: 8px;
    }
    margin-right: 8px;
`;

const TagWrapper = styled.div`
    margin-top: 40px;
`;

const ArticlesWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 30px 0 125px 0;
`;

const BlogPage = () => (
    <>
        <TagItem size="32px">Blog</TagItem>
        <TagWrapper>
            <TagItem size="20px"><Link>Wszystko</Link></TagItem>|
            <TagItem size="20px"><Link>Zdrowie</Link></TagItem>|
            <TagItem size="20px"><Link>Sport</Link></TagItem>|
            <TagItem size="20px"><Link>Norwegia</Link></TagItem>
        </TagWrapper>
        <ArticlesWrapper>
            <Article/>
            <Article/>
            <Article/>
            <Article/>
            <Article/>
            <Article/>
            <Article/>
            <Article/>
            <Article/>
        </ArticlesWrapper>
    </>
)

export default BlogPage
