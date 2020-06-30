import React, { useContext } from 'react'
import { CardInfoContext } from './../../Store'

import ImageCard from './ImageCard'
import TextCard from './TextCard'

const Memory = () => {
    const [cardInfo] = useContext(CardInfoContext)

    return (
        <div className="memory" style={memoryStyle}>
            {!cardInfo && <h1 className="loadingNotice">Fetching data...</h1>}
            {createCards(cardInfo)}
        </div>
    )
}

const createCards = (cardInfo) => cardInfo.flatMap((info, index) => {
    const imageCardId = 'card'+index+'_image'
    const textCardId = 'card' + index + '_text'
    return (Array.of(
        //note: `key` is not a `prop` so we have to pass the ID down as a seperatre property
        <ImageCard key={imageCardId} id={imageCardId} info={info} />,
        <TextCard key={textCardId} id={textCardId} info={info} />
    ))
})

const memoryStyle = {
    width: '100%',
    height: '100%',

    display: 'flex',
    flexWrap: 'wrap',
    padding: '.25rem',
    justifyContent: 'space-evenly',
    alignItems: 'center'
}

export default Memory