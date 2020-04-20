import React from "react"
import styled from 'styled-components';
import SearchIcon from '../../assets/images/search.svg';

const StyledImg = styled.img`
    width: 24px;
    margin-top: 2px;
    margin-left: 16px;
`;

const StyledButton = styled.button`
    background-color: transparent;
    border: none;
    outline: none;
`;

const SearchInput = () => (
    <StyledButton>
        <StyledImg src={SearchIcon} />
    </StyledButton>
)

export default SearchInput
