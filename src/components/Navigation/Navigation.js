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
        position: relative;
        text-decoration: none;
        color: inherit;
        
        &:after {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            margin: auto;
            width: 0%;
            background-color: #3F51B5;
            height: 2px;
            transition: all .5s;
        }

        &:hover:after {
            width: 100%;
        }
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
`;

const Navigation = () => (
    <StyledNav>
        <StyledNavList>
            <StyledNavListItem><Link to="/blog" >Blog</Link></StyledNavListItem>
            <StyledNavListItem><Link to="/frontsource" >Frontsource</Link></StyledNavListItem>
            <StyledNavListItem><Link to="/about" >O mnie</Link></StyledNavListItem>
            <StyledNavListItem><Link to="/contact" >Kontakt</Link></StyledNavListItem>
        </StyledNavList>
    </StyledNav>
)

export default Navigation
