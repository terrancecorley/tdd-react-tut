import { createGlobalStyle } from 'styled-components/macro';

export const CSSGlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
        box-sizing: content-box;
    }

    :root {
        font-sizing: 1rem;
    }

    html {
        box-sizing: border-box;
    }
    
    body {
        font-family: 'Open Sans', sans-serif;
        line-height: 1.6;
        background-color: #fdfdfd;
    }

    img {
        max-width: 100%;
    }

    a {
        text-decoration: none;
    }

    ul {
        padding: 0;
        list-style: none;
    }

    input::placeholder {
        color: darkcyan;
    }
`;