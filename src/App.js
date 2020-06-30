import React from 'react';
import './App.css';

const App = () => (
    <>
      <div className="App">
        <h1>Fetching data...</h1>
      </div>
      <script>{fetchData()}</script>
    </>
  );

function fetchData(data){
  console.log(data)
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
      console.log(cardInfo)
      return cardInfo
    })
}

export default App;
