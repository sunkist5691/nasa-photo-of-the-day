import React from 'react'
import styled from 'styled-components'

const Paragraph = styled.p `

    color: #5e8fc1;
    font-size: 1.5rem;
    font-family: 'Caveat', cursive;
    width: 50%;
    line-height: 1.5;
    margin-bottom: 5%;

`



const Description = ({explanation}) => {

    return (

    <Paragraph>{explanation}</Paragraph>

    )

}

export default Description