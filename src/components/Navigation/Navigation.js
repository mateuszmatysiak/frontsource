import React from "react"
import styled from 'styled-components';
import { Link } from 'gatsby';
import { down } from 'styled-breakpoints';

const StyledNav = styled.nav`
    margin-right: 50px;

    ${down('xs')} {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: #3F51B5;
    }
`;

const StyledNavList = styled.ul`
    display: flex;
    flex-direction: ${({ orientation }) => orientation === "vertical" ? "column" : "row"};

    ${down('xs')} {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;
    }
`;

const StyledNavListItem = styled.li`
    &:not(:last-child) {
        padding: ${({ orientation }) => orientation === "vertical" ? "0 0 15px 0" : "0 60px 0 0"};

        ${down('xs')} {
            padding: 30px 0;
        }
    }


    ${down('xs')} {
        padding: 30px 0;
        font-size: 30px;
        color: ${({ theme }) => theme.background.lightSemiWhite};
    }

`;

const StyledNavListLink = styled(Link)`
    position: relative;
        
    &:after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        margin: auto;
        width: 0%;
        background-color: ${({ theme }) => theme.font.globalActive};
        height: 2px;
        transition: all .5s;
    }

    &:hover:after {
        width: 100%;
    }
`;

const Navigation = ({ data, orientation }) => (
    <StyledNav >
        <StyledNavList orientation={orientation}>
            {data.map(({ to, name }) =>
                <StyledNavListItem key={name} orientation={orientation}>
                    <StyledNavListLink to={to}>{name}</StyledNavListLink>
                </StyledNavListItem>)
            }
        </StyledNavList>
    </StyledNav>
)

export default Navigation
