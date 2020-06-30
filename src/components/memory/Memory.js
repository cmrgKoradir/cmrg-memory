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

const createCards = (cardInfo) => cardInfo.flatMap((info, index) => (
    Array.of(
        <ImageCard key={'card'+index+'_image'} info={info} />,
        <TextCard key={'card'+index+'_text'} info={info} />
    )
))

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