import React from 'react'
import Post from './Post.js'
import './Posts.css'

const Posts = ({object}) => {

    return (

        <div className='posts-container'>
            <Post todayData={object}/>
        </div>

    )

}

export default Posts
