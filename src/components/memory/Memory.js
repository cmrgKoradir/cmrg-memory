import React, { useState, useContext, useEffect } from 'react'
import { CardInfoContext, CardSelectionContext } from './../../Store'

import ImageCard from './ImageCard'
import TextCard from './TextCard'

const Memory = () => {
    const [cardInfo] = useContext(CardInfoContext)
    const [cardSelection, setCardSelection] = useContext(CardSelectionContext)
    useEffect(() => {
        checkSelection(cardSelection, setCardSelection)
    },[cardSelection, setCardSelection])

    const [availableCards, setAvailableCards] = useState(createCards(cardInfo))
    useEffect(() => setAvailableCards(createCards(cardInfo)),[cardInfo, setAvailableCards])

    return (
        <div className="memory" style={memoryStyle}>
            {!cardInfo && <h1 className="loadingNotice">Fetching data...</h1>}
            {availableCards}
        </div>
    )
}

const createCards = (cardInfo) => shuffle(cardInfo.flatMap((info) => {
    const id = info.id
    const imageCardId = `card${id}_image`
    const textCardId = `card${id}_text`
    return (Array.of(
        //note: `key` is not a `prop` so we have to pass the ID down as a seperatre property
        <ImageCard key={imageCardId} id={imageCardId} pairId={id} info={info} />,
        <TextCard key={textCardId} id={textCardId} pairId={id} info={info} />
    ))
}))

const shuffle = (iterable) => {
    const arr = Array.from(iterable)
    
    const n = arr.length - 1
    for(const i of arr.keys()){
        //fisher-yates: j random s.t. i <= j <= n
        const j = Math.floor(Math.random() * (n - i + 1) + i)
        const tmp = arr[i]
        arr[i] = arr[j]
        arr[j] = tmp
    }
    return arr
}

const checkSelection = (currentSelection, setCardSelection) => {
    if(currentSelection.length < 2) return
    if(currentSelection.length > 2) throw Error("Illegal State: More than two cards selected at a time")

    const pairIdA = parseInt(currentSelection[0].getAttribute('pairid')) ?? null
    if(pairIdA == null) {
        console.log(currentSelection)
        throw Error(`Expected ${currentSelection[0]} to have pairId but does not.`)
    }

    const pairIdB = parseInt(currentSelection[1].getAttribute('pairid')) ?? null
    if(pairIdB == null){
        console.log(currentSelection)
        throw Error(`Expected ${currentSelection[1]} to have pairId but does not.`)
    } 

    //the timeouts are necessary to allow the cards to fully flip and display for a while before the action happens
    if(pairIdA === pairIdB){
        setTimeout(() => {
            setCardSelection([])
            currentSelection.forEach(card => card.classList.add("hidden"))
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
    justifyContent: 'center',
    alignItems: 'center'
}

export default Memory