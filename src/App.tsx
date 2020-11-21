import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Route} from 'react-router-dom'
import {Dialogs} from "./components/Dialogs/Dialogs";
import {addPost, changeNewText, RootStateType} from "./redux/state";


export type AppPropsType = {
    state: RootStateType

}
const App = (props: AppPropsType) => {
    return (
        <div className={"app-wrapper"}>
            <Header/>
            <Navbar/>
            <div className={"app-wrapper-content"}>
                <Route path={'/dialogs'} render={() => <Dialogs dialogsPage={props.state.dialogsPage} />}/>
                <Route path={'/profile'} render={() => <Profile posts={props.state.profilePage.posts}
                                                                newPostText={props.state.profilePage.newPostText}
                                                                addPost={addPost}
                                                                changeNewText={changeNewText}

                /> }/>
            </div>
        </div>

    );
}

export default App;









