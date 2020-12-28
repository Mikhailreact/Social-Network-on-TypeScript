import React from 'react';
import './index.css';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import store from "./redux/redux-store";

export const renderTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App  state={store.getState()}
                  dispatch={store.dispatch.bind(store)}
            />
        </BrowserRouter>,
        document.getElementById('root'));
}

renderTree();
store.subscribe(renderTree);





