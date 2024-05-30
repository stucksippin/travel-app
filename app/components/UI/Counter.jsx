import React, { useState } from 'react'

export default function Counter() {
    const maxGuest = 10
    const [counter, setCounter] = useState(1)
    return (
        <div className='text-2xl select-none'>
            <span
                className='cursor-pointer mr-5'
                onClick={() => {
                    if (counter > 1)
                        setCounter(counter - 1)
                }}
            >-</span>
            <span>{counter}</span>
            <span
                className='cursor-pointer ml-5'
                onClick={() => {
                    if (counter < maxGuest)
                        setCounter(counter + 1)
                }}>+</span>
        </div>
    )
}
