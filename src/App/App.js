import React, { Component } from 'react';
import ChatWindow from './Components/ChatWindow/ChatWindow.js'
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import ChatList from './Components/ChatList/ChatList.js'
import Aux from '../hoc/Aux/Aux.js'
import Auth from './Components/Auth/Auth.js'
import {connect} from 'react-redux'




class App extends Component {
	render() {
		var tmpVal = false;
		if (this.props.user.name) {
			var tmpName = this.props.user.name;
			var tmpVal = true;
		}
		let route =(
		<div>
			{console.log('in first div, tmpVal ='+tmpVal)}
			<Route path="/" exact component={() => <Auth/>} />
			<Redirect to='/'></Redirect>
		</div>
		)
		if(tmpName) {
			route = (
			<Switch>
				{console.log(tmpName)}
				<Route path="/chats" exact component={() => <ChatList/>} />
				{
					this.props.chat.chatsValues.map(
					  ((value,index) =>
					  <Route
					    key={index}
					    path={`/chats/${index}`}
					    component={() => <ChatWindow id={index} name={value.chatName} ava={value.avatar}/>}
					  />
					  )
					)
				}
				<Redirect to='/chats'></Redirect>
			</Switch>
			)
		}
		return (
			<Router>
				<Aux>
				{route}
				</Aux>
			</Router>
		);
	}
}

const mapStatetoProps = (state) => {
	return {
		chat: state.chatsList,
		user: state.user,
	}
};
export default connect(mapStatetoProps) (App);
