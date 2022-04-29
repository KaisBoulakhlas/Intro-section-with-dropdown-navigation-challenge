import React from 'react'
import "./GridLayoutStyles.scss"

export default function GridLayout({children}) {
  return (
    <main className="grid__layout">
      {children}  
    </main>
  )
}
