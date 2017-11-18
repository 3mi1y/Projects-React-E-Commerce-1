import React from 'react'
import PropTypes from 'prop-types'
import FontAwesome from 'react-fontawesome'
import injectSheet from 'react-jss'

const propTypes = {
  classes: PropTypes.object.isRequired
}

const styles = {
  shoppingBag: {
    width: '25%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    textAlign: 'center',
    paddingTop: '2.5%',
    paddingLeft: '5%',
    fontSize: '.7em',
    '& a': {
      color: 'rgb(255, 153, 168)',
      '&:hover': {
        textDecoration: 'none',
        color: 'black'
      }
    },
    '& p': {
      color: 'black',
      padding: '0%',
      margin: '0%',
      fontSize: '10px'
    }
  },
  shoppingBagItem: {
    padding: '0px',
    margin: '0px'
  },
  shoppingBagIcon: {
    fontFamily: 'FontAwesome',
    color: 'black',
    fontSize: '20px',
    '&:hover': {
      color: '#cecece'
    }
  }
}

const enhancer = injectSheet(styles)

const ShoppingCart = ({classes}) =>
  <div className={classes.shoppingBag}>
    <div className={classes.shoppingBagIcon}>
      <FontAwesome name='shopping-bag' />
    </div>
    <p>Total Items: </p>
    <p>Price: </p>
  </div>

ShoppingCart.propTypes = propTypes

export default enhancer(ShoppingCart)
