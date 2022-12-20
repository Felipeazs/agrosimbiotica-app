import React from 'react'

const Input = ({ label, labels, type, name, value, option, placeholder, items, onSelectChange, onInputChange, onRadioChange, onCheckChange, className }) => {
    return (
        <div className={`flex flex-col py-2 w-full ${className}`}>
            <label htmlFor="" className="font-bold">{label}</label>
            {labels &&
                <div className="py-5">
                    {labels.map((l, i) =>
                        <p key={i}>{l}</p>
                    )}
                </div>
            }
            {type === 'text' && (
                <input
                    type={type}
                    name={name}
                    value={value}
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
                    className={`w-auto text-black border shadow-sm rounded p-5 focus:outline-none 
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

            {type === 'radio' && (
                items.map(i =>
                    <div className="flex flex-row-reverse justify-end items-baseline gap-5" key={i.id}>
                        <label htmlFor={`${i.value}${name}`}>{i.nombre}</label>
                        <input type={type} id={`${i.value}${name}`} name={name} value={i.value} onChange={onRadioChange} />
                    </div>
                )
            )}

            {type === 'checkbox' && (
                items.map(i =>
                    <div className="flex flex-row-reverse justify-end gap-5" key={i.id}>
                        <label htmlFor={`${i.value}${name}`}>{i.nombre}</label>
                        <input type={type} id={`${i.value}${name}`} name={name} value={i.value} onChange={onCheckChange} />
                    </div>
                )
            )}
        </div>
    )
}

export default Input
