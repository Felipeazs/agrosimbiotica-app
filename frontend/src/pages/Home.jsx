import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import Contacto from '../components/Contacto'
import Hero from '../components/Hero'
import Publicaciones from '../components/Publicaciones'
import Exito from '../components/Exito'

const Home = () => {
    const { pathname } = useLocation()

    useEffect(() => {
        console.log(pathname)
    }, [pathname])



    return (
        <div>
            <Hero />

            <main className="flex flex-col justify-around text-white ">
                <div className="bg-back5 object-cover">
                    <div className="custom-shape-divider-top-1663882523 mt-20">
                        <svg
                            data-name="Layer 1"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 1200 120"
                            preserveAspectRatio="none">
                            <path
                                d="M1200 0L0 0 598.97 114.72 1200 0z"
                                className="shape-fill"></path>
                        </svg>
                    </div>
                    <div
                        className="flex flex-row justify-center items-center mb-20"
                        id="how">
                        <div className="w-1/2">
                            <h1 className="text-4xl text-end px-40 pb-6">Cómo funciona?</h1>
                            <p className="text-xl text-end px-20 font-Josefin">
                                Si eres productor de residuos orgánicos, deberás ingresar cargando
                                solo el nombre de tu empresa, tu actividad, y que residuos tienes.
                                De esta manera entras a nuestra base de datos para generar
                                conexiones. Si buscas materiales para tus procesos, busca dentro de
                                nuestra oferta lo que necesites, y nosotros te lo llevaremos a dónde
                                estés.
                            </p>
                        </div>
                        <div className="bg-agro1 bg-no-repeat h-96 w-1/2"></div>
                    </div>
                    <div className="flex flex-row-reverse justify-center items-center mb-20">
                        <div className="">
                            <p className="text-2xl text-start p-40">
                                Nuestra plataforma hará la conexión más conveniente entre la oferta
                                y la demanda, para generar sinergia y así ahorrar tiempo, espacio y
                                dinero mejorando el desempeño de tu empresa.
                            </p>
                        </div>
                        <div className="bg-agro2 bg-no-repeat h-96 w-full bg-cover"></div>
                    </div>
                    <div className="flex flex-row justify-center items-center">
                        <div className="">
                            <p className="text-2xl text-end p-40">
                                Oferta o has tu compra en nuestro Marketplace! Crea tu usuario y así
                                podrás conectar con nuevas posibilidades de negocio, podrás
                                visualizar tus transacciones, los ahorros y el impacto positivo que
                                está generando en el medio ambiente.
                            </p>
                        </div>
                        <div className="bg-agro3 bg-no-repeat h-96 w-full"></div>
                    </div>
                </div>
                <Contacto />
                <Publicaciones />
                <Exito />
            </main>
        </div>
    )
}

export default Home
