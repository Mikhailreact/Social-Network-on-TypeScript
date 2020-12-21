import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Route} from 'react-router-dom'
import {Dialogs} from "./components/Dialogs/Dialogs";
import {StoreType} from "./redux/state";


export type AppPropsType = {
    store: StoreType

}
const App: React.FC<AppPropsType> = (props) => {

    const state = props.store.getState();

    return (
        <div className={"app-wrapper"}>
            <Header/>
            <Navbar/>
            <div className={"app-wrapper-content"}>
                <Route path={'/dialogs'} render={() => <Dialogs dialogsPage={state.dialogsPage} />}/>
                <Route path={'/profile'} render={() => <Profile posts={state.profilePage.posts}
                                                                newPostText={state.profilePage.newPostText}
                                                                addPost={props.store.addPost.bind(props.store)}
                                                                changeNewText={props.store.changeNewText.bind(props.store)}

                /> }/>
            </div>
        </div>

    );
}

export default App;









