import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import {store} from './BLL/store.js';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import reportWebVitals from './reportWebVitals';
import { firstPost } from './BLL/first';
import './index.css'
import './mobile.css'
import {blogPost} from "./BLL/blog";
const root = ReactDOM.createRoot(document.getElementById('root'));

store.dispatch(firstPost());
store.dispatch(blogPost(store.getState().blogReducer.list));

root.render(
    
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>
);
reportWebVitals();
