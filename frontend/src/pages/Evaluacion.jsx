import React from 'react'

import data from '../data/regiones.json'

import Card from '../components/UI/Card'
import Input from '../components/UI/Input'

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
    return (
        <div className="container text-white py-40">
            <div className="flex flex-row h-1000 border">
                <div className="w-1/2 relative z-0">
                    <img
                        src={tractor}
                        alt="tractor"
                        className="w-full h-full object-cover"
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
                            Nosotros te ayudaremos a buscar tu mejor opción para mejorar tu
                            desempeño ambiental al mismo tiempo que ahorras dinero.
                        </p>
                    </div>
                </div>
                <div className="w-full mt-20">
                    <p className="text-black ml-40 font-black text-2xl">Rubro</p>
                    <div className="flex flex-row flex-wrap justify-center items-center gap-5 text-black pb-10">
                        <Card mode="button">
                            <p>Cultivo de plantas</p>
                            <PlantIcon />
                        </Card>
                        <Card mode="button">
                            <p>Procesamiento de alimentos</p>
                            <FoodIcon />
                        </Card>
                        <Card mode="button">
                            <p>Fabr. de bebidas no alcohólicas</p>
                            <BottleIcon />
                        </Card>
                        <Card mode="button">
                            <p>Fabr. de bebidas alcohólicas</p>
                            <BeerIcon />
                        </Card>
                        <Card mode="button">
                            <p>Otra</p>
                            <DotIcon />
                        </Card>
                    </div>
                    <p className="text-black ml-40 font-black text-2xl">Tipo de Residuo</p>
                    <div className="flex flex-row flex-wrap justify-center items-center gap-5 text-black pb-10">
                        <Card mode="button">
                            <p>Líquidos</p>
                            <LiquidIcon />
                        </Card>
                        <Card mode="button">
                            <p>Sólidos</p>
                            <SolidIcon />
                        </Card>
                    </div>
                    <p className="text-black ml-40 font-black text-2xl">Región del país</p>
                    <div className="flex flex-row flex-wrap justify-center items-center gap-5 text-black ">
                        <Input
                            type="select"
                            items={data.regiones}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Evaluacion
