import React from 'react';
import styled from 'styled-components';
import Navigation from "../Navigation/Navigation";
import SearchInput from "../SearchInput/SearchInput";
import MoonIcon from '../../assets/images/moon.svg';

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;

    & button {
        background-color: transparent;
        border: none;
        margin: 0 2px;
    }
`;

const StyledImg = styled.img`
    width: 20px;
    margin: 0 40px 0 50px;
`;

const StyledRightBar = styled.div`
    display: flex;
    align-items: center;
`;


const Header = () => {
    return (
        <StyledHeader>
            <Navigation />
            <StyledRightBar>
                <SearchInput />
                <StyledImg src={MoonIcon} />
                <div>
                    <button>PL</button>
                    |
                    <button>EN</button>
                </div>
            </StyledRightBar>
        </StyledHeader>
    );
};

export default Header;