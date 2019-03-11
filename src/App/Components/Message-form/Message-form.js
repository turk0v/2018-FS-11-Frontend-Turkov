import './shadow.css'
import React, { Component } from 'react';
import pinButton from '../../public/pin.png'
import EmojiButton from './../Emoji-button/Emoji-button.js'
import EmojiMenu from './../EmojiMenu/EmojiMenu.js'

export default class MessageForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
		            text: '',
		            file: undefined,
		            visible: false,
		            emojiVis: true,
		            emojiClassName: [],
		        };
		this.handleMouseDown = this.handleMouseDown.bind(this);
		this.handleEmojiClick = this.handleEmojiClick.bind(this);
		this.toggleMenu = this.toggleMenu.bind(this);
		}
		dispachEv(event) {
			event.preventDefault();
			this.props.dispatcher({text:this.state.text, file:undefined});
			this.setState({text:''});
		}

		handleKeyPress = (event) => {
		  if(event.key === 'Enter'){
		    event.preventDefault();
		    this.props.dispatcher({text:this.state.text, file:undefined});
		    this.setState({text:''});
		  }
		}
		handleMouseDown(event) {
			this.toggleMenu()
		    event.stopPropagation();
		  }
		handleEmojiClick(e) {
			this.setState({
				text:this.state.text.concat(" !$%" + e.target.className+" !$%")
			})
			e.stopPropagation();
		}
		toggleMenu() {
		this.setState(
		  {
		    visible: !this.state.visible
		  }
		)

	}

		
		updateData(event) {
			this.setState({text:event.target.value})
		}

		fileMessage(event) {
			event.preventDefault();
			this.props.dispatcher({text: '', file: event.target.files[0]});
		}

		render() {
			return (
				<div className="MessageForm" onSubmit = {this.dispachEv.bind(this)} onKeyPress={this.handleKeyPress}>
				<div>
				  <input className="InputForm" value={this.state.text}
				    onChange={this.updateData.bind(this)}
				    placeholder='Start typing...' 
				    contentEditable={true}/>

				</div>
					<EmojiButton handleMouseDown={this.handleMouseDown}
					/>
					<EmojiMenu handleMouseDown={this.handleMouseDown}
								handleEmojiClick = {this.handleEmojiClick}
					          menuVisibility={this.state.visible}
					          />
					<div className="FormAndPinButton">
						<label htmlFor="attach_file">
							<img src = {pinButton} className='PinFileIcon ' alt="pinButton"/>
						</label>
						<input onChange={this.fileMessage.bind(this)} hidden={true} id="attach_file" type="file"/>
					</div>
					<input onClick={this.dispachEv.bind(this)}
							type='submit'
							className='SendButton' value='Send'/>
				</div>
				)
		}
}

