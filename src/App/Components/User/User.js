import React from 'react'
import PropTypes from 'prop-types'
import './style.css'
import {BrowserRouter as Redirect} from 'react-router-dom';
import {connect} from 'react-redux'


export class User extends React.Component {
  renderTemplate = () => {
    const { name, error} = this.props
    console.log(this.props)
    if (error) {
      return <p>Во время запроса произошла ошибка, обновите страницу</p>
    }

    if (name) {
      return ( 
        <Redirect to='/chats'></Redirect>
      )
    } else {
      return (
        <button className="Button" onClick={this.props.handleLogin}>
          Войти через ВК
        </button>
      )
    }
  }
  render() {
    return <div >{this.renderTemplate()}</div>
  }
}
const mapStatetoProps = (state) => {
  return {
    chat: state.chatsList,
    user: state.user,
    name: state.user.name
  }
};
export default connect(mapStatetoProps) (User);


User.propTypes = {
  name: PropTypes.string.isRequired,
  error: PropTypes.string,
  handleLogin: PropTypes.func.isRequired,
}