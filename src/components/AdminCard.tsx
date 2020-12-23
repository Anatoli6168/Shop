import React, { useRef } from 'react'
import * as CSS from 'csstype'
import image from '../public/camera-icon.jpg'

interface Form {
    form: {
        type: string;
        name: string;
        about: string;
        price: string;
        file: File | null;
    },
    setForm: React.Dispatch<React.SetStateAction<{
        type: string;
        name: string;
        about: string;
        price: string;
        file: any;
    }>>
}

export const AdminCard: React.FC<{ children: Form }> = ({children}) => {
    const {form, setForm} = children
    const { type, name, about, price, file } = form
    const input = useRef<HTMLInputElement>(null)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }


    return <>
        <div style={CSS_card}>
            <div style={CSS_container}>
                <input style={{ display: "none" }} type="file" id="input" ref={input} onChange={() => {
                    input && input.current?.files && setForm({...form, file: input.current.files[0]})
                }} />
                <label htmlFor="input" style={CSS_label}>Выберите фото</label>
                <img src={file ? URL.createObjectURL(file) : image} alt="" style={CSS_img} />
            </div>
            <div style={CSS_specification}>
                <div>
                    <span style={CSS_span}>Тип:</span>
                    <input style={CSS_name} value={type} onChange={handleChange} name="type"></input>
                    <span style={CSS_span}>Название:</span>
                    <input style={CSS_name} value={name} onChange={handleChange} name="name"></input>
                </div>
                <div style={{ marginTop: "10px" }}>
                    <span style={CSS_span_about}>Описание:</span>
                    <textarea style={CSS_about} value={about} onChange={handleChange} name="about"></textarea>
                </div>
                <div style={CSS_price}>
                    <span style={CSS_span}>Цена:</span>
                    <input style={CSS_price__input} value={price} onChange={handleChange} name="price"></input>
                </div>
            </div>
        </div>
    </>
}

const CSS_card: CSS.Properties = {
    width: "100%",
    height: "300px",
    margin: "0 auto",
    marginTop: "2rem",
    padding: "1rem",
    border: "1px solid black",
    display: "flex"
}
const CSS_img: CSS.Properties = {
    width: "100%",
    height: "80%",
    objectFit: "contain"
}
const CSS_container: CSS.Properties = {
    display: "flex",
    flexBasis: "340px",
    flexDirection: "column",
    alignItems: "center",
    marginRight: "1rem"
}
const CSS_specification: CSS.Properties = {
    width: "80%",
    height: "100%"
}
const CSS_span: CSS.Properties = {
    marginRight: "1rem"
}
const CSS_span_about: CSS.Properties = {
    marginRight: "1rem",
    position: "relative",
    bottom: "80px"
}
const CSS_name: CSS.Properties = {
    marginRight: "1rem",
    width: "38%",
    border: "1px solid Gainsboro",
    padding: "5px"
}
const CSS_about: CSS.Properties = {
    height: "180px",
    width: "84.7%",
    border: "1px solid Gainsboro",
    padding: "5px",
    marginBottom: "1rem",
    resize: "none"
}
const CSS_price: CSS.Properties = {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center"
}
const CSS_price__input: CSS.Properties = {
    fontSize: "20px",
    fontWeight: 400,
    marginRight: "1.1rem",
    width: "15%",
    border: "1px solid Gainsboro",
    padding: "5px"
}
const CSS_label: CSS.Properties = {
    color: "white",
    backgroundColor: "ForestGreen",
    textAlign: "center",
    width: "180px",
    padding: "8px",
    borderRadius: "5px",
    marginBottom: "1rem"
}