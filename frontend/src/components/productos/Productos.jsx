import React from 'react'

//components
import Producto from './Producto'

const Productos = ({ items }) => {
    const prductos = items.map(item => <Producto key={item.id} item={item} />)

    return (
        <div className='p-20 flex flex-col justify-items-start gap-10 flex-wrap'>
            {prductos}
        </div>
    )
}

export default Productos
