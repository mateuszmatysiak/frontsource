import React from "react"
import { Link } from 'gatsby';
import styled from 'styled-components';

const StyledNav = styled.nav`
    &:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 120px;
        background-color: #F7F7F7;
        z-index: -1;
    }

    a {
        text-decoration: none;
        color: inherit;
    }
`;

const StyledNavList = styled.ul`
    display: flex;
    list-style: none;
`;

const StyledNavListItem = styled.li`
    color: #707070;
    &:not(:nth-last-child(1)) {
        padding-right: 60px;
    }

    &:hover:after {
        content: "";
        display: block;
        width: 100%;
        height: 2px;
        margin-top: 5px;
        background-color: #3F51B5;
    }
`;

const Navigation = () => (
    <StyledNav>
        <StyledNavList>
            <StyledNavListItem><Link>Blog</Link></StyledNavListItem>
            <StyledNavListItem><Link>Frontsource</Link></StyledNavListItem>
            <StyledNavListItem><Link>O mnie</Link></StyledNavListItem>
            <StyledNavListItem><Link>Kontakt</Link></StyledNavListItem>
        </StyledNavList>
    </StyledNav>
)

export default Navigation
