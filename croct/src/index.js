import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {CroctProvider} from '@croct/plug-react';
import { BrowserRouter } from 'react-router-dom';



const root = ReactDOM.createRoot(document.getElementById('root'));

  root.render(
    <React.StrictMode>
      <CroctProvider appId='00000000-0000-0000-0000-000000000000'>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CroctProvider>
    </React.StrictMode>
  );
