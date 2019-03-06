import React, { Component } from 'react';
import './styles.css'

class EmojiSmile extends Component {
	render() {
		return (
			<div onMouseDown = {this.props.handleEmojiClick}>
			<i className="em em-fist"></i>
			<i className="em em-film_projector"></i>
			<i className="em em-female-student"></i>
			<i className="em em-first_quarter_moon"></i>
			<i className="em em-female_fairy"></i>
			<i className="em em-face_vomiting"></i>
			<i className="em em-face_with_head_bandage"></i>
			<i className="em em-face_with_rolling_eyes"></i>
			<i className="em em-fearful"></i>
			<i className="em em-laughing"></i>
			<i className="em em-leopard"></i>
			<i className="em em-lemon"></i>
			</div>
		);
	}
}

export default EmojiSmile