import React, { Component } from 'react';
import Aux from './../../../hoc/Aux/Aux.js'
import MessageList from '../Message-list/Message-list.js'
import MessageForm from './../Message-form/Message-form.js'

export default class ChatWindow extends Component {
	constructor() {
		super();
		this.handleMessage = this.handleMessage.bind(this);
		this.state = {
			message: {
				text : 'hi,boi',
				time : new Date().toLocaleTimeString(),
				spanText : 'v',
				yourMessage : false,
			},
		}
	}
	handleMessage(handlingMessage) {
		var newMessage = {
			text: handlingMessage.text,
			time: new Date().toLocaleTimeString(),
			spanText: '>...',
			yourMessage : true,
			file: handlingMessage.file,
		}

		fetch('http://localhost:8081/message',
	      {
	        method: 'POST',
	        body: newMessage
	      }).then(
	      (event) => {
	        if (event.status === 200) {
	          newMessage.spanText = 'v';
	          this.setState({message: newMessage});
	        }
	      },
	      (event) => {
	        newMessage.spanText = 'x';
	        this.setState({message: newMessage});
	      }
	    );

	}
	render() {
		console.log(this.state);
		return (
			<Aux>
				<MessageList message={this.state.message}/>
				<MessageForm  dispatcher={this.handleMessage.bind(this)}/>
			</Aux>
		);
	}
}
