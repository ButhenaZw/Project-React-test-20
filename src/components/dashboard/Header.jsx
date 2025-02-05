
import React from 'react'
import 
 {BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify}
 from 'react-icons/bs'

function Header({OpenSidebar}) {
  return (
    <header className='header-dash'>
        <div className='menu-icons'>
            <BsJustify className='icon-dashboard' onClick={OpenSidebar}/>
        </div>
        <div className='header-left'>
            <BsSearch  className='icon-dashboard'/>
        </div>
        <div className='header-right'>
            <BsFillBellFill className='icon-dashboard'/>
            <BsFillEnvelopeFill className='icon-dashboard'/>
            <BsPersonCircle className='icon-dashboard'/>
        </div>
    </header>
  )
}

export default Header