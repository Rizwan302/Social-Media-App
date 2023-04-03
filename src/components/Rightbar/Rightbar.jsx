import React from 'react'
import './Rightbar.css'
// import { BiSearch } from "react-icons/bi";

function Rightbar() {
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        <div className="brithdayContainer">
          <img src="/assets/parson/Zaira.jpeg" alt="" className="brithdayImg" />
          <span className="brithdaytext"><b>Hello Friend</b> and <b> 3 other friend </b> have a bright today
          </span>
        </div>


        <img src="/assets/parson/Zaira.jpeg" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friend</h4>
        <ul className="rightbarFriendList">

          {/* ---------------start--------------- */}
          <li className="rightBarFriend">
            <div className="rightbarprofileContainer">
              <img src="/assets/parson/Zaira.jpeg" alt="" className="rightbarprofileImg" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUseName">My Friend</span>

          </li>
          {/* ----------end------------- */}
        </ul>

      </div>
    </div>
  )
}

export default Rightbar
