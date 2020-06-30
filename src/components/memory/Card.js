import React from 'react'
import './Card.css'

const Card = ({children}) => (
    <div className="card">
        <div className="content">
            <div className="front"></div>
            <div className="back">{children}</div>
        </div>
    </div>
)

export default Card