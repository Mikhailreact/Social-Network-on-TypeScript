import {renderTree} from "../render";

export type MessagesType = {
    id: number
    message: string
}
export type DialogType = {
    id: number
    name: string
}
export type PostType = {
    id: number
    message: string
    likesCount: number
}
export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}
export type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessagesType>
}
export type SidebarType = {}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}

export let state: RootStateType = {
    profilePage: {
        newPostText: "",
        posts: [{id: 1, message: 'Hi, how are you?', likesCount: 12},
            {id: 2, message: 'It\'s my first post', likesCount: 11},
            {id: 3, message: 'blabla', likesCount: 1100},
            {id: 4, message: 'dada', likesCount: 11},],
    },
    dialogsPage: {
        dialogs: [{id: 1, name: 'Dimych'},
            {id: 2, name: 'Andrey'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Sasha'},
            {id: 5, name: 'Viktor'},
            {id: 6, name: 'Valera'}],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How is your it-kamasutra?'},
            {id: 3, message: 'yo'},
            {id: 4, message: 'yo'},
            {id: 5, message: 'yo'}
        ]
    },
    sidebar: {
        name: "Dfytr"
    }

}

export let addPost = (postText: string) => {
    let newPost: PostType = {
        id: new Date().getTime(),
        message: postText,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    renderTree(state);
}
export const changeNewText = (newText: string) => {
    state.profilePage.newPostText = newText;
    renderTree(state);
}



/*export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}*/
















