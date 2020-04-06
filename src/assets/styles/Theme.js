import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
    background: {
        globalLightGrey: "#F6F6F6",
        lightSemiWhite: "#F7F7F7",
        lightWhite: "#FFF",
        darkSemiBlack: "#212121",
        darkBlack: "#1C1C1C",
    },
    font: {
        globalActive: "#3F51B5",
        lightDefault: "#707070",
        darkDefault: "#CCCCCC",
    },
    breakpoints: {
        xs: "600px",
        sm: "960px",
        md: "1280px",
        lg: "1920px",
    }
}

const Theme = ({ children }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;