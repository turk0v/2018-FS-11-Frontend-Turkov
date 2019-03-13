import './styles.css'
import React, { Component } from 'react';

class EmojiButton extends Component {
	render() {
		return (
			<button id="roundButton"
				onMouseDown={this.props.handleMouseDown}></button>
		);
	}
}
export default EmojiButton;