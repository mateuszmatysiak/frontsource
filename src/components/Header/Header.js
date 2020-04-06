import React, { useState } from 'react';
import styled from 'styled-components';
import Navigation from "../Navigation/Navigation";
import SearchInput from "../SearchInput/SearchInput";
import ContrastIcon from '../../assets/images/contrast.svg';
import { navigation } from '../../utils/global';
import { down } from 'styled-breakpoints';

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
    img {
        width: 20px;

        ${down('xs')} {
            width: 30px;
        }
    }
`;

const StyledButton = styled.button`
    display: flex;
    background-color: transparent;
    border: none;
    margin: 0 2px;
    
    ${down('xs')} {
        order: -1;
  }
`

const StyledHeaderItem = styled.div`
    display: flex;
    align-items: center;

    ${down('xs')} {
        justify-content: space-between;
        width: 100%;
    }
`;

const StyledButtonWrapper = styled.div`
    display: flex;
    margin-left: 40px;

    ${down('xs')} {
        display: none;
    }
`;

const StyledHamburger = styled.button`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 30px;
    height: 20px;
    background: transparent;
    border: unset;
`;

const StyledHamburgerItem = styled.div`
    display: block;
    width: 30px;
    height: 3px;
    border-radius: 5px;
    background: ${({ theme }) => theme.background.lightSemiWhite};
    transition: all .2s ease-in-out;
    z-index: 2;

    &:nth-child(3) {
        transform: ${({open}) => open && 'translateY(-8px) rotate(-133deg)'};
    }

    &:nth-child(2) {
        transform: ${({open}) => open && 'scale(0)'};
    }

    &:nth-child(1) {
        transform: ${({open}) => open && 'translateY(9px) rotate(133deg)'};
    }
`;


const Header = () => {
    const [open, setOpen] = useState(false);

    return (
        <StyledHeader>
            <Navigation data={navigation} />
            <StyledHeaderItem>
                <StyledHamburger onClick={() => setOpen(!open)}>
                    <StyledHamburgerItem open={open} />
                    <StyledHamburgerItem open={open} />
                    <StyledHamburgerItem open={open} />
                </StyledHamburger>
                <SearchInput />
                <StyledButton><img src={ContrastIcon} alt="Contrast icon" /></StyledButton>
                <StyledButtonWrapper>
                    <StyledButton>PL</StyledButton>
                    |
                    <StyledButton>EN</StyledButton>
                </StyledButtonWrapper>
            </StyledHeaderItem>
        </StyledHeader>
    );
};

export default Header;