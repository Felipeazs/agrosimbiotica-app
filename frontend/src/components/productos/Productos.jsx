import React from 'react'

import Producto from './Producto'

const Productos = ({ items }) => {
    const prods = items.datos.map(item => <Producto key={item.id} item={item} />)

    return <div className='p-20 flex flex-row justify-items-start gap-10 flex-wrap'>{prods}</div>
}

export default Productos
