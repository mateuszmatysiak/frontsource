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
    }
}

const Theme = ({ children }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;