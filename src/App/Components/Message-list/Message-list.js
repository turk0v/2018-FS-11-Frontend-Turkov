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
		newMessage['chat_name'] = messageGot.chat_name;
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
  			chat_name : this.props.message.chat_name,
  		}
  		// if (this.props.messagesGot.messages[0] !== undefined){
  		// 	if(this.props.chat_name == this.props.messagesGot.messages[0].chat_name) {
  		// 		this.addNewMessage(messageGot)
  		// 	}
  		// }
  		console.log(this.props.message.chat_name)
  		// console.log(this.props.chats)
  		this.addNewMessage(messageGot)
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
						spanText = {value.spanText}
						chat_name = {value.chat_name}
						/>
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
