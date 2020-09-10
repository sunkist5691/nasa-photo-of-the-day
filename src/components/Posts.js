import React from 'react'
import Post from './Post.js'
import './Posts.css'

const Posts = ({object, change}) => {

    return (

        <div className='posts-container'>
            <Post todayData={object} changeDate={change}/>
        </div>

    )

}

export default Posts
