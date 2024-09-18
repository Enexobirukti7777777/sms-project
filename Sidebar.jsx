import React from 'react'
import { BsBag, BsBoxArrowRight , BsEnvelope,  BsFiles, BsLayoutWtf, BsPeople, BsPersonVideo2, BsSkipStart ,BsApp ,BsSlashSquare} from 'react-icons/bs'

function Sidebar() {
  return (
    <div id='sidebar'>
       <div className="sidebar-header">
        <h2>Dashboard</h2> {/* Optional title for the sidebar */}
      </div> 
      <ul className='sidebar-list'>
        <li className='sidebar-list-item dashboard-item'>
            <a href=''>
                <BsLayoutWtf className='icon'/>Dashboard
            </a>

        </li>
        <li className='sidebar-list-item'>
            <a href=''>
                <BsFiles className='icon'/>Bulk SMS
            </a>

        </li>
        <li className='sidebar-list-item'>
            <a href=''>
                <BsSlashSquare className='icon'/>Smart SMS
            </a>

        </li>
        <li className='sidebar-list-item'>
            <a href=''>
                <BsPersonVideo2 className='icon'/>Contacts
            </a>

        </li>
        <li className='sidebar-list-item'>
            <a href=''>
                <BsBag className='icon'/>SMS History
            </a>

        </li>
        <li className='sidebar-list-item'>
            <a href=''>
                <BsPeople className='icon'/>Company Account
            </a>

        </li>
        <li className='sidebar-list-item'>
            <a href=''>
                <BsSkipStart className='icon'/>Scheduled
            </a>

        </li>
        <li className='sidebar-list-item'>
            <a href=''>
                <BsEnvelope className='icon'/>Draft
            </a>

        </li>
        <li className='sidebar-list-item'>
            <a href=''>
                <BsApp className='icon'/>API
            </a>

        </li>
        <li className='sidebar-list-item'>
            <a href=''>
                <BsBoxArrowRight className='icon'/>Logout
            </a>

        </li>

      </ul>
</div>
  )
}

export default Sidebar
