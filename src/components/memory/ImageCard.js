import React from 'react'
import Card from './Card'

const ImageCard = (props) => {
    return (
        <Card>
            <img src={props.info.image} alt="" />
        </Card>
    )
}

export default ImageCard