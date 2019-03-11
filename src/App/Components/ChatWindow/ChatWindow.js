import React, { Component } from 'react';
import Aux from './../../../hoc/Aux/Aux.js'
import MessageList from '../Message-list/Message-list.js'
import MessageForm from './../Message-form/Message-form.js'
import Header from './../Header/Header.js'
import {connect} from 'react-redux'

class ChatWindow extends Component {
	constructor(props) {
		super(props);
		// this.handleMessage = this.handleMessage.bind(this);
		this.state = {
			message: {
				text : 'Hi',
				time : new Date().toLocaleTimeString(),
				spanText : 'v',
				yourMessage : false,
				chat_name :this.props.name,
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
			chat_name: this.props.name,
			}

		fetch('http://localhost:8080/message',
	      {
	        method: 'POST',
	        body: newMessage
	      }).then(
	      (event) => {
	        if (event.status === 200) {
	        	if(newMessage.text !== ''){
	          		newMessage.spanText = 'v';
	          		this.setState({message: newMessage});
	          	}
	        }
	      },
	      (event) => {
	      		if(newMessage.text !== ''){
	      	  		newMessage.spanText = 'x';
	      	  		this.setState({message: newMessage});
	      	  	}
	      }
	    );

	}
	render() 
	{
		return (
			<Aux overflow = 'auto'>
				<Header name = {this.props.name} ava = {this.props.ava.photo} />
				<MessageList message={this.state.message} id ={this.props.id} chat_name={this.props.name} your ={this.state.message.yourMessage} />
				<MessageForm  dispatcher={this.handleMessage.bind(this)}/>
			</Aux>
		);
	}
}
const mapStatetoProps = (state) => {
	return {
		chat: state.chatsList,
		ava: state.ava
	}
};

export default connect(mapStatetoProps) (ChatWindow);
