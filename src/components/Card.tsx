import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import image from '../public/camera-icon.jpg'
import { addCartContent, incrementCartCounter } from '../redux/actions'

interface Form {
    form: {
        type: string;
        name: string;
        about: string;
        price: string;
        file: File | null;
    },
    disable: boolean
}




export const Card: React.FC<{ children: Form }> = ({ children }) => {
    const { type, name, about, price, file } = children.form
    const buttonRef = useRef<HTMLButtonElement>(null)
    const dispatch = useDispatch()

    const handleClick = () => {
        if (buttonRef.current) {
            dispatch(incrementCartCounter())
            dispatch(addCartContent(buttonRef.current.id))
        }
    }


    return <>
        <div className="card">
            <img src={file ? URL.createObjectURL(file) : image} alt="" />
            <div>
                <h2>{type}</h2>
                <h2>{name}</h2>
            </div>
            <div>&nbsp;&nbsp;&nbsp;{about}</div>
            <div className="down">
                <div className="price">{price} руб</div>
                <button disabled={children.disable} ref={buttonRef} id={name} onClick={handleClick} className="gocart"><img src="https://img.icons8.com/material-outlined/96/000000/shopping-cart.png" alt="" /><span>в корзину</span></button>
            </div>
        </div>
    </>
}