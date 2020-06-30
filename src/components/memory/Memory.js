import React, { useState, useContext, useEffect } from 'react'
import { CardInfoContext, CardSelectionContext } from './../../Store'

import ImageCard from './ImageCard'
import TextCard from './TextCard'

const Memory = () => {
    const [cardInfo] = useContext(CardInfoContext)
    const [availableCards, setAvailableCards] = useState(cardInfo)
    useEffect(() => setAvailableCards(cardInfo), [cardInfo, setAvailableCards])

    const [cardSelection, setCardSelection] = useContext(CardSelectionContext)
    useEffect(() => {
        checkSelection(cardSelection, setCardSelection, availableCards, setAvailableCards)
    },[cardSelection, setCardSelection, availableCards, setAvailableCards])

    return (
        <div className="memory" style={memoryStyle}>
            {!cardInfo && <h1 className="loadingNotice">Fetching data...</h1>}
            {createCards(availableCards)}
        </div>
    )
}

const createCards = (cardInfo) => cardInfo.flatMap((info) => {
    const id = info.id
    const imageCardId = `card${id}_image`
    const textCardId = `card${id}_text`
    return (Array.of(
        //note: `key` is not a `prop` so we have to pass the ID down as a seperatre property
        <ImageCard key={imageCardId} id={imageCardId} pairId={id} info={info} />,
        <TextCard key={textCardId} id={textCardId} pairId={id} info={info} />
    ))
})

const checkSelection = (currentSelection, setCardSelection, availableCards, setAvailableCards) => {
    if(currentSelection.length < 2) return
    if(currentSelection.length > 2) throw Error("Illegal State: More than two cards selected at a time")

    const pairIdA = parseInt(currentSelection[0].getAttribute('pairid')) ?? false
    if(!pairIdA) throw Error(`Expected ${currentSelection[0]} to have pairId but does not.`)

    const pairIdB = parseInt(currentSelection[1].getAttribute('pairid')) ?? false
    if(!pairIdB) throw Error(`Expected ${currentSelection[1]} to have pairId but does not.`)

    //the timeouts are necessary to allow the cards to fully flip and display for a while before the action happens
    if(pairIdA === pairIdB){
        setTimeout(() => {
            setCardSelection([])
            setAvailableCards(availableCards.filter(card => {
                return card.id !== pairIdA
            }))
        },1200)

    }else {
        setTimeout(() => {
            currentSelection.forEach(card => card.classList.remove("flipped"))
            setCardSelection([])
        }, 1200)
    }
}

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