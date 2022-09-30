import React, { useState } from 'react'
import Input from '../components/UI/Input'
import Button from '../components/UI/Button'
import Productos from '../components/productos/Productos'

import productos from '../data/productos.json'
import data from '../data/contenedores.json'


const Marketplace = () => {
    const [busqueda, setBusqueda] = useState({
        producto: '',
        contenedor: '',
    })
    const [displaySearch, setDisplaySearch] = useState(false)

    const { producto } = busqueda

    const changeHandler = (event) => {
        setBusqueda({ ...busqueda, [event.target.name]: event.target.value })
    }
    const submitHandler = (event) => {
        event.preventDefault()
        setDisplaySearch(true)
    }

    const clickHandler = () => {
    }

    return <div className="container py-40">
        <div className='border flex flex-col rounded'>
            <div className='relative flex flex-row justify-between items-center p-20 bg-gray-100
                h-24'>
                <div className='w-full'>
                    <Input type='text' className='w-full 
                    py-4' name='producto' placeholder='Busca el residuo que necesitas'
                        onInputChange={changeHandler} />
                </div>

                <form onSubmit={submitHandler}>
                    <Input type='select'
                        option='selecciona el contenedor'
                        items={data.contenedorItems}
                        className='absolute right-48 bottom-16 border-none '
                        name='contenedor'
                        onSelectChange={changeHandler} />
                    <Button title='Buscar'
                        bgColor='bg-white'
                        textColor='text-black'
                        hoverBgColor='hover:bg-secondary'
                        hoverTextColor='hover:text-white'
                        className='absolute right-24 bottom-13'
                        clickHandler={clickHandler}
                        disabled={false} />
                </form>
            </div>

            <div className='h-full'>
                {displaySearch &&
                    <>
                        <p className='font-black text-2xl pt-4 pl-20'>Producto: {producto}</p>
                        <Productos items={productos} />
                    </>}
            </div>
        </div>
    </div>
}

export default Marketplace
