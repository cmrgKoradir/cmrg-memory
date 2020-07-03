import React, { useContext, useEffect } from 'react'

import './App.css'
import { CardInfoContext } from './Store'
import Memory from './components/memory/Memory'

const App = () => {
  const [, setCardInfo] = useContext(CardInfoContext)

  useEffect(() => fetchData(setCardInfo), [setCardInfo])
  
  return (
    <>
      <div className="app">
        <Memory />
      </div>
    </>
)};

function fetchData(setCardInfo){
  //quick and dirty hack to get around CORS restrictions. Security issue because routing over third party!
  fetch('https://cors-anywhere.herokuapp.com/www.comerge.net/team')
    .then(response => response.text())
    .then(htmlString => {
      const dom = new DOMParser().parseFromString(htmlString, 'text/html')
      const portraits = dom.querySelectorAll('.portrait')
      const cardInfo = Array.from(portraits)
        .map(portrait => ({
          name: portrait.querySelector('.intro strong').innerText,
          nickName: portrait.querySelector('.intro p')?.innerText,
          position: portrait.querySelector('.role').innerText,
          image: portrait.querySelector('.imageSlider img').src.replace(window.location.host,"cors-anywhere.herokuapp.com/www.comerge.net")
        }))
      return cardInfo
    })
    .then(cardInfo => { //fetch all images s.t. they get cached 
      cardInfo.forEach(info => {
        const img = document.createElement('img')
        img.crossOrigin = 'anonymous'
        img.src = info.image
        img.style.width = '1px'
        document.body.appendChild(img)
        setTimeout(() => document.body.removeChild(img),0)
      })
      return cardInfo
    })
    .then(cardInfo => cardInfo.map((info, index) => ({id: index, ...info, })))
    .then(cardInfo => setCardInfo(cardInfo))
}

export default App;
