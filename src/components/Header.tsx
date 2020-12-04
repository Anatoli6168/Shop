import React from 'react'
import image from '../public/Header.png'
import { Navbar } from './Navbar'

export const Header: React.FC = () => (
    <div>
        <img src={image} className="imgHeader" alt=""/>
        <Navbar />
    </div>
)