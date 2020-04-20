import React from 'react';
import styled from 'styled-components';
import Navigation from '../Navigation';
import TwitterIcon from '../../assets/images/twitter.svg';
import GithubIcon from '../../assets/images/github.svg';
import LinkedinIcon from '../../assets/images/linkedin.svg';


const StyledFooter = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;

    &:before {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        height: 280px;
        background-color: ${({ theme }) => theme.background.lightSemiWhite};
        z-index: -1;
    }
`;

const StyledNavWrapper = styled.div`
    display: flex;
`;

const StyledInfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const StyledLink = styled.a`
    &:nth-child(2) {
        margin: 0 40px;
    }

    img {
        width: 30px;
        height: 30px;
    }
`;

const StyledTypography = styled.span`
    margin-bottom: 10px;
`;



const Footer = () => {
    return (
        <StyledFooter>
            <StyledNavWrapper>
                {/* <Navigation data={navigation} orientation="vertical" /> */}
                {/* <Navigation data={subNavigation} orientation="vertical" /> */}
            </StyledNavWrapper>
            <div>
                <StyledLink target="_blank" href="https://github.com/mateuszmatysiak">
                    <img src={GithubIcon} alt="Github icon" />
                </StyledLink>
                <StyledLink target="_blank" href="https://www.linkedin.com/in/mateusz-matysiak/">
                    <img src={LinkedinIcon} alt="Linkedin icon" />
                </StyledLink>
                <StyledLink target="_blank" href="https://twitter.com/matys0">
                    <img src={TwitterIcon} alt="Twitter icon" />
                </StyledLink>
            </div>
            <StyledInfoWrapper>
                <StyledTypography>Mateusz Matysiak</StyledTypography>
                <StyledTypography>testowyxyz@gmail.com</StyledTypography>
                <StyledTypography>123 456 789</StyledTypography>
            </StyledInfoWrapper>
        </StyledFooter>
    );
};

export default Footer;