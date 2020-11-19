import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {BrowserRouter, Route} from 'react-router-dom'
import {Dialogs} from "./components/Dialogs/Dialogs";
import {RootStateType} from "./redux/state";


type AppPropsType = {
    state: RootStateType
}
const App = (props: AppPropsType) => {

    return (
        <BrowserRouter>
            <div className={"app-wrapper"}>
                <Header/>
                <Navbar/>
                <div className={"app-wrapper-content"}>
                    <Route path={'/dialogs'} render={ () => <Dialogs dialogsPage={props.state.dialogsPage} />  }/>
                    <Route path={'/profile'} render={ () => <Profile posts={props.state.profilePage.posts}/> }/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;









