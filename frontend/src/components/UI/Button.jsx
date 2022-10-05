import React from 'react'

const Button = ({ title, type, textColor, bgColor, hoverBgColor, hoverTextColor, clickHandler,
    disabled, className }) => {

    let style = `border py-2 px-4 rounded-lg shadow-sm focus:outline-none focus:border-primary 
                focus:ring-1 focus:ring-offset-sky-900`

    if (!disabled) {
        style += ` ${hoverBgColor} ${hoverTextColor} ${textColor} ${bgColor}`
    } else {
        style += ' bg-slate-200 text-white hover:cursor-not-allowed'
    }

    return (
        <div className={`py-2 ${className}`}>
            <button
                type={type}
                onClick={clickHandler}
                disabled={disabled}
                className={style}>
                {title}
            </button>
        </div>
    )
}

export default Button
