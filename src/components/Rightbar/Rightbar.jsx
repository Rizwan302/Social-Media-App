import React from 'react'
import './Rightbar.css'
import { Users } from '../../dummyData'
import Outline from '../outline/Outline'
// import { BiSearch } from "react-icons/bi";

function Rightbar({profile}) {
  const HomeRightbar = () => {
    return(
      <>
      <div className="brithdayContainer">
          <img src="/assets/parson/Zaira.jpeg" alt="" className="brithdayImg" />
          <span className="brithdaytext"><b>Hello Friend</b> and <b> 3 other friend </b> have a bright today
          </span>
        </div>
        <img src="/assets/parson/Zaira.jpeg" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friend</h4>
        <ul className="rightbarFriendList">

          {/* ---------------start--------------- */}
          {
            Users.map(u=>(
              <Outline key={u.id} user={u} />
            ))
          }
          {/* ----------end------------- */}
        </ul>
      </>
    )
  }

  const ProfileRightbar = () => {
    return(
      <h1>hey its profile</h1>
    )
  }


  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        <HomeRightbar/>
      </div>
    </div>
  )
}

export default Rightbar
