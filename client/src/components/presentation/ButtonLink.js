import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

const propTypes = {
  children: PropTypes.node.isRequired,
  isPrimary: PropTypes.bool.isRequired,
  to: PropTypes.string.isRequired
}

const defaultProps = {
  isPrimary: false
}

const styles = {
  link: {
    border: '1px solid blue',
    borderRadius: '5px',
    padding: '5px',
    fontSize: '14px',
    textDecoration: 'none'
  },
  primaryLink: {
    backgroundColor: 'blue',
    color: 'white'
  },
  secondaryLink: {
    backgroundColor: 'white',
    color: 'blue'
  }

}

const ButtonLink = (props) => {
  const mergeStyles = Object.assign({}, styles.link, props.isPrimary ? styles.primaryLink : styles.secondaryLink)
  return (
    <div>
      <Link to={props.to} style={mergeStyles}>{props.children}</Link>
    </div>
  )
}

ButtonLink.defaultProps = defaultProps
ButtonLink.propTypes = propTypes

export default ButtonLink
