import React from 'react';
import { createRoot } from 'react-dom/client';
import { DataStoreProvider } from '../providers/DataStoreProvider';
import App from './App';
import TitleBar from './components/nav/titlebar';

import { Provider as ReduxProvider } from 'react-redux';
import ReduxStore from '../providers/redux/store';
import { ModalProvider } from '../providers/ModalProvider';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
root.render(
  <ReduxProvider store={ReduxStore}>
    <DataStoreProvider>
      <ModalProvider>
        <App />
      </ModalProvider>
    </DataStoreProvider>
  </ReduxProvider>
);