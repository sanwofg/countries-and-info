import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createStore} from "redux"
import { Provider } from 'react-redux';
import reducer from "./reducer"
import datas from "./data.json"

const initialStore ={
  color: true,
  data1:datas,
  data2:datas
};
const store = createStore(reducer, initialStore)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
  </React.StrictMode>
);

