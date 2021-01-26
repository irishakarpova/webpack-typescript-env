import React from 'react'
import { FiShoppingCart } from 'react-icons/fi'
import CartCss from './Cart.module.css'
import { AppStateContext } from './AppState';

interface Props{

}
interface State{
    isOpen: boolean;
}
export default class Cart extends React.Component<Props, State>{
    state = {
        isOpen: false
    }

    handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => { 
        this.setState( prevState => ({isOpen: !prevState.isOpen}))
    }

    render(){
        return(
            <AppStateContext.Consumer>{
                (state) => {
                    return(
                        <div className={CartCss.cartContainer}>
                        
                            <button 
                                onClick={this.handleClick}
                                className={CartCss.button} 
                                type='button'>
                                <FiShoppingCart/ >
                                    <span>{state.cart.items.length}</span>
                            </button>
                            <div 
                                className={CartCss.cartDropDown}
                                style={{display: this.state.isOpen ? 'block': 'none'}}
                            >
                                <ul>
                                    {state.cart.items.map(item => {
                                        return <li 
                                            key={item.id}>
                                            {item.name} &times; {item.quantity}
                                            </li>
                                    })}
                     
                                </ul>
                            </div>
                        </div>
                    )
                }}

            </AppStateContext.Consumer>
        )
    }
}