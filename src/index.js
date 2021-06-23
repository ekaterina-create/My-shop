import React from 'react';
import ReactDOM from 'react-dom';
import './scss/app.scss';
import App from './App';
import DataService from './services/DataService'
import { BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './components/redux/store';
import { ItemsProvider } from './context/context';

const dataService = new DataService();

ReactDOM.render(
  <Provider store={store}>
    <ItemsProvider value={dataService}>
    <BrowserRouter>  
         <App/>
     </BrowserRouter>
     </ItemsProvider>
     </Provider>,
  
  document.getElementById('root')
);

