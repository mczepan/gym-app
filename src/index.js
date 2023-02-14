import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from 'views/Main/App';
import AppProviders from 'providers/AppProviders';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <AppProviders>
            <App />
        </AppProviders>
    </React.StrictMode>
);
