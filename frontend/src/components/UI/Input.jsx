import React from 'react'

const Input = ({ label, type, placeholder }) => {
    return (
        <div className="flex flex-col py-2">
            <label htmlFor="">{label}</label>
            {type === 'text' ? (
                <input
                    type={type}
                    placeholder={placeholder}
                    className="w-96 text-black border shadow-sm rounded px-2 focus:outline-none focus:border-primary focus:ring-1 focus:ring-violet-300"
                />
            ) : (
                <textarea
                    rows="5"
                    className="w-96 text-black border shadow-sm rounded px-2 focus:outline-none focus:border-primary focus:ring-1 focus:ring-violet-300"
                />
            )}
        </div>
    )
}

export default Input
