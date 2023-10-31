import React from 'react';
import { createRoot } from 'react-dom/client';
import { DataStoreProvider } from '../providers/DataStoreProvider';
import App from './App';
import TitleBar from './components/nav/titlebar';

import { Provider as ReduxProvider } from 'react-redux';
import ReduxStore from '../providers/redux/store';
import { ModalProvider } from '../providers/ModalProvider';
import { DrawerProvider } from '../providers/DrawerProvider';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
root.render(
  <ReduxProvider store={ReduxStore}>
    <DataStoreProvider>
      <ModalProvider>
        <DrawerProvider>
          <App />
        </DrawerProvider>
      </ModalProvider>
    </DataStoreProvider>
  </ReduxProvider>
);