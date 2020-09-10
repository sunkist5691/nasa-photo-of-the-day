import React from 'react'
import PostHeader from './PostHeader'
import Description from './Description'

const Post = ({todayData, changeDate}) => {

    return (

        <div className='post-wrap'>
            <PostHeader title={todayData.copyright} date={todayData.date}/>
            <button className='btn' onClick={changeDate}>Time Machine</button>
            <img className='post-image' alt='Pleiades star cluster' src={todayData.url} />
            <h3>Description</h3>
            <Description explanation={todayData.explanation}/>
        </div>

    )

}

export default Post