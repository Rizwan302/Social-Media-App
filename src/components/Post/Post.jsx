import React, { useState } from 'react'
import './Post.css'
import { GrMoreVertical } from "react-icons/gr";
import { AiFillLike } from "react-icons/ai";
import { FcLike } from "react-icons/fc";
import { Users } from '../../dummyData'




function Post({post}) {

    const [like, setLike] = useState(post.like)
    const [isliked, setIsLiked] = useState(false)

    const likeHandeler = () =>{
        setLike(isliked ? like -1 : like + 1)
        setIsLiked(!isliked)
    }
    return (
    <div className='post'>
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img src={Users.filter((u) => u.id === post?.userId)[0].profilePicture} alt="" className="postProfileImg" />
                    <span className="postUsername">{Users.filter((u) => u.id === post?.userId)[0].username}</span>
                    <span className="postDate">{post.date}</span>
                </div>
                <div className="postTopRight">
                    <GrMoreVertical/>
                </div>
            </div>
            <div className="postCenter">
                <span className="PostText">{post?.desc}</span>
                <img src={post.photo} alt="" className='postImg' />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <AiFillLike className="likeIcon" onClick={likeHandeler} />
                    <FcLike className="likeIcon" onClick={likeHandeler} />
                    <span className="postLikeCounter">{like} people like </span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">{post.comment} command</span>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Post 

