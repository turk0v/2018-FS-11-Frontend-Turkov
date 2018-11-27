import React, { Component } from 'react';
import ChatElement from './ChatElement/ChatElement'
import Aux from './../../../hoc/Aux/Aux.js'

export default class ChatList extends Component {
	constructor() {
		super();
	}
	render() {
		return (
			<Aux>
				{
					this.props.chats.map(((value, index) =>
					<ChatElement
					  key={index}
					  name={value.chatName}
					  ava = {value.avatar}
					  id={index}
					  />))
				}
			</Aux>
		);
	}
}
