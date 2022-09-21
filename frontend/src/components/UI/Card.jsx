import React from 'react'

const Card = ({ children }) => {
    return <div className="flex flex-col bg-white border rounded-lg p-10 shadow-lg">{children}</div>
}

export default Card
