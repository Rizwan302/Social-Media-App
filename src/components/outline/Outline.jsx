import React from "react";
import "./Outline.css";

export default function Outline({user}) {
  return (
    <li className="rightBarFriend">
      <div className="rightbarprofileContainer">
        <img
          src={user.profilePicture}
          alt=""
          className="rightbarprofileImg"
        />
        <span className="rightbarOnline"></span>
      </div>
      <span className="rightbarUseName">{user.username}</span>
    </li>
  );
}
