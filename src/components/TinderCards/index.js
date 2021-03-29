import { useState } from "react"
import TinderCard from 'react-tinder-card'
import './TinderCards.scss'

const TinderCards = () => {
  const [people, setPeople] = useState([
    {
      name: 'Elon Musk',
      url:
        'https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg',
    },
    {
      name: 'Jeff Bezos',
      url:
        'https://upload.wikimedia.org/wikipedia/commons/6/6c/Jeff_Bezos_at_Amazon_Spheres_Grand_Opening_in_Seattle_-_2018_%2839074799225%29_%28cropped%29.jpg',
    },
  ])

  const swiped = (direction, nameToDelete) => {
    console.log('removing: ' + nameToDelete)
  }

  const outOfFrame = (name) => {
    console.log(name + ' left the screen!')
  }
  

  return (
    <div className="tinderCards">
      <div className="tinderCards__cardContainer">
        {
          people.map(person => (
            <TinderCard
              className="swipe"
              key={person.name}
              preventSwipe={["up", "down"]}
              onSwipe={(dir) => swiped(dir, person.name)}
              onCardLeftScreen={() => outOfFrame(person.name)}
            >
              <div className="card" style={{backgroundImage: `url(${person.url})`}}>
                <h3>{person.name}</h3>
              </div>

            </TinderCard>
          ))
        }
      </div>
    </div>
  )
}

export default TinderCards
