import React from 'react'
import * as CSS from 'csstype'
import { Body } from '../components/Body'

export const MainPage: React.FC = () => {
    return (
        <>
            <Body>
                <div style={CSS_container}>
                    <div style={CSS_greeting}>
                        Привет, вы находитесь на демонстративном сайте, который я делаю, что бы найти работу.
                        Я начал его делать совсем недавно и мне предстоит еще много работы, но некоторый UX можно наблюдать уже сегодня.
                        Стили были накиданы без уделения им должного внимания и ждут, когда их приведут в порядок.<br /><br />
                        <a href="https://github.com/Anatoli6168/Shop" target="_blank">GitHub</a>
                        <br /><br />
                        <ul>
                            <li>При его создании я использовал:</li>
                            <br />
                            <li>React</li>
                            <li>Redux</li>
                            <li>TypeScrypt</li>
                            <li>И еще по мелочи</li>
                        </ul>
                    </div>
                    <div style={CSS_line}></div>
                    <div style={CSS_map}>
                        <ul>
                            <li>RoadMap:</li>
                            <br />
                            <li>Сделать панель администратора, в которой можно будет добавлять/редактировать/удалять продукты</li><br />
                            <li>Добавить в корзину функцию оформления заказа</li><br />
                            <li>Красиво сверстать и привести CSS записи к единому стилю. Добавить адаптив</li><br />
                            <li>Написать тесты</li>
                        </ul>
                    </div>
                </div>
            </Body>
        </>)
}

const CSS_container: CSS.Properties = {
    fontSize: "18px",
    padding: "10px",
    display: "flex",
    justifyContent: "space-between"
}

const CSS_greeting: CSS.Properties = {
    textIndent: "10px",
    flexBasis: "50%"
}

const CSS_map: CSS.Properties = {
    flexBasis: "50%"
}

const CSS_line: CSS.Properties = {
    margin: "0 20px",
    height: "600px",
    width: "1px",
    borderRight: "1px solid black"
}