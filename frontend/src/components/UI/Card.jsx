import React from 'react'

const Card = ({ children, background, shadow, mode, className }) => {
    return (
        <div
            className={`${background} border rounded-lg ${className} ${shadow ? `shadow-md ${shadow}` : 'shadow-md'
                } ${mode
                    ? `${mode} w-40 h-40 py-5 px-3 text-center justify-between items-center`
                    : 'p-10 mt-10'
                }`}>
            {children}
        </div>
    )
}

export default Card
