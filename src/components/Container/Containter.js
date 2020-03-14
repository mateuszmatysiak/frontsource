import React from "react"
import styled from 'styled-components';

const StyledContainer = styled.main`
    padding-top: 60px;
`;

const Container = ({children}) => (
    <StyledContainer>
        {children}
    </StyledContainer>
)

export default Container
