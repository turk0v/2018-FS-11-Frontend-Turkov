import React from 'react'
import PropTypes from 'prop-types'
import './style.css'

export class User extends React.Component {
  renderTemplate = () => {
    const { name, error} = this.props
    if (error) {
      return <p>Во время запроса произошла ошибка, обновите страницу</p>
    }

    if (name) {
      return ( 
        null
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

User.propTypes = {
  name: PropTypes.string.isRequired,
  error: PropTypes.string,
  handleLogin: PropTypes.func.isRequired,
}