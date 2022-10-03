import React, { useState } from 'react'

//components
import Input from '../components/UI/Input'
import Button from '../components/UI/Button'
import Productos from '../components/productos/Productos'

//data
import residuos from '../data/productos.json'
import data from '../data/contenedores.json'

const Marketplace = () => {
    const [busqueda, setBusqueda] = useState({
        residuo: '',
        contenedor: '',
    })
    const [displaySearch, setDisplaySearch] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [displayErrorMessage, setDisplayErrorMessage] = useState('')
    const [error, setError] = useState(false)

    const { residuo, contenedor } = busqueda

    const changeHandler = (event) => {
        setError(false)
        setErrorMessage('')
        setBusqueda({ ...busqueda, [event.target.name]: event.target.value })
    }

    const submitHandler = (event) => {
        event.preventDefault()
        setDisplayErrorMessage('')

        if (residuo.trim().length === 0) {
            setErrorMessage('Por favor, ingresa el residuo que estas buscando')
            return
        }

        const searchedProduct = residuos.datos.find(prod => prod.residuo === residuo)
        if (searchedProduct === undefined || searchedProduct === null) {
            setError(true)
            setDisplayErrorMessage(`El residuo ${residuo} no se encuentra`)
            return
        }

        const searchedContainer = residuos.datos.find(prod => prod.contenedor === contenedor)
        console.log(searchedContainer)
        if (searchedContainer === undefined || searchedContainer === null) {
            setDisplayErrorMessage('El residuo se encuentra pero no en el envase o contenedor que buscas. Creemos que los siguientes contenedores te podrían interesar')
        }

        setDisplaySearch(true)
    }


    return <div className="container py-40">
        <div className='border flex flex-col rounded'>
            <div className='relative flex flex-row justify-between items-center p-20 bg-gray-100
                h-24'>
                <div className='w-full'>
                    <Input
                        type='text'
                        className='w-full py-4'
                        name='residuo'
                        placeholder='Busca el residuo que necesitas'
                        onInputChange={changeHandler} />
                </div>

                <form onSubmit={submitHandler}>
                    <Input
                        type='select'
                        option='selecciona el contenedor'
                        items={data.contenedorItems}
                        className='absolute right-48 bottom-16'
                        name='contenedor'
                        onSelectChange={changeHandler} />
                    <Button
                        title='Buscar'
                        type='submit'
                        bgColor='bg-white'
                        textColor='text-black'
                        hoverBgColor='hover:bg-secondary'
                        hoverTextColor='hover:text-white'
                        className='absolute right-24 bottom-13'
                        disabled={false} />
                </form>
                <p className='absolute top-28 text-red-500'>{errorMessage}</p>
            </div>

            <div className='h-full'>
                <>
                    {!error && displaySearch &&
                        <p className='font-black text-2xl pt-4 pl-20'>
                            Residuo encontrado: {residuo}
                        </p>}
                    {error &&
                        <p className='font-black text-2xl pt-4 pl-20'>
                            {displayErrorMessage}
                        </p>}
                    {!error && displaySearch &&
                        <p className='text-xl pl-20 pr-40'>
                            {displayErrorMessage}
                        </p>}
                    {!error && displaySearch &&
                        <Productos items={residuos} />}
                </>
            </div>
        </div>
    </div>
}

export default Marketplace
