import React from "react"
import styled from 'styled-components';
import { Link } from 'gatsby';
import SearchInput from "../SearchInput";

const StyledNav = styled.nav`
    display: flex;
    align-items: center;
    margin-left: 50px;
`;

const StyledNavList = styled.ul`
    display: flex;
`;

const StyledNavListItem = styled.li`
    margin-left: 32px;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 600;
    color:  ${({ theme }) => theme.font.secondary};
`;

const StyledNavListLink = styled(Link)`
    position: relative;
    transition: color .5s;
        
    &:hover {
        color: ${({ theme }) => theme.font.primary};
    }
`;

const DesktopNavigation = ({ data }) => (
    <StyledNav >
        <StyledNavList>
            {data.map(({ to, name }, index) =>
                <StyledNavListItem key={index}>
                    <StyledNavListLink to={to}>{name}</StyledNavListLink>
                </StyledNavListItem>)}
        </StyledNavList>
        <SearchInput />
    </StyledNav>
)

export default DesktopNavigation
