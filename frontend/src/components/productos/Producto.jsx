import React from 'react'
import { useNavigate } from 'react-router-dom'

//components
import Card from '../UI/Card'
import Button from '../UI/Button'

const Producto = ({ item }) => {
    const navigate = useNavigate()

    const clickHandler = () => {
        console.log('click', item.id)
        navigate(`/marketplace/producto/${item.id}`)
    }

    return (
        <Card className='flex flex-row mx-auto border-2 border-transparent active:border-2  
            hover:shadow-2xl hover:cursor-pointer hover:scale-105 relative'
            onClick={clickHandler}>
            <img className='rounded-l h-full w-1/2 object-cover absolute top-0 left-0' src={item.image}
                alt={item.residuo} />
            <div className='ml-300'>
                <p>residuo: {item.residuo}</p>
                <p>contenedor: {item.contenedor}</p>
                <p>cantidad: {item.kilos}</p>
                <p>proveedor: {item.proveedor}</p>
                <p>publicación: {item.fecha_publicacion}</p>
                <Button title='Contactar' bgColor='bg-white' hoverBgColor='hover:bg-secondary'
                    hoverTextColor='hover:text-white' />
            </div>

        </Card>
    )
}

export default Producto
