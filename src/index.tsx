import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { App } from './App';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'mobx-react';
import AppStore from './store/app.store';
import { RootStore } from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const appStore = new AppStore();
root.render(
  <React.StrictMode>    
      <BrowserRouter>    
        <Provider {...RootStore}>{/*add multiple store*/}
          <App/>      
        </Provider>   
        {/*<Provider appStore={appStore}>
          <App/>      
        </Provider>   add single store*/}
      </BrowserRouter>    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
