import React from 'react'

//animation
import { AnimationOnScroll } from 'react-animation-on-scroll'
import 'animate.css/animate.min.css'

const Hero = () => {
    return (
        <>
            <div className="w-1/2 mx-auto bg-black/60 blur-xl relative top-80 left-64 h-28"></div>
            <p className="text-center text-white text-4 absolute top-1/2 right-40">
                BIENVENIDO A AGROSIMBIÓTICA
            </p>

            <div className="mt-800 w-2/5 mx-auto text-white text-2xl">
                <AnimationOnScroll
                    animateIn="animate__shakeY"
                    animateOut="animate__fadeOut">
                    <p className="py-6">QUIÉNES SOMOS?</p>
                </AnimationOnScroll>
                <AnimationOnScroll
                    animateIn="animate__fadeIn"
                    animateOut="animate__fadeOut"
                    delay="300">
                    <p className="py-6">
                        AgroSimbiótica es un espacio tecnológico, que identifica oportunidades de
                        negocio en base a la conexión geográfica y características de residuos
                        generados por diferentes empresas para usarlos como recursos.
                    </p>
                </AnimationOnScroll>
                <AnimationOnScroll
                    animateIn="animate__fadeIn"
                    animateOut="animate__fadeOut"
                    delay="600">
                    <p>
                        Es una herramienta de decisión inteligente, que busca el beneficio mutuo en
                        la integración de los actores de la cadena, optimizando el uso de los
                        recursos y disminuyendo la generación de residuos.
                    </p>
                </AnimationOnScroll>
                <AnimationOnScroll
                    animateIn="animate__fadeIn"
                    animateOut="animate__fadeOut"
                    delay="900">
                    <p className="py-6">
                        Así, se podrá entregar a cada empresa que contrate nuestros servicios, de
                        manera optimizada y personalizada, y por tanto ahorrando dinero y tiempo,
                        nuevas oportunidades de negocios a través de la valorización de sus residuos
                        como materia prima en otros procesos.
                    </p>
                </AnimationOnScroll>
            </div>
        </>
    )
}

export default Hero
