import React from 'react'
import './Post.css'
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
                    icon
                </div>
            </div>
            <div className="postCenter">
                <span className="PostText">My Post</span>
                <img src="/assets/parson/Zaira.jpeg" alt="" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img src="" alt="" className="likeIcon" />
                    <img src="" alt="" className="likeIcon" />
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

