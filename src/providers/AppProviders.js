import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { store } from 'store/store';
import { theme } from 'assets/styles/theme';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { Provider } from 'react-redux';

const AppProviders = ({ children }) => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <ThemeProvider theme={theme}>
                    <GlobalStyle />
                    {children}
                </ThemeProvider>{' '}
            </BrowserRouter>
        </Provider>
    );
};

export default AppProviders;
