import './shadow.css'
import React, { Component } from 'react';
import sentLabel from './../../../public/sent2.png'
import crossLabel from './../../../public/cross.png'


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
		if (this.props.spanText == 'v'){
			return <img src={sentLabel} className="StatusLabel"/>;
		}
		else {
			return <img src={crossLabel} className="StatusLabelNo"/>;
		}
	}


	
	render() 
	{	
		return (
			<div className={(!this.yourMessage) ? "LeftMessageAttributes Message" : "Message"}>
			{this.attachment(this.file)}
			<p>{this.text}</p>
			<time className="TimeLabel">{this.time}</time>
			{this.spanTextCheck()}
			</div>
		);
	}
}

