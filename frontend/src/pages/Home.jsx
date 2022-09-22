import React from 'react'
import Contacto from '../components/Contacto'
import Hero from '../components/Hero'
import Publicaciones from '../components/Publicaciones'
import Exito from '../components/Exito'

const Home = () => {
    return (
        <div>
            <Hero />
            <main className="flex flex-col justify-around mt-150 text-white skew-y-6">
                <div className="bg-back5 object-cover">
                    <div className="flex flex-row justify-center items-center mb-40 -skew-y-6">
                        <div className="w-1/2">
                            <h1 className="text-4xl text-end px-40 pb-6 font-Josefin">
                                Cómo funciona?
                            </h1>
                            <p className="text-xl text-end px-40">
                                Si eres productor de residuos orgánicos, deberás logearte cargando
                                solo el nombre de tu empresa, tu actividad, y que residuos tienes.
                                De esta manera entras a nuestra base de datos para generar
                                conexiones. Si buscas materiales para tus procesos, busca dentro de
                                nuestra oferta lo que necesites, y nosotros te lo llevaremos a dónde
                                estés.
                            </p>
                        </div>
                        <div className="bg-agro1 bg-no-repeat h-96 w-1/2"></div>
                    </div>
                    <div className="flex flex-row-reverse justify-center items-center mb-40 -skew-y-6">
                        <div className="">
                            <p className="text-2xl text-start p-40">
                                Nuestra plataforma hará la conexión más conveniente entre la oferta
                                y la demanda, para generar sinergia y así ahorrar tiempo, espacio y
                                dinero mejorando el desempeño de tu empresa.
                            </p>
                        </div>
                        <div className="bg-agro2 bg-no-repeat h-96 w-full"></div>
                    </div>
                    <div className="flex flex-row justify-center items-center mb-40 -skew-y-6">
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
