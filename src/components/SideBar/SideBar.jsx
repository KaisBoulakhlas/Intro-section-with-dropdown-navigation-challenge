import React, { useState } from 'react'
import closeMenu from '../../assets/icon-close-menu.svg'
import arrowDown from '../../assets/icon-arrow-down.svg'
import Dropdown from '../NavBar/Dropdown/Dropdown';
import '../NavBar/NavBarStyles.scss'
import './SideBarStyles.scss'
import LoginRegister from '../NavBar/Login/Register/LoginRegister';

export default function SideBar({ featuresData, companyData, isOpen, toggle }) {
  const [featureIsExtented, setFeatureIsExtented] = useState(false);
  const [companyIsExtented, setCompanyIsExtented] = useState(false);


  const handleExtendDropDownFeature = () => {
    setFeatureIsExtented(!featureIsExtented);
  }

  const handleExtendDropDownCompany = () => {
    setCompanyIsExtented(!companyIsExtented);
  }

  return (
    <>
      <div className={`${isOpen ? 'overlay show' : 'overlay'}`}></div>
      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <img 
          className="sidebar__close__button" 
          onClick={() => {
            toggle()
            setFeatureIsExtented(false);
            setCompanyIsExtented(false);
          }} 
          src={closeMenu}/>
        <ul className="sidebar__links">
              <li onClick={handleExtendDropDownFeature} className={featureIsExtented ? "sidebar__link__dropdown extented" : "sidebar__link__dropdown"}>
                <span className="sidebar__link">Features</span><img className="sidebar__link__icon" src={arrowDown} />
                <Dropdown  classNameDropdownItem="sidebar__dropdown__item" classNameMenu="sidebar__link__menu" left="0" data={featuresData} />
              </li>
              <li onClick={handleExtendDropDownCompany} className={companyIsExtented ? "sidebar__link__dropdown extented" : "sidebar__link__dropdown"}>
                <span className="sidebar__link">Company</span><img className="sidebar__link__icon" src={arrowDown} />
                <Dropdown  classNameDropdownItem="sidebar__dropdown__item" classNameMenu="sidebar__link__menu" left="0" data={companyData} />
              </li>
              <li className="sidebar__link">
                <a href="#">Careers</a>
              </li>
              <li className="sidebar__link">
                <a href="#">About</a>
              </li>
        </ul>
        <LoginRegister classNameHeader="sidebar__login__register" classNameLogin="sidebar__link" classNameRegister="sidebar__link__button"/>
      </aside>
    </>
  )
}
