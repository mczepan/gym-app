import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { BrowserRouter } from 'react-router-dom';

const AppProviders = ({ children }) => {
    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                {children}
            </ThemeProvider>{' '}
        </BrowserRouter>
    );
};

export default AppProviders;
