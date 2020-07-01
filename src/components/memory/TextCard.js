import React from 'react'
import Card from './Card'

const TextCard = ({id, pairId, info}) => {
    return (
        <Card id={id} pairId={pairId}>
            <div style={memoryTextStyle}>
                <span style={nameStyle}>{info.name}</span>
                {info.nickName && <span style={nickNameStyle}>"{info.nickName}"</span>}
                <span style={positionStyle}>{info.position}</span>
            </div>
        </Card>
)}

const memoryTextStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'space-evenly',
    padding: '.1em'
}

const nameStyle = {
    fontWeight: 'bold'
}

const nickNameStyle = {
}

const positionStyle = {
}

export default TextCard