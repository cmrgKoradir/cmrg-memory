import React, { useContext } from 'react'
import { CardInfoContext } from './../../Store'

const Memory = () => {
    const [cardInfo] = useContext(CardInfoContext)

    return (
        <div className="memory" style={memoryStyle}>
            {!cardInfo && <h1 className="loadingNotice">Fetching data...</h1>}
            {cardInfo.map( info => createCards(info))}
        </div>
    )
}

const createCards = (info) => (
    <img src={info.image} alt="" style={memoryImageStyle}/>   
)

const memoryStyle = {
    width: '100%',
    height: '100%',

    display: 'flex',
    flexWrap: 'wrap',
    padding: '.25rem',
    justifyContent: 'space-evenly',
    alignItems: 'center'
}

const memoryImageStyle = {
    marginTop: '.75rem'
}

export default Memory