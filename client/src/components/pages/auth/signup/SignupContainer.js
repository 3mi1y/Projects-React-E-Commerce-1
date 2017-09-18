import React from 'react'
import Signup from './Signup'
import * as AppPropTypes from '../../../../lib/propTypes'
import PropTypes from 'prop-types'
import {withRouter} from 'react-router-dom'

class SignupContainer extends React.Component {
  static propTypes = {
    domainData: AppPropTypes.domainData,
    history: PropTypes.object.isRequired
  }

  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: ''
  }

  onEmailChanged = (e) => this.setState({ email: e.target.value })
  onFirstNameChanged = (e) => this.setState({ firstName: e.target.value })
  onLastNameChanged = (e) => this.setState({ lastName: e.target.value })
  onPasswordChanged = (e) => this.setState({ password: e.target.value })

  onSubmit = (e) => {
    e.preventDefault()
    this.props.domainData.signup(this.state)
      .then(() => this.props.history.push('/auth'))
  }

  render () {
    return (
      <div>
        <Signup
          email={this.state.email}
          password={this.state.password}
          firstName={this.state.firstName}
          lastName={this.state.lastName}
          onEmailChanged={this.onEmailChanged}
          onFirstNameChanged={this.onFirstNameChanged}
          onLastNameChanged={this.onLastNameChanged}
          onPasswordChanged={this.onPasswordChanged}
          onSubmit={this.onSubmit}
        />
      </div>
    )
  }
}

export default withRouter(SignupContainer)
