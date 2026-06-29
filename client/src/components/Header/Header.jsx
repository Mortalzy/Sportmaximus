import {Menu, Search, User, Heart, ShoppingCart, ShieldUser} from 'lucide-react'

import "./Header.css"
import Button from "../Button/Button"
import NavigationPanel from '../NavigationPanel/NavigationPanel'

const Header = () => {

    const confirmLogout = () => {
        const isConfirmed = confirm("Are you sure to want logout from account?")

        if (isConfirmed) {
            localStorage.removeItem('user')
            localStorage.removeItem('token')
        }
    }

    const defaultNavigation = [
        {
            label: "Category",
            to: '/category'
        },

        {
            label: "Stocks",
            to: '/stocks',
        },

        {
            label: "About us",
            to: '/about',
        },

        {
            label: "Contacts",
            to: '/contacts'

        },
    ]

    const userNavigation = [
        {
            icon: <User/>,
            label: "Login",
            to: '/login',
            confirmLogout,
            
        },

        {
            icon: <Heart/>,
            label: "Favorites",
            to: '/favorites'
        },

        {
            icon: <ShoppingCart/>,
            label: "Basket",
            to: '/basket',
        },

        {
            icon: <ShieldUser/>,
            label: "Admin Panel",
            to: '/admin',
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