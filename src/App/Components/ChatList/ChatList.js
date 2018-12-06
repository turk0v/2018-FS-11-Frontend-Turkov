import React, { Component } from 'react';
import ChatElement from './ChatElement/ChatElement'
import Aux from './../../../hoc/Aux/Aux.js'
import {connect} from 'react-redux'
import {onLoadChatNames} from './../../../store/actions/chatsList.js'

class ChatList extends Component {
	componentWillMount () {
		if (this.props.chat.needToUpdate) {
			this.props.onLoadChatNames();
		}
	}
	render() {
		return (
			<Aux>
				{	
					this.props.chat.chatsValues.map (
						(value,index) =>
						<ChatElement
						name={value.name}
						id = {index}
						key = {index}
						ava = {this.props.ava.photo}
						unread={value.unread}
						/>)
				}
			</Aux>
		);
	}
}

const mapStatetoProps = (state) => {
	return {
		chat: state.chatsList,
		user: state.user,
		ava: state.ava,
	}
};
const mapDispatchToProps = dispatch => {
  return {
    onLoadChatNames: () => dispatch(onLoadChatNames()),
  }
};

export default connect(mapStatetoProps,mapDispatchToProps) (ChatList);