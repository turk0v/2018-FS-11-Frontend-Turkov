import React from 'react'
import { connect } from 'react-redux'
import { User } from './../User/User.js'
import { handleLogin } from './../../../store/actions/UserActions.js'
import {BrowserRouter as Switch, Redirect} from 'react-router-dom';

class Auth extends React.Component {
  handleLogin = () => {
    const { handleLogin} = this.props
    const successCallback = true
    handleLogin(successCallback)
  }

  render() {
    const { user } = this.props
    return (
      <Switch>
      <User
        name={user.name}
        error={user.error}
        handleLogin={this.handleLogin}
      />
      <Redirect to='/chats'></Redirect>
      </Switch>
    )
  }
}

const mapStateToProps = store => {
  return {
    user: store.user,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleLogin: successCallback => dispatch(handleLogin(successCallback)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth)