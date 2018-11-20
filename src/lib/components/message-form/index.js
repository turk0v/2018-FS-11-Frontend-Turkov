import shadowStyles from './shadow.css';
import FormInput from '../form/-input';
import GeoInput from '../form/-geo-input';
import FileInput from '../form/-file-input';
import DragNDrop from '../form/drag-n-drop/';

const template = `
	<style>${shadowStyles.toString()}</style>
	<form>
		<form-input name="message_text" placeholder="Введите сообщение" slot="message-input">
			<div slot="before">
			</div>
			<div slot="after">
				<file-input></file-input>
				<button type="submit">Send</button>
			</div>
		</form-input>
		<geo-input name="message-pos"></geo-input>
	</form>
`;

const stateClasses = {
	withMessage: 'with-message'
};

class MessageForm extends HTMLElement {
	constructor () {
		super();
		const shadowRoot = this.attachShadow({mode: 'open'});
		shadowRoot.innerHTML = template;
		this._initElements();
		this._addHandlers();
	}

	_initElements () {
		var form = this.shadowRoot.querySelector('form');
		var message = this.shadowRoot.querySelector('form-input');
		var fileInput = this.shadowRoot.querySelector('file-input');
		this._elements = {
			form: form,
			message: message,
			file: fileInput
		};
	}

	_addHandlers () {
		this._elements.form.addEventListener('submit', this._onSubmit.bind(this));
		this._elements.message.addEventListener('input', this._onInput.bind(this));
		this._elements.form.addEventListener('keypress', this._onKeyPress.bind(this));
		this._elements.file.addEventListener('change', this._onFileChange.bind(this))
	}

	_onSubmit (event) {
		const message = {
			text: this._elements.message.value,
			time: new Date(),
			my: true
		};
		this._sendMessage(this._elements.message.value);
		this._elements.message.value = '';
		this._elements.form.classList.remove(stateClasses.withMessage);
		const messageEvent = new CustomEvent('new-message', {
			bubbles: false,
			detail: message
		});
		this.dispatchEvent(messageEvent);
		event.preventDefault();
	}

	_onKeyPress (event) {
		if (event.keyCode == 13) {
			this._elements.form.dispatchEvent(new Event('submit'));
		}
	}

	_onInput () {
		if (this._elements.message.value.length > 0) {
			this._elements.form.classList.add(stateClasses.withMessage);
		} else {
			this._elements.form.classList.remove(stateClasses.withMessage);
		}
	}

	_onFileChange (event) {
		const message = {
			text: null,
			time: new Date(),
			my: true,
			files: event.target.files
		};
		this._sendFile(message.files);
		// console.log(message.files);
		const messageEvent = new CustomEvent('new-message', {
			bubbles: false,
			detail: message
		});
		this.dispatchEvent(messageEvent);
	}
	_sendMessage (text) {
		var formData = new FormData();
		formData.append('user','ReadyPlayerOne');
		formData.append('message', text);
		formData.append('time',new Date());
		for (var pair of formData.entries()) {
		    console.log(pair[0]+ ', ' + pair[1]); 
		}
        fetch('http://localhost:8081/message', {
            method: 'POST',
            body: formData,
        }).then(
            response => response.json()
        ).then(success => console.log(success)
        ).catch(error => console.log('error'));
   
	}

	_sendFile (file) {
		var formData = new FormData();
		formData.append('user','ReadyPlayerOne');
		formData.append('attachment', file);
		formData.append('time',new Date());
		for (var pair of formData.entries()) {
		    console.log(pair[0]+ ', ' + pair[1]); 
		}
        fetch('http://localhost:8081/message', {
            method: 'POST',
            body: formData,
        }).then(
            response => response.json()
        ).then(success => console.log(success)
        ).catch(error => console.log('error'));
   
	}
}

customElements.define('message-form', MessageForm);

export default MessageForm;