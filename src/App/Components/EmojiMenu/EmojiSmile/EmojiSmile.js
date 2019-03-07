import React, { Component } from 'react';
import './styles.css'

export var emojiList = ['em-fist','em-film_projector','em-female-student','em-female_fairy','em-face_vomiting','em-face_with_head_bandage',
						'em-face_with_rolling_eyes','em-fearful','em-laughing','em-leopard','em-lemon'];

class EmojiSmile extends Component {

	createEmoji() {
		let htmlList = []
		for (let i = 0;i <emojiList.length; i++) {
			let result = `em ${emojiList[i]}`
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