import React from 'react'
import './Card.css'

const Card = ({children, id}) => {
    return (
        <div className={`card ${id}`} onClick={() => flipCard(`.${id}`)}> {/* Note: setting `id=`, here would actually move the id to react `props` */}
            <div className="content">
                <div className="front"></div>
                <div className="back">{children}</div>
            </div>
        </div>
    )
}

const flipCard = (uniqueCardSelector) => {
    const card = document.querySelector(uniqueCardSelector)
    card.classList.add("flipped")
}

export default Card