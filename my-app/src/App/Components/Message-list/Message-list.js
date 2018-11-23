import React, { Component } from 'react';
import './shadow.css';
import Message from './Message/Message.js'


export default class MessageList extends Component {
	constructor() {
		super();
		this.state = [
			{
				// idOfMessage : 1,
				text: "hello, man",
				time: new Date().toLocaleTimeString(),
				spanText : 'v',
				yourMessage : false,
			},
			
		]
		this.addNewMessage.bind(this);
	}

	addNewMessage(messageGot) {
		var newMessage = {};
		newMessage['text'] = messageGot.text;
		newMessage['time'] = messageGot.time;
		newMessage['spanText'] = messageGot.spanText;
		newMessage['yourMessage'] = messageGot.yourMessage;
		newMessage['file'] = messageGot.file;
		this.state.push(newMessage);
	}

  	render() {
  		let messageGot = { 
  			text : this.props.message.text,
  			time : this.props.message.time,
  			spanText : this.props.message.spanText,
  			yourMessage : this.props.message.yourMessage,
  			file : this.props.message.file,
  		}
  		this.addNewMessage(messageGot)
  			return (
  				<div className="MessageList">
  				{
  					this.state.map (
  					(value) =>		
						<Message 
						text = {value.text}
						time = {value.time}
						file = {value.file}
						spanText = {value.spanText}/>
					)
				}
				</div>
  				)
}
  			
  }
