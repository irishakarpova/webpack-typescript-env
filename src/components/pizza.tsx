import  React  from 'react';
import { Pizza } from './types'
import { withAddToCart, AddToCartProps}  from './AddToCart'


interface Props extends AddToCartProps{
    pizza: Pizza
}

const PizzaItem: React.FC<Props> = ({ pizza, addToCart }) => {
    const handleAddToCartClick = () => {
        addToCart({
            id: pizza.id,
            name: pizza.name,
            price: pizza.price
        })
    }

    return (
        <li>
            <h2>{pizza.name}</h2>
            <p>{pizza.description}</p>
            <p>{pizza.price}</p>
            <button 
                onClick={handleAddToCartClick}>
                Add Pizza
            </button>
        </li>
    )
}

export default withAddToCart(PizzaItem);
