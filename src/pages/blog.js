import React from "react"
import { Link } from 'gatsby';
import styled from 'styled-components';
import Article from '../components/Article';

const ArticlesWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 30px 0 125px 0;
`;

const BlogPage = () => (
    <>
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
