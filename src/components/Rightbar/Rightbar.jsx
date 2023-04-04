import React from "react";
import "./Rightbar.css";
import { Users } from "../../dummyData";
import Outline from "../outline/Outline";
// import { BiSearch } from "react-icons/bi";

function Rightbar({ profile }) {
  const HomeRightbar = () => {
    return (
      <>
        <div className="brithdayContainer">
          <img src="/assets/parson/Zaira.jpeg" alt="" className="brithdayImg" />
          <span className="brithdaytext">
            <b>Hello Friend</b> and <b> 3 other friend </b> have a bright today
          </span>
        </div>
        <img src="/assets/parson/Zaira.jpeg" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friend</h4>
        <ul className="rightbarFriendList">
          {/* ---------------start--------------- */}
          {Users.map((u) => (
            <Outline key={u.id} user={u} />
          ))}
          {/* ----------end------------- */}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfokey">City:</span>
            <span className="rightbarInfovalue">Jhelum</span>
          </div>

          <div className="rightbarInfoItem">
            <span className="rightbarInfokey">From:</span>
            <span className="rightbarInfovalue">Pakistan</span>
          </div>

          <div className="rightbarInfoItem">
            <span className="rightbarInfokey">Relationship:</span>
            <span className="rightbarInfovalue">Single</span>
          </div>
        </div>

        <h4 className="rightbarTitle">User Friends</h4>
        <div className="rightbarFollwings">
          {/* -------start------- */}
          <div className="rightbarFollwing">
            <img src="/assets/parson/Zaira.jpeg" alt="" className="rightbarFollwingsImg" />
            <span className="rightbarFollwingName">My Name</span>
          </div>
          {/* --------end------- */}
          <div className="rightbarFollwing">
            <img src="/assets/parson/Zaira.jpeg" alt="" className="rightbarFollwingsImg" />
            <span className="rightbarFollwingName">My Name</span>
          </div><div className="rightbarFollwing">
            <img src="/assets/parson/Zaira.jpeg" alt="" className="rightbarFollwingsImg" />
            <span className="rightbarFollwingName">My Name</span>
          </div><div className="rightbarFollwing">
            <img src="/assets/parson/Zaira.jpeg" alt="" className="rightbarFollwingsImg" />
            <span className="rightbarFollwingName">My Name</span>
          </div><div className="rightbarFollwing">
            <img src="/assets/parson/Zaira.jpeg" alt="" className="rightbarFollwingsImg" />
            <span className="rightbarFollwingName">My Name</span>
          </div><div className="rightbarFollwing">
            <img src="/assets/parson/Zaira.jpeg" alt="" className="rightbarFollwingsImg" />
            <span className="rightbarFollwingName">My Name</span>
          </div>
        </div>

      </>
    );
  };

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <ProfileRightbar />
      </div>
    </div>
  );
}

export default Rightbar;
