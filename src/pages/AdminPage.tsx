import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Test } from '../components/test'

const get = (): string => {
    var abc = "abcdefghijklmnopqrstuvwxyz"
    var rs = ""
    while (rs.length < 6) {
        rs += abc[Math.floor(Math.random() * abc.length)]
    }
    return rs
}

export const Admin: React.FC = () => {
    const [state, setState] = useState<number>(0)
    const [state2, setState2] = useState(0)
    const upRef = useRef<HTMLButtonElement | null>(null)

    const generateWords = useCallback(() => {
        if (state >= 0) {
            const arr = new Array(state).fill('').map(() => get())
            return arr
        }
        return []
    }, [state])

    const generateWords2 = () => {
        const arr = new Array(state).fill('').map(() => get())
        return arr
    }


    return (
        <>
            <h1 style={{ textAlign: 'center', fontSize: '30px' }}>В разработке</h1>
            <div>
                Current: {state}
                <div>
                    <button ref={upRef} onClick={() => setState(prev => prev + 1)} style={{ margin: '2rem', width: '100px', height: '30px', backgroundColor: 'pink' }}>UP</button>
                    <button onClick={() => setState(prev => prev - 1)} style={{ margin: '2rem', width: '100px', height: '30px', backgroundColor: 'pink' }}>DOWN</button>
                    <button onClick={generateWords2} style={{ margin: '2rem', width: '100px', height: '30px', backgroundColor: 'pink' }}>Generate</button>
                    <Test words={generateWords} />
                </div>
            AndCurrent: {state2}
                <div>
                    <button ref={upRef} onClick={() => setState2(prev => prev + 1)} style={{ margin: '2rem', width: '100px', height: '30px', backgroundColor: 'pink' }}>UP</button>
                    <button onClick={() => setState2(prev => prev - 1)} style={{ margin: '2rem', width: '100px', height: '30px', backgroundColor: 'pink' }}>DOWN</button>
                </div>
            </div>
        </>
    )
}