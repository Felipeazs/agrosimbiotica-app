import React, { useState, useEffect } from 'react'

//data
import data from '../data/regiones.json'

//components
import ButtonCard from '../components/UI/ButtonCard'
import Button from '../components/UI/Button'
import Input from '../components/UI/Input'

//images and logos
import { ReactComponent as PlantIcon } from '../assets/imgs/plant.svg'
import { ReactComponent as FoodIcon } from '../assets/imgs/food.svg'
import { ReactComponent as BottleIcon } from '../assets/imgs/bottle.svg'
import { ReactComponent as BeerIcon } from '../assets/imgs/beer.svg'
import { ReactComponent as DotIcon } from '../assets/imgs/dot.svg'
import { ReactComponent as LiquidIcon } from '../assets/imgs/liquid.svg'
import { ReactComponent as SolidIcon } from '../assets/imgs/solids.svg'
const tractor = require('../assets/imgs/tractor.webp')
const logo = require('../assets/logo/logo.png')

const Evaluacion = () => {
    const [rubros, setRubros] = useState([])
    const [tipos, setTipos] = useState([])
    const [region, setRegion] = useState('')
    const [email, setEmail] = useState('')
    const [disabled, setDisabled] = useState(true)
    const [success, setSuccess] = useState(false)

    useEffect(() => {
        window.scroll(0, 0)

    }, [])

    const onClickSelectRubro = rubro => {
        const isRubro = rubros.find(r => r === rubro)

        if (isRubro) {
            if (rubros.length === 1) {
                setDisabled(true)
            }
            return setRubros(rubros.filter(r => r !== rubro))
        }
        setRubros(prevState => [...prevState, rubro])

        if (tipos.length > 0 && region.trim().length > 0 && email.trim().length > 0) {
            setDisabled(false)
        }
    }
    const onClickSelectTipo = tipo => {
        const isTipo = tipos.find(t => t === tipo)

        if (isTipo) {
            if (tipos.length === 1) {
                setDisabled(true)
            }
            return setTipos(tipos.filter(t => t !== tipo))
        }

        setTipos(prevState => [...prevState, tipo])

        if (rubros.length > 0 && region.trim().length > 0 && email.trim().length > 0) {
            setDisabled(false)
        }
    }

    const onSelectChange = event => {
        if (rubros.length > 0 && tipos.length > 0 && email.trim().length > 0) {
            setDisabled(false)
        }

        if (event.target.value === '') {
            setDisabled(true)
        }
        setRegion(event.target.value)
    }

    const onInputChange = event => {
        if (rubros.length > 0 && tipos.length > 0 && region.trim().length > 0) {
            setDisabled(false)
        }

        if (event.target.value === '') {
            setDisabled(true)
        }

        setEmail(event.target.value)
    }

    const submitHandler = event => {
        event.preventDefault()

        const evaluacion = {
            rubros: new Set(rubros),
            tipos: new Set(tipos),
            region: region,
        }
        console.log(evaluacion)
        setSuccess(true)
        window.scroll(0, 0)
    }

    return (
        <div className="container text-white py-40">
            <div className="flex flex-row h-1000 border rounded-md">
                <div className="w-1/2 relative z-0">
                    <img
                        src={tractor}
                        alt="tractor"
                        className="w-full h-full object-cover rounded-tl-md rounded-bl-md"
                    />

                    <div className="flex flex-col absolute top-0 gap-16 p-10 text-lg z-10 text-center">
                        <img
                            src={logo}
                            alt="logo"
                            className="w-1/2 mx-auto"
                        />
                        <p className="text-2xl">¿Eres un productor de residuos?</p>
                        <p>Evalúa tus oportunidades para generar nuevos negocios.</p>
                        <p>
                            ¿Sabías que tus residuos pueden ser material valioso para otras
                            empresas?
                        </p>
                        <p>
                            Nosotros te ayudaremos a buscar la mejor opción para mejorar tu
                            desempeño ambiental al mismo tiempo que ahorras dinero.
                        </p>
                    </div>
                </div>

                <div className="w-full mt-20 pl-20">
                    {success && <p className='text-black font-black text-4xl text-center p-40'>
                        Sus datos han sido ingresados con éxito!!</p>}
                    {!success && (
                        <>
                            <p className="text-black font-black text-2xl">Rubro</p>
                            <form onSubmit={submitHandler}>
                                <div className="flex flex-row flex-wrap justify-start items-center
                                    gap-5 text-black pb-10">
                                    <ButtonCard
                                        mode="button"
                                        id="plantas"
                                        onClickSelect={onClickSelectRubro}>
                                        <p>Cultivo de plantas</p>
                                        <PlantIcon />
                                    </ButtonCard>
                                    <ButtonCard
                                        mode="button"
                                        id="alimentos"
                                        onClickSelect={onClickSelectRubro}>
                                        <p>Procesamiento de alimentos</p>
                                        <FoodIcon />
                                    </ButtonCard>
                                    <ButtonCard
                                        mode="button"
                                        id="bebidas sin alcohol"
                                        onClickSelect={onClickSelectRubro}>
                                        <p>Fabr. de bebidas no alcohólicas</p>
                                        <BottleIcon />
                                    </ButtonCard>
                                    <ButtonCard
                                        mode="button"
                                        id="bebidas con alcohol"
                                        onClickSelect={onClickSelectRubro}>
                                        <p>Fabr. de bebidas alcohólicas</p>
                                        <BeerIcon />
                                    </ButtonCard>
                                    <ButtonCard
                                        mode="button"
                                        id="otra"
                                        onClickSelect={onClickSelectRubro}>
                                        <p>Otro</p>
                                        <DotIcon />
                                    </ButtonCard>
                                </div>

                                <p className="text-black font-black text-2xl">Tipo de Residuo</p>
                                <div className="flex flex-row flex-wrap items-center gap-5 text-black pb-10">
                                    <ButtonCard
                                        mode="button"
                                        id="líquidos"
                                        onClickSelect={onClickSelectTipo}>
                                        <p>Líquidos</p>
                                        <LiquidIcon />
                                    </ButtonCard>
                                    <ButtonCard
                                        mode="button"
                                        id="sólidos"
                                        onClickSelect={onClickSelectTipo}>
                                        <p>Sólidos</p>
                                        <SolidIcon />
                                    </ButtonCard>
                                </div>

                                <p className="text-black font-black text-2xl">Región del país</p>
                                <div className="w-300 text-black ">
                                    <Input
                                        type="select"
                                        option='Selecciona la región'
                                        items={data.regiones}
                                        onSelectChange={onSelectChange}
                                    />
                                </div>

                                <p className="text-black font-black text-2xl mt-20">Contacto</p>
                                <div className="w-300 text-black ">
                                    <Input
                                        type="text"
                                        placeholder="Ingresa tu email"
                                        onInputChange={onInputChange}
                                    />
                                </div>
                                <div className="text-center mt-20">
                                    <Button
                                        type='submit'
                                        title="Enviar"
                                        disabled={disabled}
                                        bgColor="bg-white"
                                        textColor="text-black"
                                        hoverBgColor="hover:bg-quaternary"
                                        hoverTextColor="hover:text-white"
                                    />
                                </div>
                            </form>

                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Evaluacion
