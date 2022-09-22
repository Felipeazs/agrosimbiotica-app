import React from 'react'

const Button = ({ title, type, textColor, bgColor, hoverBgColor, hoverTextColor }) => {
    return (
        <div className="text-center py-2">
            <button
                type={type}
                className={`border py-1 px-4 rounded-lg shadow-sm ${hoverBgColor} ${hoverTextColor} ${
                    bgColor ? bgColor : 'white'
                } ${
                    textColor ? textColor : 'text-black'
                } focus:outline-none focus:border-primary focus:ring-1 focus:ring-offset-sky-900`}>
                {title}
            </button>
        </div>
    )
}

export default Button
