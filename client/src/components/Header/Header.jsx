import {Menu, Search, User, Heart, ShoppingCart} from 'lucide-react'

import "./Header.css"
import Button from "../Button/Button"
import NavigationPanel from '../NavigationPanel/NavigationPanel'

const Header = () => {
    const defaultNavigation = [
        {label: "Category"},
        {label: "Stocks"},
        {label: "About us"},
        {label: "Contacts"},
    ]

    const userNavigation = [
        {
            icon: <User/>,
            label: "Login",
        },
        {
            icon: <Heart/>,
            label: "Favorites",
        },
        {
            icon: <ShoppingCart/>,
            label: "Basket",
        },
    ]

    return (
        <header className="header">
            <div className="logo">
                <p className="logo__text">SPORT<span className="logo--red">MAXIMUS</span></p>
            </div>

            <Button className='button-catalog' >
                <div className='button-catalog__content'>
                    <Menu />
                    <p className='button-catalog__title'>Catalog</p>
                </div>
            </Button>
            
            <NavigationPanel items={defaultNavigation}/>            

            <div className="search-field">
                <input 
                className="search-field__input" 
                type="text"
                placeholder='Searching to product, brands, category'
                />
                <Search className='search-field__icon'/>
            </div>

            <NavigationPanel items={userNavigation}/>
        </header>
    )
}

export default Header