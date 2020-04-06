import React from 'react';
import styled from 'styled-components';

const ArticleWrapper = styled.div`
    flex-basis: calc(25% - 30px);
    min-width: 250px;
    margin-bottom: 60px;

    &:not(:nth-of-type(4n)) {
        margin-right: 30px;
    }

`;

const ArticleImage = styled.div`
    height: 170px;
    background-color: lightgrey;
`;

const Article = () => {
    return (
        <ArticleWrapper>
            <ArticleImage />
            <div style={{ display: "flex", flexDirection: "column" }}>
                <span style={{ marginTop: "15px" }}>Dom w górach</span>
                <span style={{ marginTop: "15px" }}>Jedyne takie miejsce na ziemi</span>
                <div style={{ marginTop: "15px" }}>
                    <span style={{ marginRight: "5px", background: "#DCDCDC", borderRadius: 20, padding: "5px 10px", }}>Góry</span>
                    <span style={{ marginRight: "5px", background: "#DCDCDC", borderRadius: 20, padding: "5px 10px", }}>Zdrowie</span>
                </div>
            </div>
        </ArticleWrapper>
    );
};

export default Article;