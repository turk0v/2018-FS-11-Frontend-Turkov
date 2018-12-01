import React from "react";
import ReactDOM from "react-dom";
import App from "./App/App";
import {Provider} from 'react-redux'
import { createStore, applyMiddleware, combineReducers } from "redux";
import messageForm from "./store/reducers/messageForm";
import messageList from "./store/reducers/messageList";
import chats from './store/reducers/chat.js'

const mainReducer = combineReducers({
    messageList:messageList,
    chatsList:chats,
})

const store = createStore(mainReducer);

ReactDOM.render(
	<Provider store={store}>
    <App />
    </Provider>,
  document.getElementById("root")
);
