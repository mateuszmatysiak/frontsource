import React from "react"
import Header from "../components/Header/Header"
import Container from '../components/Container/Containter';
import GlobalStyle from "../assets/styles/globalStyles"

const Layout = ({ children }) => (
    <>
        <GlobalStyle />
        <Header />
        <Container>
            {children}
        </Container>
    </>
)

export default Layout
