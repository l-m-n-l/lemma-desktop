import React from 'react';
import { createRoot } from 'react-dom/client';
import { DataStoreProvider } from '../providers/DataStoreProvider';
import App from './App';
import TitleBar from './components/nav/titlebar';

import { Provider as ReduxProvider } from 'react-redux';
import ReduxStore from '../providers/redux/store';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
root.render(
  <DataStoreProvider>
    <ReduxProvider store={ReduxStore} >
      <App />
    </ReduxProvider>
  </DataStoreProvider>
);