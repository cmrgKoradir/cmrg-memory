import React from 'react'
import Card from './Card'

const ImageCard = ({id, info}) => {
    return (
        <Card id={id}>
            <img src={info.image} alt="" />
        </Card>
    )
}

export default ImageCard