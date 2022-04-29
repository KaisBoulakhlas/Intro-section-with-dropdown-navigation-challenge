import React from 'react'
import "./Dropdown.scss"
import DropdownItems from './DropdownItems'

export default function Dropdown({classNameDropdownItem, classNameMenu, data, left}) {


  return (
    <ul className={classNameMenu}  style={{ left: `${left}` }}>
        {
            data.map((dropdownLink) => {
                return (
                    <DropdownItems classNameDropdownItem={classNameDropdownItem} key={dropdownLink.link} dropdownLink={dropdownLink}/>
                )
            })
        }
    </ul>
  )
}
