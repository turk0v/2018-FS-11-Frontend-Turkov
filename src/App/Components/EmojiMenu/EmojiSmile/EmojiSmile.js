import React, { Component } from 'react';
import './styles.css'

export var emojiList = ['em em-fist','em em-film_projector','em em-female-student','em em-female_fairy','em em-face_vomiting','em em-face_with_head_bandage',
						'em em-face_with_rolling_eyes','em em-fearful','em-laughing','em em-leopard','em em-lemon'];

class EmojiSmile extends Component {

	createEmoji() {
		let htmlList = []
		for (let i = 0;i <emojiList.length; i++) {
			let result = `${emojiList[i]}`
			let strEmoji = <i className={result}></i>
			htmlList.push(strEmoji)
		}
		return htmlList
	}


	render() {
		return (
			<div onMouseDown = {this.props.handleEmojiClick}>
			{this.createEmoji()}
			</div>
		);
	}
}

export default EmojiSmile