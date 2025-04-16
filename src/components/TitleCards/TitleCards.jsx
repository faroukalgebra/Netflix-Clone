import React from 'react'
import './TitleCards.css'
import cards_data from './cards_data'

const TitleCards = () => {
  return (
    <div className="title-cards-container">
      {cards_data.map((card, index) => (
        <div key={index} className="title-card">
          <img src={card.image} alt={card.name} className="card-img" />
        </div>
      ))}
    </div>
  )
}

export default TitleCards
