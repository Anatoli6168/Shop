import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Body } from '../components/Body'
import { Line } from '../components/CartLine'
import { ContentState, State } from '../redux/inrefases'

//В JSX не работает for, а держать продукцию в обьекте удобнее чем в массиве, поэтому присутствует такая свистопляска с преобразованием массива в обьект и обратно

interface JsonProduct {
    firstname: string,
    lastname: string,
    about: string,
    price: string
}

export interface Product extends JsonProduct {
    count: number
}

interface Products {
    [key: string]: Product
}
const http = '/products/find?lastname='


export const Cart: React.FC = () => {
    const [products, setProducts] = useState<Products>({})
    const content = useSelector<State, ContentState>(state => state.cartContent)

    useEffect(() => { //Загружаем информацию от товара с сервера
        if (Object.keys(content).length) {
            let clone: Products = {}
            fetch(http + Object.keys(content).join('&lastname='))
                .then(response => response.json())
                .then((json: JsonProduct[]) => {
                    for (const product of json) {
                        clone[product.lastname] = { ...product, count: content[product.lastname] }
                    }
                    setProducts(clone)
                })
        }
    }, [])

    if (Object.keys(content).length === 0) {
        return <Body><div>Корзина пуста</div></Body>
    }

    if (!Object.keys(products).length) {
        return <Body><div>Идет загрузка</div></Body>
    }

    return (<>
        <Body>
            <div className="cart__head">
                <div style={{width: '660px'}}>Продукт</div>
                <div style={{width: '100px'}}>Цена</div>
                <div style={{width: '100px'}}>Количество</div>
                <div style={{width: '100px'}}>Сумма</div>
            </div>
            {
                Object.entries(products).map((item: [string, Product], index: number) => {
                    return <Line children={item[1]} key={index}/>
                })
            }
        </Body>
    </>)
}