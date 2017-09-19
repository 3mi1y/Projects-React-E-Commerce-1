import React from 'react'
import NavItem from './NavItem'
import FontAwesome from 'react-fontawesome'
import injectSheet from 'react-jss'
import PropTypes from 'prop-types'

const propTypes = {
  classes: PropTypes.object.isRequired
}

const styles = {
  navContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontFamily: 'Slabo',
    letterSpacing: '2px',
    height: '150px',
    width: '100%',
    backgroundColor: '#ffffff',
    paddingBottom: '0px',
    marginBottom: '0px',
    borderBottom: '2px solid rgb(255, 153, 168)'
  },
  linksContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    fontSize: '.7em',
    paddingLeft: '15px',
    paddingRight: '15px',
    paddingBottom: '20px'
  },
  topNav: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingBottom: '3%'
  },
  searchBar: {
    width: '25%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& p': {
      fontSize: '10px'
    },
    '& input[type="text"]': {
      fontFamily: 'FontAwesome',
      fontSize: '10px',
      color: 'rgb(54, 51, 51)',
      backgroundColor: 'rgb(245, 245, 245)',
      border: 'none',
      padding: '5px',
      marginLeft: '35px',
      width: '200px'
    }
  },
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
    color: 'pink',
    fontSize: '20px',
    '&:hover': {
      color: '#cecece'
    }
  },
  title: {
    letterSpacing: '10px',
    fontFamily: 'Slabo',
    fontSize: '1.2em',
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '5%',
    justifyContent: 'center'
  }
}

const enhancer = injectSheet(styles)

const Header = ({classes}) => {
  return (
    <header>
      <nav className={classes.navContainer}>

        <div className={classes.topNav}>

          <div className={classes.searchBar}>
            <p>Looking for something...</p>
            <input type='text' placeholder='&#xf002; Search' />
          </div>

          <div className={classes.title}>
            Project Cashmere
          </div>

          <div className={classes.shoppingBag}>
            <div className={classes.shoppingBagIcon}>
              <FontAwesome name='shopping-bag' />
            </div>
            <p>Total Items: </p>
            <p>Price: </p>
          </div>

        </div>

        <div className={classes.linksContainer}>
          <NavItem path='/' exact >Home</NavItem>
          <NavItem path='/about' >About</NavItem>
          <NavItem path='/products' >Products</NavItem>
        </div>

      </nav>
    </header>
  )
}

Header.propTypes = propTypes

export default enhancer(Header)
