import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import productImage from '../public/Product.jpg'
import { addCartContent, incrementCartCounter } from '../redux/actions'

interface DataValue {
    firstname: string,
    lastname: string
    about: string,
    price: string
}




export const Card: React.FC<{ children: DataValue }> = ({ children }) => {
    const { firstname, lastname, about, price } = children
    const buttonRef: React.MutableRefObject<any> = useRef(null)
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(incrementCartCounter())
        dispatch(addCartContent(buttonRef.current.id))
    }


    return <>
        <div className="card">
            <img src={productImage} alt="" />
            <div>
                <h2>{firstname}</h2>
                <h2>{lastname}</h2>
            </div>
            <div>&nbsp;&nbsp;&nbsp;{about}</div>
            <div className="down">
                <div className="price">{price} руб</div>
                <button ref={buttonRef} id={lastname} onClick={handleClick} className="gocart"><img src="https://img.icons8.com/material-outlined/96/000000/shopping-cart.png" alt="" /><span>в корзину</span></button>
            </div>
        </div>
    </>
}