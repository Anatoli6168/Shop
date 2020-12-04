import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import { rootReducer } from './redux/rootreducer';
import { Provider } from 'react-redux';
import { middlewareEnhancer } from './redux/middleware';
import { preloadedState } from './redux/preState';
import { BrowserRouter } from 'react-router-dom';


const store = createStore(rootReducer, preloadedState(), middlewareEnhancer)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
