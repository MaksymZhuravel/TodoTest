import React from 'react';
import {Provider} from 'react-redux';
import {ThemeProvider} from 'styled-components';

import {store} from './redux/store';
import Main from './screens/Main';
import theme from './themes/theme';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Main />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
