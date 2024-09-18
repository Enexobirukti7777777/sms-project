import React from 'react';
import { BsBell, BsQuestionCircle, BsMoonStars } from 'react-icons/bs';
import { FaCrown } from 'react-icons/fa';

function Header() {
  return (
    <header className='header'>
      <div className='header-left'>
      </div>
      <div className='header-right'>
        <div className='icon-container'>
          <FaCrown className='icon_header' />
        </div>
        <div className='icon-container'>
          <BsQuestionCircle className='icon' />
        </div>
        <div className='icon-container'>
          <BsMoonStars className='icon' />
        </div>
        <div className='icon-container'>
          <BsBell className='icon' />
        </div>
      </div>
    </header>
  );
}

export default Header;