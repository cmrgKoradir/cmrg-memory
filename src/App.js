import React, { useContext, useEffect } from 'react'
import './App.css'
import { CardInfoContext } from './Store'

const App = () => {
  const [cardInfo, setCardInfo] = useContext(CardInfoContext)

  useEffect(() => {
    fetchData(setCardInfo)
  }, [])

  useEffect(() => {
    const app = document.querySelector('.app')
    if(!cardInfo) return

    for(const child of app.children){
      app.removeChild(child)
    }

    cardInfo.forEach( info => {
      const img = document.createElement('img')
      img.src = info.image
      app.appendChild(img)
    })

  }, [cardInfo])
  
  return (
    <>
      <div className="app">
        <h1 className="loadingNotice">Fetching data...</h1>
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
          image: portrait.querySelector('.imageSlider img').src.replace(window.location.host,"www.comerge.net")
        }))
      return cardInfo
    })
    .then(cardInfo =>{
      setCardInfo(cardInfo)
    })
}

export default App;
