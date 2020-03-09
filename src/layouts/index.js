import React from "react"
import Navigation from "../components/Navigation/Navigation"
import GlobalStyle from "../assets/styles/globalStyles"


const Layout = ({ children }) => (
    <>
        <GlobalStyle />
        <Navigation />
        {children}
    </>
)

export default Layout
