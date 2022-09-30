import React from 'react'

import Button from '../UI/Button'
import Card from '../UI/Card'

const Producto = ({ item }) => {
    return (
        <Card className='w-300 relative'>
            <img className='absolute top-0 left-0 rounded-t h-200' src={item.image} alt={item.residuo} />
            <div className='mt-200'>
                <p>producto: {item.residuo}</p>
                <p>contenedor: {item.contenedor}</p>
                <p>cantidad: {item.kilos}</p>
                <p>proveedor: {item.proveedor}</p>
                <p>publicación: {item.fecha_publicacion}</p>
                <Button title='Contactar' />
            </div>

        </Card>
    )
}

export default Producto
