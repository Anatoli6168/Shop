import React from 'react'
import * as CSS from 'csstype'

const url = "https://img.icons8.com/material-outlined/96/000000/shopping-cart.png"

const CSS_img: CSS.Properties = {
    width: "100%",
    height: "100%",
    objectFit: "contain"
}
const CSS_container: CSS.Properties = {
    flexGrow: 1
}

export const Foto: JSX.Element = (
    <div style={CSS_container}>
        <img src={url} alt="" style={CSS_img} />
    </div>
)

