import React from 'react';
import { createRoot } from 'react-dom/client';
import { DataStoreProvider } from '../providers/DataStoreProvider';
import App from './App';
import TitleBar from './components/nav/titlebar';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
root.render(
  <DataStoreProvider>
    <App />
  </DataStoreProvider>
);