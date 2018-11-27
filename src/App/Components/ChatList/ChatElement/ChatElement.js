import {Link} from 'react-router-dom';
import React, { Component } from 'react';
import './styles.css'
import Aux from './../../../../hoc/Aux/Aux.js'

export default class ChatElement extends Component {
	constructor(props) {
		super(props);
		this.id = props.id
		this.name =props.name
	}
	render() {
		return (
			<Aux>
				<Link className='DialogueElem' to={`/chats/${this.id}`}>
					{this.name}
				</Link>
			</Aux>
		);
	}
}
