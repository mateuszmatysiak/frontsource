import React from "react"
import styled from 'styled-components';
import SearchIcon from '../../assets/images/search.svg';
import { down } from 'styled-breakpoints';

const StyledLabel = styled.label`
    position: relative;
    margin-right: 40px;

    ${down('xs')} {
        display: none;
    }
`;

const StyledInput = styled.input`
    width: 150px;
    padding-left: 26px;
    outline: none;
    border: none;
    border-bottom: ${({ theme }) => `1px solid ${theme.font.lightDefault}`};
    background-color: transparent;
    font-size: 15px;
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
