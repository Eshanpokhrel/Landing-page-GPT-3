import React, { useState } from 'react'
import './navbar.css'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import logo from '../../assets/logo.svg'

const Menu = () => (
  <>
  <p><a href="#home">Home</a></p>
  <p><a href="#wgpt3">What is gpt</a></p>
  <p><a href="#features">Case Studies</a></p>
  <p><a href="#possibility">Open AI</a></p>
  <p><a href="#blog">Library</a></p>
  </>
)


const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [navbar, setNavbar] = useState(false)

  const changebcg = () => {
    if (window.scrollY>=20) {
      setNavbar(true)
    }
    else {
      setNavbar(false)
    }
  }

  window.addEventListener('scroll', changebcg)

  return (
    // <div className='gpt3__navbar'>
    <div className={navbar ? 'gpt3__navbar active' : 'gpt3__navbar'}>
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={ logo } alt="logo"/>
        </div>
        <div className="gpt3__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <p>SIgn in</p>
        <button type='button'>Sign up</button>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu 
        ? <RiCloseLine color='white' size={27} onClick={() => setToggleMenu(false)}/>
        : <RiMenu3Line color='white' size={27} onClick={() => setToggleMenu(true)}/>
        }
        {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
              <Menu />
              <div className="gpt3__navbar-menu_container-links-sign">
                <p>Sign in</p>
                <button type='button'>Sign up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
