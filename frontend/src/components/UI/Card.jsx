import React from 'react'

const Card = ({ children, background, shadow }) => {
    return (
        <div
            className={`flex flex-col ${background} border rounded-lg p-10 mt-10 ${
                shadow ? `shadow-md ${shadow}` : 'shadow-md'
            }`}>
            {children}
        </div>
    )
}

export default Card
