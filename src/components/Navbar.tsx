import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { State } from '../redux/inrefases'



export const Navbar: React.FC= () => {
    const counter = useSelector((state: State) => (state.cartCounter.value))


    return <div className="navbar__line">
        <ul className="navbar">
            <NavLink className="navbar__button" to="/">Главная</NavLink>
            <NavLink className="navbar__button" to="/about">О нашей косметике</NavLink>
            <NavLink className="navbar__button" to="/onlinestore">Интернет магазин</NavLink>
            <NavLink className="navbar__button" to="/contactus">Контакты</NavLink>
            <NavLink className="navbar__button" to="/admin">Панель администратора</NavLink>
            <NavLink className="cart" to="/cart">
                <button className="cart__button">
                    <img src="https://img.icons8.com/material-outlined/96/000000/shopping-cart.png" alt="" />
                    <div>{counter}</div>
                </button>
            </NavLink>
        </ul>
    </div>
}