import React from 'react';

function Header() {
  return (
    <header>
      <h1 style={headerStyle}> Farm Sensors App </h1>
    </header>

  )
}

const headerStyle = {
  color: '#0f0',
  margin: '0.5rem'
}

export default Header;
