import React, { Component } from 'react';
import ChatWindow from './Components/ChatWindow/ChatWindow.js'
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import ChatList from './Components/ChatList/ChatList.js'
import Aux from '../hoc/Aux/Aux.js'
import Auth from './Components/Auth/Auth.js'
import {connect} from 'react-redux'




class App extends Component {
		render() {
			var tmpName = false;
			if (this.props.user.name) {
				tmpName = this.props.user.name;
			}
			let route =(
			<div>
				<Route exact path="/" component={() => <Auth/>} />
				<Redirect to='/'></Redirect>
			</div>
			)
			if(tmpName) {
				route = (
				<Switch>
					<Route exact path="/chats" component={() => <ChatList/>} />
					{
						this.props.chat.chatsValues.map(
						  ((value,index) =>
						  <Route
						    key={index}
						    path={`/chats/${index}`}
						    component={() => <ChatWindow id={index} name={value.name}/>}
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
		name: state.user.name
	}
};
export default connect(mapStatetoProps) (App);
