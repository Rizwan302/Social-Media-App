import React from 'react'
import './Share.css'
import {MdPermMedia} from 'react-icons/md'


export default function Share() {
  return (
    <div className='share'>
      <div className="sharewarpper">
        <div className="shareTop">
            <img src="/assets/parson/zaira.jpeg" alt="" className="shareProfileImg" />
            <input placeholder='What is your Name' className="shareInput" />
        </div>
        <hr className="shareHr" />

        <div className="sharebottom">
            <div className="shareOptions">
                <div className="shareOption">
                    <MdPermMedia className='shareIcon'/>
                    <span className="shareOptionText">Phote or Video</span>
                </div>
                <div className="shareOption">
                    <MdPermMedia className='shareIcon'/>
                    <span className="shareOptionText">Tag</span>
                </div>
                <div className="shareOption">
                    <MdPermMedia className='shareIcon'/>
                    <span className="shareOptionText">Location</span>
                </div>
                <div className="shareOption">
                    <MdPermMedia className='shareIcon'/>
                    <span className="shareOptionText">Felling</span>
                </div>
            </div>
            <button className="sharButton">share</button>
        </div>
      </div>
    </div>
  )
}
