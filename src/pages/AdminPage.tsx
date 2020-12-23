import React, { useCallback, useState } from 'react'
import * as CSS from 'csstype'
import { AdminCard } from '../components/AdminCard'
import { Card } from '../components/Card'

interface Form {
    type: string;
    name: string;
    about: string;
    price: string;
    file: File | null;
}

const initialForm: Form = {
    'type': '',
    'name': '',
    'about': '',
    'price': '',
    file: null
}


export const Admin: React.FC = () => {
    const [form, setForm] = useState(initialForm)
    const [message, setMessage] = useState('')

    const handleSave = useCallback(async () => {

        if (form.file) {
            const formData = new FormData()
            formData.append('foto', form.file)
            formData.append('type', form.type)
            formData.append('name', form.name)
            formData.append('about', form.about)
            formData.append('price', form.price)
            try {
                const response = await fetch('/foto', {
                    method: 'PUT',
                    body: formData
                });
                const result = await response.json();
                setMessage(result.message)
                setTimeout(() => setMessage(''), 1500)
            } catch (error) {
                console.error(error)
                setMessage('Не получилось')
                setTimeout(() => setMessage(''), 1500)
            }
        } else {
            setMessage('Нет фотографии')
                setTimeout(() => setMessage(''), 1500)
        }
    }, [form])

    return (
        <div style={CSS_container}>
            <div style={CSS_head}>
                Панель администратора
            </div>
            <div style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
                <Card children={{ form, disable: true }} />
                <button style={CSS_save} onClick={handleSave}>Сохранить</button>
                <div style={CSS_message}>{message}</div>
            </div>
            <AdminCard children={{ form, setForm }} />
        </div>
    )
}

const CSS_container: CSS.Properties = {
    width: "960px",
    height: "100%",
    margin: "0 auto"
}
const CSS_message: CSS.Properties = {
    width: "300px",
    fontSize: "1.5rem",
    padding: "2px",
    textAlign: "center"

}
const CSS_head: CSS.Properties = {
    width: "100%",
    height: "50px",
    backgroundColor: "pink",
    fontSize: "25px",
    textAlign: "center",
    paddingTop: "10px",
    marginBottom: "1rem"
}
const CSS_save: CSS.Properties = {
    width: "300px",
    fontSize: "2rem",
    margin: "1rem auto",
    backgroundColor: "ForestGreen",
    borderRadius: "5px",
    padding: "3px",
    color: "white"
}