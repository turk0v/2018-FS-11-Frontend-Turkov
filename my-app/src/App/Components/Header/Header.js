import React, { Component } from 'react';
import shadowStyles from './shadow.css'
import backArrow from '../../public/back_arrow.png'
import userAvatar from '../../public/avatar.png'
import menuButton from '../../public/menu.png'
import searchButton from '../../public/search.png'

export default class Header extends Component {
	render() {
		return (
			<div className = "header-user">
			<style>${shadowStyles.toString()}</style>
			<img src={backArrow} id="back_img"></img>
			<img src={userAvatar} id="user_avatar"></img>
				<div class="senderInfo">
	        		<div class="name">Jeniffer</div>
	        		<div class="last_seen">was online just now</div>
	    		</div>
	    	<img src={menuButton} alt="Menu" id="menu_button"></img>
	    	<img src={searchButton} alt="Search" id="search_button"></img>
			</div>
		);
	}
}
