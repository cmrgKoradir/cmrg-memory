import React, { useContext } from 'react'
import './Card.css'
import { CardSelectionContext } from '../../Store'

const Card = ({children, id, pairId}) => {
    const [cardSelection, setCardSelection] = useContext(CardSelectionContext)
    return (
        <div className={`card ${id}`} pairid={pairId} onClick={() => flipCard(`.${id}`, cardSelection, setCardSelection)}> {/* Note: setting `id=`, here would actually move the id to react `props` */}
            <div className="content">
                <div className="front"></div>
                <div className="back">{children}</div>
            </div>
        </div>
    )
}

const flipCard = (uniqueCardSelector, currentSelection, setSelection) => {
    if(currentSelection.length >= 2) return

    const card = document.querySelector(uniqueCardSelector)
    if(card.classList.contains("flipped")) return

    card.classList.add("flipped")
    setSelection([...currentSelection, card])
}

export default Card