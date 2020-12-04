import React from 'react'
import loadingGif from '../public/spinner.gif'

export const Spinner: React.FC = () => (
    <div className="spinner">
        <img src={loadingGif} alt="" />
    </div>
)