import React, { Component } from 'react';
import './styles.css'

class EmojiMenu extends Component {

	render() {
		var visibility = "hide";
		if (this.props.menuVisibility) {
			visibility = "show";
			console.log('Its visible')
		}


		return (
			<div id="flyoutMenu"
			           onMouseDown={this.props.handleMouseDown} 
			           className={visibility}></div>
		);
	}
}

export default EmojiMenu;