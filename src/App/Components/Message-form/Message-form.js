import './shadow.css'
import React, { Component } from 'react';
import pinButton from '../../public/pin.png'

export default class MessageForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
		            text: '',
		            file: undefined
		        };
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
						<input className="InputForm" value = {this.state.text} 
								onChange={this.updateData.bind(this)}
								placeholder='Start typing...'/>
					</div>
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

