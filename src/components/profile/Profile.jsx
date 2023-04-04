import React from "react";
import "./Profile.css";
import Topbar from "../../components/topbar/Topbar";
import Feed from "../../components/Feed/Feed";
import Rightbar from "../../components/Rightbar/Rightbar";
import Sidebar from "../../components/Sidebar/Sidebar";

function Profile() {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">

            <img src="assets/parson/za2.jpeg" alt="" className="profileCoverImg" />
            <img src="assets/parson/za2.jpeg" alt="" className="profileUserImg" />
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">Hello World</h4>
                <span className="profileInfoDec">Hello My Friend!</span>
            </div>
          </div>
          <div className="profileRightButtom">
            <Feed />
            <Rightbar />
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
