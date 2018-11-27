import React, { Component } from 'react';
import Header from './Components/Header/Header'
import ChatWindow from './Components/ChatWindow/ChatWindow.js'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import ChatList from './Components/ChatList/ChatList.js'
import Aux from '../hoc/Aux/Aux.js'
import userAvatar1 from './public/avatar1.png'
import userAvatar2 from './public/avatar2.png'
import userAvatar3 from './public/avatar3.png'


export default class App extends Component {
	constructor() {
		super();
		this.state = {
			chats: [
			{
				chatName : 'Долли',
				avatar : userAvatar1,
			},
			{
				chatName : 'Додо',
				avatar : userAvatar2,
			},
			{
				chatName : 'Джими',
				avatar : userAvatar3,
			},
			]
		}
	}

	Index = () => <h2>Home</h2>;
	render() {
		return (
			<Router>
				<Aux>
					<Route path="/chats" exact component={() => <ChatList chats = {this.state.chats}/>} />
					{
						this.state.chats.map(
						  ((value, index) =>
						  <Route
						    key={index}
						    path={`/chats/${index}`}
						    component={() => <ChatWindow id={index} name = {value.chatName} ava = {value.avatar} />}
						  />
						  )
						)
					}
				</Aux>
			</Router>
		);
	}
}