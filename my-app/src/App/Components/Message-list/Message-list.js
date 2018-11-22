  // possiible bug
import React, { Component } from 'react';
import './shadow.css';
import Message from './Message/Message.js'

const fakeMessage = [
	{
		text: "hello,",
		time: new Date().toLocaleTimeString(),
		spanText : 'Delivered',
	},
];

export default class MessageList extends Component {
	constructor() {
		super();
		this.state = {
			// messages: fakeMessage[0],
			text: "hello, man",
			time: new Date().toLocaleTimeString(),
			spanText : 'Delivered',
		}
	}

  	render() {
  		// this.props.message.push ({
  		// 	text:this.props.message.text,
  		// 	time:this.props.message.time,
  		// 	file:this.props.message.file,
  		// 	spanText:this.props.message.spanText,
  		// });
  		return (
  			<div className="MessageList">
  					<Message 
  					// key = {this.state.}
  					text = {this.state.text}
  					time = {this.state.time}
  					file = {this.state.file}
  					spanText = {this.state.spanText}/>
  			</div>
  				// this.state.messages.map(
  				// 	(value,index) =>
  				// 		<Message 
  				// 		key = {this.index}
  				// 		text = {this.value.text}
  				// 		time = {this.value.time}
  				// 		file = {this.value.file}
  				// 		spanText = {this.value.spanText}/>
  				// 	)
  		);
  	}
  }