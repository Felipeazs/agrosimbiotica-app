import React from 'react'

const tractor = require('../assets/imgs/tractor.png')
const logo = require('../assets/logo/logo.png')

const Evaluacion = () => {
    return (
        <div className="container text-white py-40">
            <div className="flex flex-row h-1000">
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
                <div className="bg-white w-full opacity-80">form</div>
            </div>
        </div>
    )
}

export default Evaluacion
