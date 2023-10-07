import React, {useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from "./App";
import {ModalProvider} from "./hooks/ModalContext";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <ModalProvider>
        <App/>
    </ModalProvider>
);
