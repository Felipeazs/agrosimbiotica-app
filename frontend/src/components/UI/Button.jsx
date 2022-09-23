import React from 'react'

const Button = ({
    title,
    type,
    textColor,
    bgColor,
    hoverBgColor,
    hoverTextColor,
    clickHandler,
    disabled,
}) => {
    return (
        <div className="py-2">
            <button
                type={type}
                onClick={clickHandler}
                disabled={disabled}
                className={`border py-1 px-4 rounded-lg shadow-sm ${
                    !disabled ? hoverBgColor && hoverTextColor : 'hover:cursor-not-allowed'
                } ${bgColor ? bgColor : 'white'} ${
                    textColor ? textColor : 'text-black'
                } focus:outline-none focus:border-primary focus:ring-1 focus:ring-offset-sky-900`}>
                {title}
            </button>
        </div>
    )
}

export default Button
