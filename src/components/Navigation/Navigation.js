import React from "react"
import { Link } from 'gatsby';
import styled from 'styled-components';

const StyledNav = styled.nav`
    margin-right: 50px;
    ul {
        display: flex;
        flex-direction: ${({ orientation }) => orientation === "vertical" ? "column" : "row"};
    }
    li {
        &:not(:last-child) {
            padding: ${({ orientation }) => orientation === "vertical" ? "0 0 15px 0" : "0 60px 0 0"}
        }
    }    
    a {
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
    }
`;

const Navigation = ({ data, orientation }) => (
    <StyledNav orientation={orientation}>
        <ul>
            {data
                ? data.map(({ to, name }) => (
                    <li key={name}><Link to={to}>{name}</Link></li>
                ))
                : <>
                    <li><Link to="/blog" >Blog</Link></li>
                    <li><Link to="/frontsource" >Frontsource</Link></li>
                    <li><Link to="/about" >O mnie</Link></li>
                    <li><Link to="/contact" >Kontakt</Link></li>
                </>
            }
        </ul>
    </StyledNav>
)

export default Navigation
