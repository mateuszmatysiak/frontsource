import React from 'react';
import styled from 'styled-components';
import DesktopNavigation from "../DesktopNavigation";
import MobileNavigation from "../MobileNavigation";
import { mainNavigation } from '../../utils/navigation';
import Logo from "../../assets/images/logo.png";

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    margin: 0 16px;

    &:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 80px;
        background-color: ${({ theme }) => theme.background.light.primary};
        z-index: -1;
    }
`;

const NavLogo = styled.picture`
    background: url(${Logo}) center center no-repeat;
    background-size: contain;
    width: 150px;
    height: 80px;
`;


const Header = () => {

    return (
        <StyledHeader>
            <NavLogo />
            <MobileNavigation/>
            <DesktopNavigation data={mainNavigation} />
        </StyledHeader>
    );
};

export default Header;