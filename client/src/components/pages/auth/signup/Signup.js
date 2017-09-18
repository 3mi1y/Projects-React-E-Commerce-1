import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  onFirstNameChanged: PropTypes.func.isRequired,
  onLastNameChanged: PropTypes.func.isRequired,
  onEmailChanged: PropTypes.func.isRequired,
  onPasswordChanged: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}

const Signup = (props) =>
  <form onSubmit={props.onSubmit} >
    <label>First Name</label>
    <input type='text' value={props.firstName} onChange={props.onFirstNameChanged} />

    <label>Last Name</label>
    <input type='text' value={props.lastName} onChange={props.onLastNameChanged} />

    <label>Email</label>
    <input type='text' value={props.email} onChange={props.onEmailChanged} />

    <label>Password</label>
    <input type='password' value={props.password} onChange={props.onPasswordChanged} />

    <input type='submit' />
  </form>

Signup.propTypes = propTypes

export default Signup
