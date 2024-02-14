import React from 'react';
import {Provider} from 'react-redux';

import {store} from './redux/store';
import Main from './screens/Main/Main.tsx';
import ThemeProvider from './themes/ThemeProvider.tsx';

function App(): React.JSX.Element {
  return (
    <ThemeProvider>
      <Provider store={store}>
        <Main />
      </Provider>
    </ThemeProvider>
  );
}

export default App;
