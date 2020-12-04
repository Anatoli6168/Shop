import React from 'react'
import { Body } from '../components/Body'
import image from '../public/photo.jpg'

export const ContactUs: React.FC = () => {
    return (
        <>
            <Body>
                <div className="mainpage">
                    <div>
                        <div style={{ marginBottom: '30px' }}>Телефон: +7-927-242-61-68</div>
                        <div>email: anatoliy6168@gmail.com</div>
                    </div>
                    <div className="container" style={{ width: '200px' }}>
                    </div>
                    <img src={image} alt="none" style={{ height: '350px' }} />
                </div>
            </Body>
        </>
    )
}