import './shadow.css'
import React, { Component } from 'react';

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
		  if(event.key == 'Enter'){
		    event.preventDefault();
		    this.props.dispatcher({text:this.state.text, file:undefined});
		    this.setState({text:''});
		  }
		}

		updateData(event) {
			this.setState({text:event.target.value})
		}

		render() {
			return (
				<div className="MessageForm" onSubmit = {this.dispachEv.bind(this)} onKeyPress={this.handleKeyPress}>
					<div>
						<input className="InputForm" value = {this.state.text} 
								onChange={this.updateData.bind(this)}
								placeholder='Start typing...'/>
					</div>
					<input onClick={this.dispachEv.bind(this)}
							type='submit'
							className='SendButton' value='Send'/>
				</div>
				)
		}
}

