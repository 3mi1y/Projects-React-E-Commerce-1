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
    // color: 'rgb(52, 49, 53)',
    display: 'inline-block',
    position: 'relative',
    paddingBottom: '3px',
    textDecoration: 'none',
    border: '1px dotted red',
    '& a': {
      // display: 'inline-block',
      // position: 'relative',
      // paddingBottom: '3px',
      '&:after': {
        content: '',
        display: 'block',
        margin: 'auto',
        height: '3px',
        width: '0px',
        background: 'transparent',
        transition: [{
          property: 'width',
          duration: '.5s'
        }, {
          property: 'background-color',
          duration: '.5s'
        }]
      },
      '&:hover': {
        '&:after': {
          width: 'calc(25% - 50px)',
          background: 'blue'
        }
      }
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
