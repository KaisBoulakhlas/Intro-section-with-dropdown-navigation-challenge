import React, { useState } from 'react'
import NavBar from '../components/NavBar/NavBar';
import SideBar from '../components/SideBar/SideBar';
import { companyDropdown, featuresDropdown } from '../components/NavBar/Dropdown/data'
import Banner from '../components/Banner/Banner';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <NavBar toggle={toggle} />
      <Banner />
      <SideBar featuresData={featuresDropdown} companyData={companyDropdown} isOpen={isOpen} toggle={toggle} />
    </>
  )
}
