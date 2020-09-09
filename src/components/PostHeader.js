import React from 'react'

const PostHeader = ({title, date}) => {

    return (

        <div className='post-header-wrap'>
            <h2 className='post-header-title'>Picture by {title}</h2>
            <h4 className='post-header-date'>©NASA recorded on {date}</h4>
        </div>

    )

}

export default PostHeader