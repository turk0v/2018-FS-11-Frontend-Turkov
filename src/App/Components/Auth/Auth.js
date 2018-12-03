import React, { Component } from 'react';
import Input from './../Input/Input.js'

class Auth extends Component {
	state = {
	   loginForm: {
	     login: {
	       label: 'Введите логин',
	       elementType: 'input',
	       elementConfig: {
	         type: 'text',
	         placeholder: 'Логин'
	       },
	       value: '',
	       valid: false,
	       touched: false,
	       validation: {
	         isRequired: true,
	         minLength: 6,
	       }
	     },
	     password: {
	       elementType: 'input',
	       value: '',
	       label: 'Введите пароль',
	       elementConfig: {
	         type: 'password',
	         placeholder: 'Пароль'
	       },
	       touched: false,
	       valid: false,
	       validation: {
	         isRequired: true,
	       }
	     }
	   },
	   valid: false,
	 };
	render() {
		return (
			<div>Hi</div>
		);
	}
}

export default Auth;