import shadowStyles from './shadow.css'
import React, { Component } from 'react';


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


	
	render() {
		return (
			<div className="Message">
			{this.attachment(this.file)}
			<p>{this.text}</p>
			<time className="TimeLabel">{this.time}</time>
			<span className="StatusLabel">{this.spanText}</span>
			</div>
		);
	}
}

