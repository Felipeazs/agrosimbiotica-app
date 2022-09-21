import React from 'react'

const Button = ({ title, type }) => {
    return (
        <div className="text-center py-2">
            <button
                type={type}
                className="border py-1 px-4 rounded-lg">
                {title}
            </button>
        </div>
    )
}

export default Button
