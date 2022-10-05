import React from 'react'

//components
import Producto from './Producto'

const Productos = ({ items }) => {
    const productos = items.map(item => <Producto key={item.id} item={item} />)

    return (
        <div className='p-10 flex flex-row  flex-wrap'>
            {productos}
        </div>
    )
}

export default Productos
