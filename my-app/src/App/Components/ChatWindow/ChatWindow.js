import './style.css'
import React, { Component } from 'react';
import Aux from './../../../hoc/Aux/Aux.js'
import MessageList from '../Message-list/Message-list.js'

export default class ChatWindow extends Component {
	constructor() {
		super();
		this.state = {
			message: {},
		}
	}
	render() {
		return (
			<Aux>
				<MessageList message={this.state.message}/>
			</Aux>
		);
	}
}
