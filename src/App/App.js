import React, { Component } from 'react';
import Header from './Components/Header/Header'
import ChatWindow from './Components/ChatWindow/ChatWindow.js'

export default class App extends Component {
	render() {
		return (
			<div>
				<Header/>
				<ChatWindow/>
			</div>
		);
	}
}