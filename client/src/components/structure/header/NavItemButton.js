import React from 'react'
import PropTypes from 'prop-types'
import {withRouter} from 'react-router-dom'

const propTypes = {
  history: PropTypes.object.isRequired,
  path: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired
}

const NavItemButton = (props) =>
  <button onClick={() => props.history.push(props.path)}>{props.children}</button>

NavItemButton.propTypes = propTypes

export default withRouter(NavItemButton)
