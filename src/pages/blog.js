import React from "react"
import styled from 'styled-components';
import Article from '../components/Article';

const ArticlesWrapper = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start; 
`;

const BlogPage = () => {
    return (
        <>
            <ArticlesWrapper>
                <Article large />
                <Article />
                <Article />
                <Article />
                <Article />
                <Article />
                <Article />
                <Article />
            </ArticlesWrapper>
        </>
    )
}

export default BlogPage
