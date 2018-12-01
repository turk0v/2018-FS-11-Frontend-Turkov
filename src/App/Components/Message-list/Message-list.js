import React, { Component } from 'react';
import './shadow.css';
import Message from './Message/Message.js'
import {connect} from 'react-redux'


class MessageList extends Component {
	constructor() {
		super();
		this.addNewMessage.bind(this);
	}

	addNewMessage(messageGot) {
		var newMessage = {};
		newMessage['text'] = messageGot.text;
		newMessage['time'] = messageGot.time;
		newMessage['spanText'] = messageGot.spanText;
		newMessage['yourMessage'] = messageGot.yourMessage;
		newMessage['file'] = messageGot.file;
		this.props.messagesGot.messages.push(newMessage);
	}
	// onEnterance() {
	// 	console.log(this.props.id);
	// }

  	render() {
  		let messageGot = { 
  			text : this.props.message.text,
  			time : this.props.message.time,
  			spanText : this.props.message.spanText,
  			yourMessage : this.props.message.yourMessage,
  			file : this.props.message.file,
  		}
  		this.addNewMessage(messageGot)
  		console.log(this.props.messagesGot);
  			return (
  				<div className="MessageList">
  				{
  					this.props.messagesGot.messages.map (
  					(value,index) =>		
						<Message 
						key = {index}
						text = {value.text}
						time = {value.time}
						file = {value.file}
						yourMessage = {value.yourMessage}
						spanText = {value.spanText}/>
					)
				}
				</div>
  				)
}
  			
 }
 const mapStatetoProps =(state) => {
 	return {
 		messagesGot: state.messageList,
 		chats:state.chatsList
 	}
 };

export default connect(mapStatetoProps)(MessageList);
