import React from 'react'

const Input = ({ label, type }) => {
    return (
        <div className="flex flex-col py-2">
            <label htmlFor="">{label}</label>
            {type === 'text' ? (
                <input
                    type={type}
                    className="w-96 border shadow-sm rounded px-2"
                />
            ) : (
                <textarea
                    rows="5"
                    className="w-96 border shadow-sm rounded px-2"
                />
            )}
        </div>
    )
}

export default Input
