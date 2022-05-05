import classes from './styles/nav.module.css'
import { useState } from 'react'

import cancel from '../public/assets/cancelicon.png'
import ham from '../public/assets/hamicon.png'
import Link from 'next/link'

function Nav() {

  const [showNav, setshowNav] = useState(false)
  const [innerNavStyle, setinnerNavStyle] = useState({display: 'none'})

  function show() {
    setshowNav(!showNav)
    setinnerNavStyle(
      {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100vh',
        position: 'fixed',
        backgroundColor: 'var(--main-primary-dark)',
        top: 0,
        right: 0,
        padding: '0.5em 2em',
        paddingBottom: '0',
      }
    )
  }

  function hide() {
    setshowNav(!showNav)
    setinnerNavStyle({display:'none'})
  }

  return (
    <>
      <div className={classes.nav} >
          <div className={classes.logo} >Xplore Libz</div>

          <div className={classes.nav1}>
              <ul className={classes.navli}>
                  <Link href={"/"}><li>Home</li></Link>
                  <Link href={"/xplore"}><li>Xplore</li></Link>
                  <Link href={"/bookstore"}><li>Bookstore</li></Link>
              </ul>
          </div>

          <Link href={"/register"}><div className={classes.reg}>Register</div></Link>
      </div>    
      <div className={classes.nav2} >
          
            <div className={classes.logo} >Xplore Libz</div>            
            <img className={classes.icon} src={ham.src} onClick={show} alt="menu icon" />
          


          <div className={classes.con} style={innerNavStyle} >
              <div className={classes.innercon} >
                <div className={classes.logo} >Xplore Libz</div> 
                <img className={classes.icon} src={cancel.src} onClick={hide} alt="cancelicon" />
              </div>

              <ul className={classes.navli}>
                <Link  href={'/'} ><li onClick={hide} >Home</li></Link>
                <Link href='/xplore' ><li onClick={hide} >Xplore</li></Link>
                <Link href={'/bookstore'} ><li onClick={hide} >Bookstore</li></Link>
                <hr />
                <Link href={'/register'} ><div className={classes.reg}>Register</div></Link>  
              </ul>
          </div>

          
      </div>    
    </>

  )
}

export default Nav