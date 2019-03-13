import React, { Component } from 'react';
import './styles.css'

export var emojiList = ['em cat','em tiger','em monkey','em hand','em redhead','em woman','em police',
						'em baby','em spok','em tear','em crying','em shoked','em nomouth','em ill'];

class EmojiSmile extends Component {

	createEmoji() {
		let htmlList = []
		for (let i = 0;i <emojiList.length; i++) {
			let result = `${emojiList[i]}`
			let strEmoji = <img className={result} key={i}></img>
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