import React from 'react'
import pizzas from '../data/pizzas.json'
import Pizza from './pizza'
import Cart from './Cart'
import AppCss from './App.module.css'
import PizzaSVG from '../svg/pizza.svg'
import AppStateProvider from './AppState'
import SpecialOffer from './specialOffer'


const App = () => {
    const specialOfferPizza = pizzas.find(pizza => pizza.specialOffer)
    return(
        <AppStateProvider>
            <div className={AppCss.container}>
                <div className={AppCss.header}>
                    <PizzaSVG width={120} height={120} />
                    <div className={AppCss.siteTitle}>Austin Pizza</div>
                    <Cart />
                </div>
                {specialOfferPizza && <SpecialOffer pizza = {specialOfferPizza} />}
                <ul>
                    {pizzas.map((pizza, index) => {
                        return <Pizza 
                                key={index} 
                                pizza = {pizza} />
                    })}
                </ul>
            </div>
        </AppStateProvider>
    ) 
};

export default App