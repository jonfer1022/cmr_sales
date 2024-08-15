import React from 'react';
import { Provider } from 'react-redux';
import MainRouter from './Router';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <MainRouter />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
