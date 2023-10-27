import React from 'react';
import { createRoot } from 'react-dom/client';
import { DataStoreProvider } from '../providers/DataStoreProvider';
import App from './App';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
root.render(
  <DataStoreProvider>
    <App />
  </DataStoreProvider>
);

// calling IPC exposed from preload script
window.electron.ipcRenderer.once('ipc-example', (arg) => {
  // eslint-disable-next-line no-console
  console.log(arg);
});
window.electron.ipcRenderer.sendMessage('ipc-example', ['ping']);
