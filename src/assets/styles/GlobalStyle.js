import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600&display=swap');

    * {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }  

    html {
        scroll-behavior: smooth;
    }

    body,
    button,
    input,
    textarea {
        font-family: ${({ theme: { bodyFont } }) => bodyFont};
        font-size: ${({ theme: { fontSize } }) => fontSize.medium};
    }  

    body {
        background-color: ${({ theme: { palette } }) => palette.body};
        color: ${({ theme: { palette } }) => palette.text};
    }

    h1,
    h2,
    h3 {
        color: ${({ theme: { palette } }) => palette.title};
        font-weight: ${({ theme: { fontWeight } }) => fontWeight.semiBold};
    }

    ul {
        list-style: none;
    }

    a {
        text-decoration: none;
    }

    button {
        cursor: pointer;
        border: none;
        outline: none;
    }

    img {
        max-width: 100%;
        height: auto;
    }
    
    /* For medium devices */
    @media screen and (max-width: 768px) {
        body {
            margin:${({ theme: { headerHeight } }) => `0 0 ${headerHeight} 0`}
        }
    }
   
`;
