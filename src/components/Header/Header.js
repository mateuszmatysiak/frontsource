import React from 'react';
import styled from 'styled-components';
import Navigation from "../Navigation/Navigation";
import SearchInput from "../SearchInput/SearchInput";
import MoonIcon from '../../assets/images/moon.svg';

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;

    &:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 120px;
        background-color: ${({ theme }) => theme.background.lightSemiWhite};
        z-index: -1;
    }

    & button {
        background-color: transparent;
        border: none;
        margin: 0 2px;
    }

    img {
        width: 20px;
    }
`;

const StyledHeaderItem = styled.div`
    display: flex;
    align-items: center;
`;

const StyledButtonWrapper = styled.div`
    margin-left: 40px;
`;



const Header = () => {
    return (
        <StyledHeader>
            <Navigation />
            <StyledHeaderItem>
                <SearchInput />
                <button><img src={MoonIcon} alt="Moon icon" /></button>
                <StyledButtonWrapper>
                    <button>PL</button>
                    |
                    <button>EN</button>
                </StyledButtonWrapper>
            </StyledHeaderItem>
        </StyledHeader>
    );
};

export default Header;