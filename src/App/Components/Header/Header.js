import React, { Component } from 'react';
import shadowStyles from './shadow.css'
import backArrow from '../../public/back_arrow.png'
import menuButton from '../../public/menu.png'
import searchButton from '../../public/search.png'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
// javascript: history.go(-1)
class Header extends Component {
	render() {
		return (
			<div className = "header-user">
			<style>${shadowStyles.toString()}</style>
			<Link to="/chats"><button className='back'><img src={backArrow} id="back_img"  alt="back_img"/></button></Link>
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
const mapStatetoProps = (state) => {
	return {
		user: state.user,
	}
};

export default connect(mapStatetoProps) (Header);