import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from 'redux'
import { rootReducer } from './redux/reducer/rootReducer'
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import thunk from "redux-thunk"
const store=createStore(rootReducer, applyMiddleware(thunk));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <Provider store = { store } >
    <React.StrictMode >
    <BrowserRouter>
    <
    App / >
    </BrowserRouter>
    </React.StrictMode> </Provider>
);