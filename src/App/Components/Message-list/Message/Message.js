import './shadow.css'
import React, { Component } from 'react';
import sentLabel from './../../../public/sent2.png'
import crossLabel from './../../../public/cross.png'
import {emojiList} from './../../EmojiMenu/EmojiSmile/EmojiSmile.js'


export default class Message extends Component {
	constructor(props) {
		if(props === undefined || props === '') {
			super(props);
			this.hidden = true
		}
		super(props);
		this.text = props.text;
		this.time = props.time;
		this.file = props.file;
		this.spanText = props.spanText;
		this.yourMessage = props.yourMessage;
	}

	attachment(sendObject) {
		if (sendObject === undefined) {
		  return <span></span>;
		}
		if (sendObject.type.startsWith('image')){
			let imageUrl = URL.createObjectURL(sendObject);
			return <img alt="attachment" className="AttachedImage" src={imageUrl}/>
		}
		else {
			let undefUrl = URL.createObjectURL(sendObject);
			return <a href={undefUrl}>Click to download attachment </a>
		}
	}

	spanTextCheck() {
		if (this.props.spanText === 'v'){
			return <img src={sentLabel} className="StatusLabel" alt='yesSent'/>;
		}
		else {
			return <img src={crossLabel} className="StatusLabelNo" alt='noSent'/>;
		}
	}


	parseEmoji() {
		let arrayText = this.text.split('em ')
		return arrayText
	}
	
	render() 
	{	
		const messageParsed = this.parseEmoji().map(element => {
			for(let j = 0 ; j < emojiList.length;j++) {
				if (element === emojiList[j]) {
					let atrib = `em ${element}`
					return <i className={atrib}></i>
					continue;
				}
			}
			return <p>{element}</p>
		})
		return (
			<div className={(!this.yourMessage) ? "LeftMessageAttributes Message" : "Message"}>
			{this.attachment(this.file)}
			{messageParsed}
			<time className="TimeLabel">{this.time}</time>
			{this.spanTextCheck()}
			</div>
		);
	}
}

