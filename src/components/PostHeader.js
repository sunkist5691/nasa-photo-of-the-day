import React from 'react'
import styled from 'styled-components'

const HeaderWrap = styled.div `

    font-size: 1.5rem;
    margin-bottom: 2%;

    h2 {
        color: lightsalmon;
        font-family: 'Hanalei', cursive;
        margin-bottom: 1%;
        padding: 2% 0;
    }

    h4 {
        color: #5e8fc1;
    }

`

const PostHeader = ({title, date}) => {

    return (

        <HeaderWrap>
            <h2>Picture by {title}</h2>
            <h4>©NASA recorded on {date}</h4>
        </HeaderWrap>

    )

}

export default PostHeader