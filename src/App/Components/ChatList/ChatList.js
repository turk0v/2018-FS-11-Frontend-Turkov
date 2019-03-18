import React, { Component } from 'react';
import ChatElement from './ChatElement/ChatElement'
import Aux from './../../../hoc/Aux/Aux.js'
import {connect} from 'react-redux'
import {onLoadChatNames} from './../../../store/actions/chatsList.js'
import sharedWorkerIn from './../../worker/sharedWorkerIn.js'

class ChatList extends Component {
	componentWillMount () {
		if (this.props.chat.needToUpdate) {
			this.props.onLoadChatNames();
		}
		// sharedWorkerIn().then((worker) => {
  //            worker.port.addEventListener('message', this.getChatsFromWorker.bind(this));
  //            worker.port.start();
  //            worker.port.postMessage({type: 'getChats'});
  //        });
	}
	// getChatsFromWorker(event) {
	//      if(event.data.type === 'chats') {
	//          this.props.dispatch(chatsActions.chatsSet(event.data.data))
	//      }
	//  }		   

	render() {
		return (
			<Aux>
				{	
					this.props.chat.chatsValues.map (
						(value,index) =>
						<ChatElement
						name={value.name}
						id = {index}
						key = {index}
						ava = {this.props.ava.photo}
						unread={value.unread}
						/>)
				}
			</Aux>
		);
	}
}

const mapStatetoProps = (state) => {
	return {
		chat: state.chatsList,
		user: state.user,
		ava: state.ava,
	}
};
const mapDispatchToProps = dispatch => {
  return {
    onLoadChatNames: () => dispatch(onLoadChatNames()),
  }
};

export default connect(mapStatetoProps,mapDispatchToProps) (ChatList);