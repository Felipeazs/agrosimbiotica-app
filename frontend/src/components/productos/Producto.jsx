import React from 'react'

//components
import Card from '../UI/Card'
import Button from '../UI/Button'

const Producto = ({ item }) => {

    return (
        <Card className='flex flex-row gap-10'>
            <img className='rounded-t h-200' src={item.image} 
                alt={item.residuo} />
            <div className=''>
                <p>residuo: {item.residuo}</p>
                <p>contenedor: {item.contenedor}</p>
                <p>cantidad: {item.kilos}</p>
                <p>proveedor: {item.proveedor}</p>
                <p>publicación: {item.fecha_publicacion}</p>
                <Button title='Contactar' hoverBgColor='hover:bg-secondary' 
                    hoverTextColor='hover:text-white'/>
            </div>

        </Card>
    )
}

export default Producto
