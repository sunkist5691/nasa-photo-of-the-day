import React from 'react'
import Post from './Post.js'
import styled from 'styled-components'
import './Reset.css'

const Container = styled.div `

    font-size: 62.5%;
    background-color: black;

`

const Posts = ({object, changeDate}) => {

    return (

        <Container>
            <Post todayData={object} changeDate={changeDate}/>
        </Container>

    )

}

export default Posts
