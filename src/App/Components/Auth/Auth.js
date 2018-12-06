import React from 'react'
import { connect } from 'react-redux'
import { User } from './../User/User.js'
import { handleLogin } from './../../../store/actions/UserActions.js'

class Auth extends React.Component {
  handleLogin = () => {
    const { handleLogin} = this.props
    const successCallback = true
    handleLogin(successCallback)
  }

  render() {
    const { user } = this.props
    return (
      <User
        name={user.name}
        error={user.error}
        handleLogin={this.handleLogin}
      />
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