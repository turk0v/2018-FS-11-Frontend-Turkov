import {Link} from 'react-router-dom';
import React, { Component } from 'react';
import './styles.css'
import Aux from './../../../../hoc/Aux/Aux.js'

export default class ChatElement extends Component {
	constructor(props) {
		super(props);
		this.id = props.id
		this.name =props.name
		this.avatar = props.ava
	}
	render() {
		return (
			<Aux>
				<Link className='DialogueElem' to={`/chats/${this.id}`}>
				<div>
					<img src={this.avatar} className = 'chatPhoto' alt='user_avatar'/>
					{this.name}
				</div>
				</Link>
			</Aux>
		);
	}
}
