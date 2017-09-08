import React from 'react'
import NavItem from './NavItem'

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

  }
}

const Header = () =>
  <header>
    <nav style={styles.navContainer}>
      <div style={styles.topElements}>
        <div style={styles.searchBar}>
          <p>Looking for something...</p>
          <input type='text' placeholder='&#xf002; Search' />
        </div>
        <div style={styles.shoppingCart}>
          <div>
            &#xf07a;
          </div>
          <p>Total Items: </p>
          <p>Price: </p>
        </div>
      </div>

      <div style={styles.linksContainer}>
        <NavItem path='/' exact >Home</NavItem>
        <NavItem path='/about' >About</NavItem>
        <NavItem path='/products' >Products</NavItem>
      </div>

    </nav>
  </header>

export default Header

// <NavItemButton path='/'>Home</NavItemButton>
// <NavItemButton path='/about'>About</NavItemButton>
