import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Product } from '../pages/CartPage'
import productImage from '../public/Product.jpg'
import { addCartContent, incrementCartCounter, decrementCartCounter, deleteCartContent } from '../redux/actions'


interface Props {
    children: Product
}

export const Line: React.FC<Props> = ({ children }) => {
    const { firstname, lastname, price, count }: Product = children
    const [product, setProduct] = useState({ price, count })
    const dispatch = useDispatch()

    const handleClickUp = (event: React.MouseEvent) => {
        dispatch(incrementCartCounter())
        dispatch(addCartContent(event.currentTarget.id))
        setProduct({ ...product, count: product.count + 1 })
    }

    const handleClickDown = (event: React.MouseEvent) => {
        dispatch(decrementCartCounter())
        dispatch(deleteCartContent(event.currentTarget.id))
        setProduct({ ...product, count: product.count - 1 })
    }

    if (product.count) {
        return <div className="cart__line">
            <div style={{ width: '660px', display: 'flex', justifyContent: 'flex-start' }}><img src={productImage} alt="" style={{ objectFit: 'contain' }} />{firstname} {lastname}</div>
            <div style={{ width: '100px' }}>{product.price} рублей</div>
            <div style={{ width: '100px', display: 'flex', justifyContent: 'space-around' }}>
                <div>
                    <button className="superbutton" id={lastname} onClick={handleClickDown}> - </button> {product.count} <button className="superbutton" id={lastname} onClick={handleClickUp}> + </button>
                </div>
            </div>
            <div style={{ width: '100px', display: 'flex', justifyContent: 'space-around' }}>{Number(product.count) * Number(product.price)}</div>
        </div>
    } else return null
}