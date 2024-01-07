import React from 'react'
import "./Card.css"
const Card = ({img, nome, categoria, preco, id}) => {
  return (
    <div className="card" key={id}>
        <img src={img} alt={nome} />

        <div className="content">
            <h1>{nome}</h1>
            <p>{categoria}</p>
            <span>{preco}</span>
        </div>
    </div>
  )
}

export default Card