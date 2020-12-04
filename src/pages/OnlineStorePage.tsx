import React, { useEffect, useState } from 'react'
import { Card } from '../components/Card'
import { Header } from '../components/Header'
import { Spinner } from '../components/Spinner'

interface DataValue {
    firstname: string,
    lastname: string,
    about: string,
    price: string
}


export const OnlineStore: React.FC = () => {
    const [products, setProducts] = useState<DataValue[]>([])
    const [productsInPage, setProductsInPage] = useState<number>(1)
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        async function load() {
            try {
                const response = await fetch(`/products?limit=${productsInPage}`, { method: 'GET' })
                const data: DataValue[] = await response.json()

                if (!response.ok) {
                    setLoading(false)
                    throw new Error('Что-то пошло не так')
                }

                await new Promise((resolve, reject) => setTimeout(resolve, 100)) // Имитация задержки для демонстрации лоадера

                return data
            } catch (e) {
                setLoading(false)
                throw e
            }
        }

        load().then(data => setProducts(data))
    }, [productsInPage])

    if(!loading) {
        return(
            <>
            <Header />
            <h1>Что-то пошло не так</h1>
            </>
        )
    }

    if (products.length === 0 && loading) {
        return (
            <>
                <Header />
                <Spinner />
            </>
        )

    }

    return (
        <>
            <Header />
            <button onClick={() => setProductsInPage(prev => prev + 1)} >Загрузить больше</button><span style={{marginLeft: '100px'}}>Подгрузка Выглядит забавно, потому что на флексах)</span>
            <div className="card__container">
                {products.map((item, index) => (<Card children={item} key={index} />))}
            </div>
        </>
    )
}