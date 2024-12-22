import './App.css'
import Container from './Container.js'
import {useState, useEffect} from 'react'
import axios from 'axios'

const SERVER_URL = 'http://localhost:8080/api/games'

const App = () => {
  const [ games, setGames ] = useState([])

  const getGame = async () => {
    try {
      const res = await axios.get(SERVER_URL)
      console.log(res)

      setGames(res.data)
    } catch (err) {
      console.log(err)
      
      setGames([])
    }
  }

  useEffect(() => {
    getGame()
  }, [])

  return (
    <div>
      <Header/>
      <Gamelist 
      title="인기 게임 순위!!!"
      listgame={games}/>
    </div>
  )
}

const Header = () => {
  return (
      <h1>Term Project</h1>
  )
}

const Gamelist = ({title, listgame}) => {
  return (
    <div className="gamelist">
      <div className="gamelist">{title}</div>
      {
        listgame.map(game => (
          <Container key={game.id} game={game}/>
        ))
      }
    </div>  
  )
}

export default App
