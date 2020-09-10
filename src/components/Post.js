import React from 'react'
import PostHeader from './PostHeader'
import Description from './Description'
import styled from 'styled-components'


const PostWrap = styled.section `

    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        border-radius: 1rem;
        width: 40%;
        border: solid 2px lightpink;
    }

    h3 {
        color: lightskyblue;
        font-size: 1rem;
        margin: 2% 0 1% 0;
    }

`

const Button = styled.button `

    margin: 0 2% 3% 2%;
    font-size: 1.4rem;
    padding: 1% 2% 1% 2%;
    border-radius: 0.4rem;
    transition: 0.2s all ease-in-out;

    &:hover {
        color: white;
        background-color: orange;
        cursor: pointer;
    }

`

const Post = ({todayData, changeDate}) => {

    return (

        <PostWrap>
            <PostHeader title={todayData.copyright} date={todayData.date}/>
            <Button onClick={changeDate}>Time Machine</Button>
            <img className='post-image' alt='Pleiades star cluster' src={todayData.url} />
            <h3>Description</h3>
            <Description explanation={todayData.explanation}/>
        </PostWrap>

    )

}

export default Post