import React from 'react'
import NavItem from './NavItem'
import FontAwesome from 'react-fontawesome'
import injectSheet from 'react-jss'

const styles = {
  navContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontFamily: 'Slabo',
    letterSpacing: '2px',
    height: '200px',
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
    paddingBottom: '10px'
  },
  topElements: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between'
  },
  searchBar: {

  },
  shoppingCart: {
    width: '25%',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    paddingTop: '2.5%',
    paddingLeft: '5%',
    fontSize: '.7em'
  },
  shoppingBagIcon: {
    color: 'pink',
    '&:hover': {
      color: '#cecece'
    }
  }
}

const enhancer = injectSheet(styles)

const Header = ({classes}) => {
  return (
    <header>
      <nav className={classes.navContainer}>

        <div className={classes.topNav}>

          <div>
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

export default enhancer(Header)

// <NavItemButton path='/'>Home</NavItemButton>
// <NavItemButton path='/about'>About</NavItemButton>

// const styles = {
//   navContainer: {
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     fontFamily: 'Slabo',
//     letterSpacing: '2px',
//     height: '200px',
//     width: '100%',
//     backgroundColor: '#ffffff',
//     paddingBottom: '0px',
//     marginBottom: '0px',
//     borderBottom: '2px solid rgb(255, 153, 168)'
//   },
//   linksContainer: {
//     display: 'flex',
//     flexDirection: 'row',
//     width: '100%',
//     justifyContent: 'space-around',
//     fontSize: '.7em',
//     paddingLeft: '15px',
//     paddingRight: '15px',
//     paddingBottom: '10px'
//   },
//   topElements: {
//     display: 'flex',
//     flexDirection: 'row',
//     width: '100%',
//     justifyContent: 'space-between'
//   },
//   searchBar: {
//
//   },
//   shoppingCart: {
//     width: '25%',
//     display: 'flex',
//     flexDirection: 'column',
//     textAlign: 'center',
//     paddingTop: '2.5%',
//     paddingLeft: '5%',
//     fontSize: '.7em'
//   }
// }
