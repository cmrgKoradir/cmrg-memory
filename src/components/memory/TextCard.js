import React from 'react'

const TextCard = (props) => {
    const info = props.info
    return (
    <div style={memoryTextStyle}>
        <strong>{info.name}</strong>
        {info.nickName && <span>"{info.nickName}"</span>}
        <span>{info.position}</span>
    </div>
)}

const memoryTextStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
}

export default TextCard