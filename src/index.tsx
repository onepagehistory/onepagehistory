import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ThemeProvider } from "react-jss";
import { theme } from './theme';

const appThemed = (
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>
);

ReactDOM.render(appThemed, document.getElementById('root'));
