import React, { Component } from 'react';
import './shadow.css';
import Message from './Message/Message.js'
import {connect} from 'react-redux'
import {emojiList} from './../EmojiMenu/EmojiSmile/EmojiSmile.js'


class MessageList extends Component {
	addNewMessage(messageGot) {
		var newMessage = [];
		newMessage['text'] = messageGot.text;
		newMessage['time'] = messageGot.time;
		newMessage['spanText'] = messageGot.spanText;
		newMessage['yourMessage'] = messageGot.yourMessage;
		newMessage['file'] = messageGot.file;
		newMessage['chat_name'] = messageGot.chat_name;


		if(this.props.chat_name === messageGot.chat_name)
		{	
			if(this.props.messagesProp.messageToChat[this.props.chat_name] === undefined){
				this.props.messagesProp.messageToChat[this.props.chat_name] = newMessage;
			}
			else{
				this.props.messagesProp.messageToChat[this.props.chat_name] = [...this.props.messagesProp.messageToChat[this.props.chat_name],
																				newMessage]
			}
			console.log(this.props.messagesProp.messageToChat)
		}
	}
	handleEmojiMessage() {
		let emojiCodeList = []
		for (let i = 0; i <emojiList.length; i ++) {
			if(this.props.message.text.includes(`${emojiList[i]}`)){
				emojiCodeList.push(emojiList[i])
			}	
		}
		return emojiCodeList
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
  		console.log('in messageGot '+ messageGot.emojiCode)
  			return (
  				<div className="MessageList">
  				{
  					this.props.messagesProp.messageToChat[this.props.chat_name].map(
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

export default connect(mapStatetoProps)(MessageList);
