import React, { Component } from 'react';
import './shadow.css';
import Message from './Message/Message.js'
import {connect} from 'react-redux'


class MessageList extends Component {
	constructor() {
		super();
		this.state = [
			{
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
  		console.log(this.props.messages);
  			return (
  				<div className="MessageList">
  				{
  					this.props.messages.map (
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
 		messages: state.messageList.messages,
 	}
 };

 // const mapDispachtoProps = (dispach) => {
 // 	return {
 // 		addMessage: () => dispach({
 // 			type: 'ADD_MESSAGE',
 // 			message : {
 // 				text: "hello, m",
	// 			time: new Date().toLocaleTimeString(),
	// 			spanText : 'v',
	// 			yourMessage : false,
 // 			}
 // 		})
 // 	}
 // }

export default connect(mapStatetoProps)(MessageList);
