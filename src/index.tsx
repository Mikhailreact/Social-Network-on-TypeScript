import React from 'react';
import './index.css';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import store from "./redux/redux-store";
import StoreContext from './StoreContext';
import {StateType, StoreType} from "./redux/store";

export const renderTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <StoreContext.Provider value={store}>
                <App /*state={store.getState()}
                     dispatch={store.dispatch.bind(store)}*/
                />
            </StoreContext.Provider>
        </BrowserRouter>,
        document.getElementById('root'));
}

/*renderTree(store.getState())

store.subscribe(()=>{
    let state = store.getState();
    renderTree(state);
})*/

renderTree();
store.subscribe(renderTree);





