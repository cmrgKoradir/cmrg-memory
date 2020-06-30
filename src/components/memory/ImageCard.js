import React from 'react'
import Card from './Card'

const ImageCard = ({id, pairId, info}) => {
    return (
        <Card id={id} pairId={pairId}>
            <img src={info.image} alt="" />
        </Card>
    )
}

export default ImageCard