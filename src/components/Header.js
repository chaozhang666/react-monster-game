import React from 'react'
import './Header.css'

const headerStyle = {
  backgroundColor: 'black',
  color: 'white',
  textTransform: 'uppercase',
  textAlign: 'center',
  padding: '30px',
}

export default function Header() {
  return (
    <div>
      <h1 style={headerStyle}>Monster Game</h1>
    </div>
  )
}
