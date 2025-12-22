import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: 'Roboto', sans-serif;
        background-color: ${({ theme }) => theme.colors.background};
        color: ${({ theme }) => theme.colors.text};
        font-size: 16px; /* Base font size */
        line-height: 1.5;
        box-sizing: border-box;
    }

    ul {
        margin: 0;
        padding: 0;
        list-style: none;
    }
`;
