import React from 'react'
import './Sidebar.css'
import {MdOutlineRssFeed} from 'react-icons/md'
import {BsChatSquareTextFill} from 'react-icons/bs'
import {FaVideo} from 'react-icons/fa'
import {MdGroups2} from 'react-icons/md'
import {IoBookmarkSharp} from 'react-icons/io5'
import {BsQuestionSquareFill} from 'react-icons/bs'
import {FcSlrBackSide} from 'react-icons/fc'
import {BsCalendarEvent} from 'react-icons/bs'
import {FaGraduationCap} from 'react-icons/fa'



export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <MdOutlineRssFeed className='sidebarIcon' />
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <BsChatSquareTextFill className='sidebarIcon' />
            <span className="sidebarListItemText">Chats</span>
          </li>
           <li className="sidebarListItem">
            <FaVideo className='sidebarIcon' />
            <span className="sidebarListItemText">Video</span>
          </li>
          <li className="sidebarListItem">
            <MdGroups2 className='sidebarIcon' />
            <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
            <IoBookmarkSharp className='sidebarIcon' />
            <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            <BsQuestionSquareFill className='sidebarIcon' />
            <span className="sidebarListItemText">Questions</span>
          </li>
          <li className="sidebarListItem">
            <FcSlrBackSide className='sidebarIcon' />
            <span className="sidebarListItemText">Jobs</span>
          </li>
          <li className="sidebarListItem">
            <BsCalendarEvent className='sidebarIcon' />
            <span className="sidebarListItemText">Events</span>
          </li>
          <li className="sidebarListItem">
            <FaGraduationCap className='sidebarIcon' />
            <span className="sidebarListItemText">Courses</span>
          </li>
        </ul>
        <button className="sidebarbtn">Show more</button>
        <hr className='sidebarhr'/>
        <ul className="sidebarFrinedList">
          <li className="sidebarFrined">
            <img src="/assets/parson/Zaira.jpeg" alt="" className="sidebarFrinedImg" />
            <span className="sidebarFrinedNmae">Hello</span>
          </li>
          <li className="sidebarFrined">
            <img src="/assets/parson/Zaira.jpeg" alt="" className="sidebarFrinedImg" />
            <span className="sidebarFrinedNmae">Hello</span>
          </li>
          <li className="sidebarFrined">
            <img src="/assets/parson/Zaira.jpeg" alt="" className="sidebarFrinedImg" />
            <span className="sidebarFrinedNmae">Hello</span>
          </li>
          <li className="sidebarFrined">
            <img src="/assets/parson/Zaira.jpeg" alt="" className="sidebarFrinedImg" />
            <span className="sidebarFrinedNmae">Hello</span>
          </li>
          <li className="sidebarFrined">
            <img src="/assets/parson/Zaira.jpeg" alt="" className="sidebarFrinedImg" />
            <span className="sidebarFrinedNmae">Hello</span>
          </li>
          <li className="sidebarFrined">
            <img src="/assets/parson/Zaira.jpeg" alt="" className="sidebarFrinedImg" />
            <span className="sidebarFrinedNmae">Hello</span>
          </li>
          <li className="sidebarFrined">
            <img src="/assets/parson/Zaira.jpeg" alt="" className="sidebarFrinedImg" />
            <span className="sidebarFrinedNmae">Hello</span>
          </li>
          <li className="sidebarFrined">
            <img src="/assets/parson/Zaira.jpeg" alt="" className="sidebarFrinedImg" />
            <span className="sidebarFrinedNmae">Hello</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
