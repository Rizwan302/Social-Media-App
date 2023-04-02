import React from 'react'
import './Post.css'
import { GrMoreVertical } from "react-icons/gr";
import { AiFillLike } from "react-icons/ai";
import { FcLike } from "react-icons/fc";



function Post() {
  return (
    <div className='post'>
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img src="/assets/parson/Zaira.jpeg" alt="" className="postProfileImg" />
                    <span className="postUsername">Hello</span>
                    <span className="postDate">5 min</span>
                </div>
                <div className="postTopRight">
                    <GrMoreVertical/>
                </div>
            </div>
            <div className="postCenter">
                <span className="PostText">My Post</span>
                <img src="/assets/parson/Zaira.jpeg" alt="" className='postImg' />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <AiFillLike className="likeIcon" />
                    <FcLike className="likeIcon" />
                    <span className="postLikeCounter">123 like</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">9 command</span>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Post 

