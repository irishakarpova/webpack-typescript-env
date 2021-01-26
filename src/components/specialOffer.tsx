import React from 'react'
import { Pizza } from './types'
import { withAddToCart, AddToCartProps}  from './AddToCart'


interface Props extends AddToCartProps {
    pizza: Pizza
}

const SpecialOffer: React.FC<Props> = ({ pizza, addToCart }) => {
    
  const handleAddToCartClick = () => {
    addToCart({
        id: pizza.id,
        name: pizza.name,
        price: pizza.price
    })
  };
    return (
        <div>
            <h2>{pizza.name}</h2>
            <p>{pizza.description}</p>
            <p>{pizza.price}</p>
            <button 
                onClick={handleAddToCartClick}>
                Add Pizza
            </button>
        </div>
    )

}

export default  withAddToCart(SpecialOffer)
