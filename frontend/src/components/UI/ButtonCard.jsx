import React, { useState } from 'react'

const ButtonCard = ({ children, id, onClickSelect }) => {
    const [btnBorder, setBtnBorder] = useState('')

    const clickHandler = () => {
        onClickSelect(id)

        setBtnBorder(() => {
            if (btnBorder === '') {
                return 'button border-2 border-black bg-sixth/10'
            } else {
                return ''
            }
        })
    }
    return (
        <button
            onClick={clickHandler}
            type="button"
            id={id}
            className={`${btnBorder} flex flex-col w-40 h-40 py-5 px-3 text-center justify-between 
                 items-center border rounded-md shadow-lg hover:shadow-2xl hover:scale-105`}>
            {children}
        </button>
    )
}

export default ButtonCard
