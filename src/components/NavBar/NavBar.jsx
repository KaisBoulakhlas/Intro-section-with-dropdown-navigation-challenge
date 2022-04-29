import React from 'react'
import "./NavBarStyles.scss"
import logo from '../../assets/logo.svg'
import arrowDown from '../../assets/icon-arrow-down.svg'
import toggleMenu from '../../assets/icon-menu.svg'
import Dropdown from './Dropdown/Dropdown'
import { companyDropdown, featuresDropdown } from './Dropdown/data'
import LoginRegister from './Login/Register/LoginRegister'

export default function Navbar({ toggle }) {
  return (
    <header className="header">
      <nav className="header__navigation">
        <img className="header__logo" src={logo} alt="snap" />
        <img alt="" className="header__toggle__button" src={toggleMenu} onClick={toggle}/>
        <ul className="header__nav__links">
            <li className="nav__link__dropdown">
              <span className="nav__link">Features</span><img alt="" className="nav__link__icon" src={arrowDown} />
              <Dropdown classNameDropdownItem="nav__dropdown__item" classNameMenu="nav__link__menu" left="-85%" data={featuresDropdown} />
            </li>
            <li className="nav__link__dropdown">
              <span className="nav__link">Company</span><img alt="" className="nav__link__icon" src={arrowDown} />
              <Dropdown classNameDropdownItem="nav__dropdown__item" classNameMenu="nav__link__menu" left="0" data={companyDropdown} />
            </li>
            <li className="nav__link">
              <a href="#">Careers</a>
            </li>
            <li className="nav__link">
              <a href="#">About</a>
            </li>
        </ul>
        <LoginRegister classNameHeader="header__login__register" classNameLogin="nav__link" classNameRegister="header__link__button"/>
      </nav>
    </header>
  )
}
