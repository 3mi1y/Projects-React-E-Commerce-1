import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  password: PropTypes.string.isRequired,
  onEmailChanged: PropTypes.func.isRequired,
  onPasswordChanged: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}

const Login = (props) =>
  <div>
    <form onSubmit={props.onSubmit}>
      <label>Email</label>
      <input type='text' placeholder='john_doe@gmail.com' onChange={props.onEmailChanged} />
      <label>Password</label>
      <input type='password' value={props.password} onChange={props.onPasswordChanged} />
      <input type='submit' />
    </form>
  </div>

Login.propTypes = propTypes

export default Login
