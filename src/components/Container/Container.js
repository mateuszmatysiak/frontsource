import React from "react"
import styled from 'styled-components';
import { down } from 'styled-breakpoints';

const StyledContainer = styled.main`
    min-height: 100vh;
    padding-top: 35px;
`;

const Container = ({ children }) => (
    <StyledContainer>
        {children}
    </StyledContainer>
)

export default Container
