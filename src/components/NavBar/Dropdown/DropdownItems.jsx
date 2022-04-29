import React from 'react'
import "./DropdownItems.scss"

export default function DropdownItems({classNameDropdownItem, dropdownLink}) {
  return (
    <li className={classNameDropdownItem}>
        <a href="#" className="dropdown__link">
            {dropdownLink.icon && <img className="dropdown__icon"   alt="" src={dropdownLink.icon} />}
            {dropdownLink.link}
        </a>
    </li>
  )
}
