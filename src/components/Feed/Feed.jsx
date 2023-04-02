import React from 'react'
import Post from '../Post/Post'
import Share from '../share/Share'
import './Feed.css'


function Feed() {
  return (
    <div className='feed'>
      <div className="feedwarpper">
        <Share/>
        <Post/>
      </div>
    </div>
  )
}

export default Feed
