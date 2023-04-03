import React from "react";
import './CloseFriend.css'

export default function CloseFriend({friend}) {
  return (
    <li className="sidebarFrined">
      <img
        src={friend.profilePicture}
        alt=""
        className="sidebarFrinedImg"
      />
      <span className="sidebarFrinedNmae">{friend.username}</span>
    </li>
  );
}
