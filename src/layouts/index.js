import React from "react"
import Theme from '../assets/styles/Theme';
import GlobalStyle from "../assets/styles/globalStyles"
import Header from "../components/Header"
import Container from '../components/Container';
import Footer from '../components/Footer';

const Layout = ({ children }) => (
    <Theme>
        <GlobalStyle />
        <Header />
        <Container>
            {children}
        </Container>
        <Footer />
    </Theme>
)

export default Layout
