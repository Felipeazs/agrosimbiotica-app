import React from 'react'

const Input = ({ label, type, name, option, placeholder, items, onSelectChange, onInputChange, className }) => {
    return (
        <div className="flex flex-col py-2">
            <label htmlFor="">{label}</label>
            {type === 'text' && (
                <input
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    onChange={onInputChange}
                    className={`w-full text-black border shadow-sm rounded p-2 focus:outline-none 
                    focus:border-primary focus:ring-1 focus:ring-violet-300 ${className}`}
                />
            )}
            {type === 'textarea' && (
                <textarea
                    rows="5"
                    name={name}
                    onChange={onInputChange}
                    className="w-96 text-black border shadow-sm rounded p-2 focus:outline-none 
                    focus:border-primary focus:ring-1 focus:ring-violet-300"
                />
            )}
            {type === 'select' && (
                <select
                    className={`w-auto text-black border shadow-sm rounded p-2 focus:outline-none 
                    focus:border-primary focus:ring-1 focus:ring-violet-300 ${className}`}
                    name={name} onChange={onSelectChange}>
                    <option value="">{option}</option>
                    {items.map(item => (
                        <option
                            key={item.id}
                            value={item.value}>
                            {item.nombre}
                        </option>
                    ))}
                </select>
            )}
        </div>
    )
}

export default Input
