import React, { Component } from 'react';
import './shadow.css';
import Message from './Message/Message.js'
import {connect} from 'react-redux'
import {onLoadMessagesForChat} from './../../../store/actions/messageList.js'


class MessageList extends Component {
	addNewMessage(messageGot) {
		var newMessage = {};
		newMessage['text'] = messageGot.text;
		newMessage['time'] = messageGot.time;
		newMessage['spanText'] = messageGot.spanText;
		newMessage['yourMessage'] = messageGot.yourMessage;
		newMessage['file'] = messageGot.file;
		newMessage['chat_name'] = messageGot.chat_name;
		// if(this.props.chat_name == messageGot.chat_name)
		// {	
		// 	if(this.props.messagesProp.messageToChat[this.props.chat_name] == undefined){
		// 		this.props.messagesProp.messageToChat[this.props.chat_name] = newMessage;
		// 	}
		// 	else{
		// 	}
		// 	let keyn = "this.props.chat_name"
		// 	console.log(this.props.messagesProp.messageToChat)
		// }
		this.props.messagesProp.messagesGlobal.push(newMessage)
	}

  	render() {
  		let messageGot = { 
  			text : this.props.message.text,
  			time : this.props.message.time,
  			spanText : this.props.message.spanText,
  			yourMessage : this.props.message.yourMessage,
  			file : this.props.message.file,
  			chat_name : this.props.message.chat_name,
  		}
  		this.addNewMessage(messageGot)
  			return (
  				<div className="MessageList">
  				{
  					this.props.messagesProp.messagesGlobal.map(
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
 		messagesProp: state.messageList,
 		chats:state.chatsList
 	}
 };
 const mapDispatchToProps = dispatch => {
   return {
     onLoadMessagesForChat: () => dispatch(onLoadMessagesForChat()),
   }
 };

export default connect(mapStatetoProps,mapDispatchToProps)(MessageList);
