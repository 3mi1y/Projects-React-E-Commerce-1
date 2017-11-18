import React from 'react'
import PropTypes from 'prop-types'
import {NavLink} from 'react-router-dom'
import injectSheet from 'react-jss'

const propTypes = {
  path: PropTypes.string.isRequired,
  exact: PropTypes.bool.isRequired,
  children: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired
}

const defaultProps = {
  exact: false
}

const styles = {
  linksContainerItem: {
    width: 'calc(25% - 50px)',
    textAlign: 'center',
    fontSize: '1.2em',
    color: 'rgb(52, 49, 53)',
    display: 'inline-block',
    position: 'relative',
    paddingBottom: '3px',
    textDecoration: 'none',
    '& a': {
      color: 'black',
      textAlign: 'center',
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'none'
      }
    },
    '&:after': {
      content: '',
      display: 'block',
      margin: 'auto',
      height: '3px',
      width: '5px',
      background: 'transparent',
      transition: 'width .5s ease, background-color .5s ease',
      color: '#333'
    },
    '&:hover, &:after': {
      width: 'calc(25% - 50px)'
      //backgroundColor: '#333'
    }
  }
}

const enhancer = injectSheet(styles)

const NavItem = (props) =>
  <div className={props.classes.linksContainerItem}>
    <NavLink
      to={props.path}
      exact={props.exact}
    >
      {props.children}
    </NavLink>
  </div>

NavItem.propTypes = propTypes

NavItem.defaultProps = defaultProps

export default enhancer(NavItem)
