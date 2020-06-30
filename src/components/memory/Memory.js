import React, { useContext } from 'react'
import { CardInfoContext } from './../../Store'

const Memory = () => {
    const [cardInfo] = useContext(CardInfoContext)

    return (
        <div className="memory" style={memoryStyle}>
            {!cardInfo && <h1 className="loadingNotice">Fetching data...</h1>}
            {createCards(cardInfo)}
        </div>
    )
}

const createCards = (cardInfo) => cardInfo.map((info, index) => (
    Array.of(
        <img key={'card'+index+'_image'} src={info.image} alt="" style={memoryImageStyle}/>,

        <div key={'card'+index+'_text'} style={memoryTextStyle}>
            <strong>{info.name}</strong>
            {info.nickName && <span>"{info.nickName}"</span>}
            <span>{info.position}</span>
        </div>
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

const memoryImageStyle = {
    marginTop: '.75rem'
}

const memoryTextStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
}

export default Memory