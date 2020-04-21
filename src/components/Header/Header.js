import React from 'react';
import styled from 'styled-components';
import Navigation from "../Navigation/Navigation";
import SearchInput from "../SearchInput/SearchInput";
import { mainNavigation } from '../../utils/navigation';

const StyledHeader = styled.header`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 80px;

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

const StyledNavigationWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;


const Header = () => {

    return (
        <StyledHeader>
            {/* <StyledNavigationWrapper>
                <Navigation data={mainNavigation} />
                <SearchInput />
            </StyledNavigationWrapper> */}
        </StyledHeader>
    );
};

export default Header;