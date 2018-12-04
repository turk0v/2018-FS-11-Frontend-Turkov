import React from "react";
import ReactDOM from "react-dom";
import App from "./App/App";
import {Provider} from 'react-redux'
import { createStore, combineReducers, applyMiddleware  } from "redux";
import messageList from "./store/reducers/messageList";
import chats from './store/reducers/chat.js'
import userReducer from './store/reducers/user.js'
import thunk from 'redux-thunk'

const mainReducer = combineReducers({
    messageList:messageList,
    chatsList:chats,
    user: userReducer,
})

const store = createStore(mainReducer,applyMiddleware(thunk));

ReactDOM.render(
	<Provider store={store}>
    <App />
    </Provider>,
  document.getElementById("root")
);
