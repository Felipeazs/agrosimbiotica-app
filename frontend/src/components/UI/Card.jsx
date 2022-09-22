import React from 'react'

const Card = ({ children, background }) => {
    return (
        <div className={`flex flex-col ${background} border rounded-lg p-10 mt-10 shadow-lg`}>
            
            {children}
        </div>
    )
}

export default Card
