import React from 'react'
import Card from './Card'

const TextCard = ({id, info}) => {
    return (
        <Card id={id}>
            <div style={memoryTextStyle}>
                <strong>{info.name}</strong>
                {info.nickName && <span>"{info.nickName}"</span>}
                <span>{info.position}</span>
            </div>
        </Card>
)}

const memoryTextStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
}

export default TextCard