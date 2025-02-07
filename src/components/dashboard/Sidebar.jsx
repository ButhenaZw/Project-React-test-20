import { Link } from "react-router-dom"; 
import React from 'react'
import AddBoxIcon from '@mui/icons-material/AddBox';

import EditNoteIcon from '@mui/icons-material/EditNote';
import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill}
 from 'react-icons/bs'

function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <h1 style={{color:"white",fontFamily:"initial",fontSize:"30px"}} >Dashboard</h1>

            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
       <li className='sidebar-list-item'>
       <Link to="/form">
                 <AddBoxIcon className='icons-dashboard'/> Add Student
                

                 </Link>  
            </li>

            <Link to="/edit"><li className='sidebar-list-item'>
                <a href="">
                    <EditNoteIcon className='icons-dashboard'/> Edit
                </a>
            </li></Link>
        </ul>
    </aside>
  )
}

export default Sidebar