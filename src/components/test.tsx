import React, { useEffect, useState } from 'react'

interface Aga {
    words(): string[]
}

export const Test: React.FC<Aga> = ({ words }) => {
    const [state, setState] = useState<string[]>([])

    useEffect(() => {
        console.log('render')
        setState(words())
    }, [words])

    return (
        <div>{
            state.map((word, index) => (<div key={index}>{word}</div>))
        }</div>
    )
}