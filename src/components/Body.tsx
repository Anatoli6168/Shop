import React from 'react'
import { Header } from './Header'

export const Body: React.FC = ({ children }) => (
    <>
        <Header />
        <div className="body">
            <div className="window">
                {children}
            </div>
        </div>
    </>
)