import React, { Component } from 'react';
import ChatElement from './ChatElement/ChatElement'
import Aux from './../../../hoc/Aux/Aux.js'
import {connect} from 'react-redux'

class ChatList extends Component {
	render() {
		return (
			<Aux>
				{	
					this.props.chat.chatsValues.map (
						(value,index) =>
						<ChatElement
						name={value.chatName}
						id = {index}
						key = {index}
						ava={value.avatar}
						unread={value.unread}/>)
				}
			</Aux>
		);
	}
}

const mapStatetoProps = (state) => {
	return {
		chat: state.chatsList
	}
};

export default connect(mapStatetoProps) (ChatList);