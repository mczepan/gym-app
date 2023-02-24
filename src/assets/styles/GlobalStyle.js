import { createGlobalStyle, keyframes } from 'styled-components';
import Image from 'assets/images/background.jpg';

const animatedBackground = keyframes`
 from {
    background-position: 0 0;
  }
  to {
    background-position: center; 
   
  }
`;

export const GlobalStyle = createGlobalStyle`
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
        min-height: 100vh; 
        background-color: ${({ theme: { palette } }) => palette.body};
        color: ${({ theme: { palette } }) => palette.textAlternative};         
        background-image: url(${Image}); 
        background-size: cover;
        background-position: 0px 0px;
        animation: ${animatedBackground} 2s ease-in-out 1 alternate forwards;
        @media screen and (max-width: 600px) {
            animation: ${animatedBackground} 4s ease-in-out 1 alternate forwards;          
        }      
    }

    h1,
    h2,
    h3 {
        color: ${({ theme: { palette } }) => palette.titleGrey};
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
    
     /* height & width*/
     ::-webkit-scrollbar {
        height: 10px;
        width: 5px;
        border: 4px solid rgba(0, 0, 0, 0);
    }

    /* Track */
    ::-webkit-scrollbar-track {
        background: #f1f1f1;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: #888;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: #555;
    }

    .scrolling-wrapper {
        -webkit-overflow-scrolling: touch;
    }
    /* For medium devices */
    /* @media screen and (max-width: 750px) {
        body {
            margin:${({ theme: { headerHeight } }) => `0 0 ${headerHeight} 0`}
        }
    } */
   
`;
