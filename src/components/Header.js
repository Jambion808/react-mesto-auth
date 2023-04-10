import React from 'react';
import headerLogo from '../images/Logo/Vector.svg'

function Header() {
  return (
    <div className='header'>
      <img alt="Логотип проекта:Место" className="logo" src={headerLogo}/>
    </div>
  );
}

export default Header;