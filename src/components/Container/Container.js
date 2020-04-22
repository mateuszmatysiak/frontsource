import React from "react"
import styled from 'styled-components';

const StyledContainer = styled.main`
    min-height: 100vh;
    padding-top: 50px;
`;

const Container = ({ children }) => (
    <StyledContainer>
        {children}
    </StyledContainer>
)

export default Container
