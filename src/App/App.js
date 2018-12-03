import React, { Component } from 'react';
import ChatWindow from './Components/ChatWindow/ChatWindow.js'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import ChatList from './Components/ChatList/ChatList.js'
import Aux from '../hoc/Aux/Aux.js'
import Auth from './Components/Auth/Auth.js'
import {connect} from 'react-redux'




class App extends Component {
	Index = () => <h2>Home</h2>;
	render() {
		return (
			<Router>
				<Aux>
					<Route path="/" exact component={() => <Auth/>} />
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
				</Aux>
			</Router>
		);
	}
}

const mapStatetoProps = (state) => {
	return {
		chat: state.chatsList
	}
};
export default connect(mapStatetoProps) (App);
