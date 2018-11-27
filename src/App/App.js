import React, { Component } from 'react';
import ChatWindow from './Components/ChatWindow/ChatWindow.js'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import ChatList from './Components/ChatList/ChatList.js'
import Aux from '../hoc/Aux/Aux.js'
import userAvatar1 from './public/avatar1.png'
import userAvatar2 from './public/avatar2.png'
import userAvatar3 from './public/avatar3.png'
import userAvatar4 from './public/avatar4.png'
import userAvatar5 from './public/avatar5.png'
import userAvatar6 from './public/avatar6.png'




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
			{
				chatName : 'Буль',
				avatar : userAvatar4,
			},
			{
				chatName : 'Кендрик',
				avatar : userAvatar5,
			},
			{
				chatName : 'Шиле',
				avatar : userAvatar6,
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