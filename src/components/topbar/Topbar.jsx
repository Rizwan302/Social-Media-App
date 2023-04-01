import React from "react";
import "./Topbar.css";
import { BiSearch } from "react-icons/bi";
import { BsFillPersonFill, BsFillChatLeftTextFill } from "react-icons/bs";
import { IoIosNotifications } from "react-icons/io";

export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbatLeft">
        <span className="logo">My App</span>
      </div>
      <div className="topbatCenter">
        <div className="searchbar">
          <BiSearch className="searchIcon" />
          <input type="search" placeholder="Search" className="searchInput" />
        </div>
      </div>
      <div className="topbatRight">
        <div className="topbarLinke">
          <span className="topbarLinke">HomePage</span>
          <span className="">TimeLine</span>
        </div>
        <div className="topbarIcone">
          <div className="topbarIconeItem">
            <BsFillPersonFill />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconeItem">
            <BsFillChatLeftTextFill />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconeItem">
            <IoIosNotifications />
            <span className="topbarIconBadge">10</span>
          </div>
        </div>
        <img src="/assets/parson/Zaira.jpeg" alt="" className="topbarImg" />
      </div>
    </div>
  );
}
