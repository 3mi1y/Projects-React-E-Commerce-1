import React from 'react'
import PropTypes from 'prop-types'
import {NavLink} from 'react-router-dom'

const propTypes = {
  path: PropTypes.string.isRequired,
  exact: PropTypes.bool.isRequired,
  children: PropTypes.string.isRequired
}

const defaultProps = {
  exact: false
}

const styles = {
  activeLink: {
    color: '#333',
    backgroundColor: '#cecece',
    borderRadius: '5px'
  },
  navBarItem: {
    padding: '5px',
    margin: '10px',
    textDecoration: 'none'
  },
  linksContainerItem: {
    width: 'calc(25% - 50px)',
    textAlign: 'center',
    fontSize: '1.2em',
    color: 'black',
    textDecoration: 'none',
    display: 'inline-block',
    position: 'relative',
    paddingBottom: '3px'
  }
}

const NavItem = (props) =>
  <NavLink
    to={props.path}
    exact={props.exact}
    activeStyle={styles.activeLink}
    style={styles.linksContainerItem}
  >
    {props.children}
  </NavLink>

NavItem.propTypes = propTypes

NavItem.defaultProps = defaultProps

export default NavItem
