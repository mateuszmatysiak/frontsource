import React from "react"
import styled from 'styled-components';
import SearchIcon from '../../assets/images/search.svg';

const StyledLabel = styled.label`
    position: relative;
`;

const StyledInput = styled.input`
    width: 150px;
    padding-left: 26px;
    outline: none;
    border: none;
    border-bottom: 1px solid #707070;
    background-color: transparent;
    font-size: 15px;

    &:focus {
        border-bottom: 2px solid #707070;
    }
`;

const StyledImg = styled.img`
    width: 15px;
    height: 15px;
    position: absolute;
    top: 2px;
    left: 5px;
`;

const SearchInput = () => (
    <StyledLabel htmlFor="search">
        <StyledInput id="search" placeholder="Szukaj" />
        <StyledImg src={SearchIcon} />
    </StyledLabel>
)

export default SearchInput
