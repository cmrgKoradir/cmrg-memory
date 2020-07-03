import React, { useState, useContext, useEffect } from 'react'
import { CardInfoContext, CardSelectionContext } from './../../Store'

import './Controls.css'
import ImageCard from './ImageCard'
import TextCard from './TextCard'

const Memory = () => {
    const [cardInfo] = useContext(CardInfoContext)
    const [cardSelection, setCardSelection] = useContext(CardSelectionContext)
    useEffect(() => {
        checkSelection(cardSelection, setCardSelection)
    },[cardSelection, setCardSelection])

    const [gameSize, setGameSize] = useState(2)
    const [availableCards, setAvailableCards] = useState(createCards(cardInfo))
    useEffect(() => {
        setAvailableCards([])
        setTimeout(() => {
            setAvailableCards(createCards(cardInfo, gameSize))
        }, 0);
    },[cardInfo, gameSize, setAvailableCards])

    return (
        <>
            <div className="controls">
                {availableCards.length > 1 && <button className="restartButton" onClick={() => restartGame(cardInfo, gameSize, setAvailableCards)}>Restart</button>}
                <input className="gameSizeSlider" type="range" min="2" max={cardInfo.length} defaultValue={gameSize} onChange={(e) => setGameSize(e.target.value)}/>
                <span className="gameSizeDisplay">People: {gameSize}</span>
            </div>
            <div className="memory" style={memoryStyle}>
                {availableCards.length < 1 && <h1 className="loadingNotice">Fetching data...</h1>}
                {availableCards}
            </div>
        </>
    )
}

const restartGame = (cardInfo, gameSize, setAvailableCards) => {
    setAvailableCards([])
    setTimeout(() => setAvailableCards(createCards(cardInfo, gameSize)), 0)
}

const createCards = (cardInfo, gameSize) => shuffle( // shuffle all created cards
    shuffle(cardInfo).slice(0, gameSize) //select `gameSize` random people
    .flatMap((info) => { //create an Image and a Text card for each
        const id = info.id
        const imageCardId = `card${id}_image`
        const textCardId = `card${id}_text`
        return (Array.of(
            //note: `key` is not a `prop` so we have to pass the ID down as a seperatre property
            <ImageCard key={imageCardId} id={imageCardId} pairId={id} info={info} />,
            <TextCard key={textCardId} id={textCardId} pairId={id} info={info} />
        ))
    })
)

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

    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(8em, 1fr))',
    gridAutoRows: '1fr',
    gridGap: '.25rem',
    padding: '.25rem',
    justifyItems: 'center'
}

export default Memory