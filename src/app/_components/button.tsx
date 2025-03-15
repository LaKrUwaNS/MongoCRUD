import React from 'react'

interface ButtonIN {
    color: string;
    text: string;
}

function Button({ color, text }: ButtonIN) {

    return (
        <button style={{ backgroundColor: color }}
            className={` text-white h-10 w-30 rounded-md hover:opacity-50 transition duration-700 ease-in-out shadow-md`} >
        { text }
        </button >
    )
}

export default Button
