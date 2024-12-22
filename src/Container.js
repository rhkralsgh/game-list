import { useState } from 'react'
import { FaFireFlameCurved } from 'react-icons/fa6'

const Container = (props) => {
    const [introductionExpanded, setIntroductionExpanded] = useState(false)

    const toggleIntroduction = () => {
        setIntroductionExpanded(prevState => !prevState)
    }
    return (
    <>
        <div className="container">
            <img
                src={`/images/${props.game.id}.jpg`} 
                alt={`게임 이미지 ${props.game.id}`}
                onClick={toggleIntroduction}/>
            <a href={`https://www.google.com/search?q=${props.game.title}`}
            target="_blank"
            rel="noreferrer">
            <div className="game-title">
                {`${props.game.title} - ${props.game.company}`}
            </div>
            <div className="game-rating">{props.game.rating}</div>
            </a>
            
          <div className="game-rating">
            {[...Array(props.game.rating)].map((_, index) => (
              <FaFireFlameCurved key={index} />
            ))}
          </div>
        </div>
        {props.game.introduction && introductionExpanded && (
            <pre className="game-introduction" onClick = {toggleIntroduction}>
            {props.game.introduction}
            </pre>
        )}
    </>
    )
}

export default Container