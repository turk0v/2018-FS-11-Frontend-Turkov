import React, { Component } from 'react';
import './styles.css'
import EmojiSmile from './EmojiSmile/EmojiSmile.js'

class EmojiMenu extends Component {

	render() {
		var visibility = "hide";
		if (this.props.menuVisibility) {
			visibility = "show";
		}


		return (
			<div id="flyoutMenu"
			           onMouseDown={this.props.handleMouseDown} 
			           className={visibility}>
			           <EmojiSmile className='emoji' handleEmojiClick = {this.props.handleEmojiClick}/>
			           </div>
		);
	}
}

export default EmojiMenu;