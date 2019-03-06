import React, { Component } from 'react';
import './styles.css'

class EmojiSmile extends Component {
	render() {
		return (
			<div onMouseDown = {this.props.handleEmojiClick}>
			<i class="em em-fist"></i>
			<i class="em em-film_projector"></i>
			<i class="em em-female-student"></i>
			<i class="em em-first_quarter_moon"></i>
			<i class="em em-female_fairy"></i>
			<i class="em em-face_vomiting"></i>
			<i class="em em-face_with_head_bandage"></i>
			<i class="em em-face_with_rolling_eyes"></i>
			<i class="em em-fearful"></i>
			<i class="em em-laughing"></i>
			<i class="em em-leopard"></i>
			<i class="em em-lemon"></i>

			</div>
		);
	}
}

export default EmojiSmile