import React from 'react'
import LoginContainer from './login/LoginContainer'
import SignupContainer from './signup/SignupContainer'
import * as AppPropTypes from '../../../lib/propTypes'

const propTypes = {
  domainData: AppPropTypes.domainData.isRequired
}

const Auth = (props) =>
  <div>
    <h1>Login</h1>
    <LoginContainer domainData={props.domainData} />
    <h2>Or...</h2><h1>Signup!</h1>
    <SignupContainer domainData={props.domainData} />
  </div>

Auth.propTypes = propTypes

export default Auth
