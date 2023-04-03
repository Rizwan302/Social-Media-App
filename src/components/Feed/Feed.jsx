import React from 'react'
import Post from '../Post/Post'
import Share from '../share/Share'
import {Posts} from '../../dummyData'
import './Feed.css'


function Feed() {
  return (
    <div className='feed'>
      <div className="feedwarpper">
        <Share/>
        {Posts.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </div>
    </div>
  )
}

export default Feed
