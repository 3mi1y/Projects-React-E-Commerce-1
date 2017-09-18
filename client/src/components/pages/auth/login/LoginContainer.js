import React from 'react'
import Login from './Login'
import * as AppPropTypes from '../../../../lib/propTypes'
import PropTypes from 'prop-types'
import {withRouter} from 'react-router-dom'

class LoginContainer extends React.Component {
  static propTypes = {
    domainData: AppPropTypes.domainData,
    history: PropTypes.object.isRequired
  }

  state = {
    email: '',
    password: ''
  }

  onEmailChanged = (e) => this.setState({ email: e.target.value })
  onPasswordChanged = (e) => this.setState({ password: e.target.value })
  onSubmit = (e) => {
    e.preventDefault()
    console.log('State in container', this.state)
    this.props.domainData.login(this.state)
      .then(() => this.props.history.push('/auth'))
  }

  render () {
    return (
      <div>
        <Login
          onEmailChanged={this.onEmailChanged}
          onPasswordChanged={this.onPasswordChanged}
          username={this.state.username}
          password={this.state.password}
          onSubmit={this.onSubmit}
        />
      </div>
    )
  }
}

export default withRouter(LoginContainer)
