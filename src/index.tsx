import ReactDOM from 'react-dom';
import App from './App';

import { ThemeProvider } from 'styled-components';

const theme = {
    main: '#007BFF', // Primary color - Bootstrap primary blue
    secondary: '#6C757D', // Secondary color - Bootstrap secondary gray
    background: '#F8F9FA', // Background color - Bootstrap light gray
    light: '#E0ECF8', // Light color - Light blue
    dark: '#0D47A1', // Dark color - Dark blue
  };

  
ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);