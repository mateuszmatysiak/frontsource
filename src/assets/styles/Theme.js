import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
    background: {
        primary: "#F6F6F6",
        light: {
            primary: "#F7F7F7",
            secondary: "#FFF",
            tertiary: "#F0F0F0"
        },
        dark: {
            primary: "#212121",
            secondary: "#1C1C1C"
        }
    },
    font: {
        primary: "#3F51B5",
        secondary: "#707070",
        tertiary: "#CCCCCC"
    },
    breakpoints: {
        xs: "600px",
        sm: "960px",
        md: "1024px",
        lg: "1280px",
    }
}

const Theme = ({ children }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;