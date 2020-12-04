import React from 'react'
import { Body } from '../components/Body'
import './MainPage.css'
import image from '../public/aristotel.jpg'
import image1 from '../public/gipo.jpeg'

const lorem: string = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi minima impedit, blanditiis accusantium, quod ea inventore autem officiis quis iure culpa quas in quae non suscipit expedita esse nemo aperiam."

export const AboutPage: React.FC = () => {
    return (
        <>
            <Body>
                <div className="mainpage">
                    <div><div className="mainpage__color">{lorem}</div>{lorem}<div>{lorem}</div></div>
                    <div className="container">
                        {lorem}
                        <img src={image1} alt="none" />
                    </div>
                    <img src={image} alt="none" />
                </div>
            </Body>
        </>
    )
}