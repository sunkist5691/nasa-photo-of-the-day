import React from 'react'
import Post from './Post.js'
import styled from 'styled-components'
import './Reset.css'

const Container = styled.div `

    font-size: 62.5%;
    background-color: black;

`


const Posts = ({object, change}) => {

    return (

        <Container>
            <Post todayData={object} changeDate={change}/>
        </Container>

    )

}

export default Posts
