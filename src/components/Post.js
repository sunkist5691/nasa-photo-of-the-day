import React from 'react'
import PostHeader from './PostHeader'
import Description from './Description'

const Post = ({todayData}) => {

    return (

        <div className='post-wrap'>
            <PostHeader title={todayData.copyright} date={todayData.date}/>
            <form>
                <label>
                    Search Date:
                    <input type="text" placeholer="date" />
                </label>
                <input type="submit" value="Submit" />
            </form>
            <img className='post-image' alt='Pleiades star cluster' src={todayData.url} />
            <h3>Description</h3>
            <Description explanation={todayData.explanation}/>
        </div>

    )

}

export default Post