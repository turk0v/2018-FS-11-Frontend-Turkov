import React, { Component } from 'react';
import shadowStyles from './shadow.css'
import backArrow from '../../public/back_arrow.png'
import menuButton from '../../public/menu.png'
import searchButton from '../../public/search.png'

export default class Header extends Component {
	render() {
		return (
			<div className = "header-user">
			<style>${shadowStyles.toString()}</style>
			<img src={backArrow} id="back_img"  alt="back_img"></img>
			<img src={this.props.ava} id="user_avatar" alt="user_avatar"></img>
				<div className="senderInfo">
	        		<div className="name">{this.props.name}</div>
	        		<div className="last_seen">was online just now</div>
	    		</div>
	    	<img src={menuButton} alt="Menu" id="menu_button"></img>
	    	<img src={searchButton} alt="Search" id="search_button"></img>
			</div>
		);
	}
}
