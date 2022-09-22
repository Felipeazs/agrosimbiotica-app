import React from 'react'

//animation
import { AnimationOnScroll } from 'react-animation-on-scroll'
import 'animate.css/animate.min.css'

//data
import exitos from '../data/exito.json'

const Exito = () => {
    return (
        <AnimationOnScroll
            animateIn="animate__fadeInUp"
            delay="300">
            <div className="text-center -skew-y-6 py-20 mb-40 bg-slate-800 rounded-tl-full rounded-br-full">
                <p className="text-4 pb-10 underline">Casos de éxito</p>
                <div className="container flex flex-row justify-center items-center gap-20 flex-wrap ">
                    {exitos.data.map(e => (
                        <img
                            key={e.id}
                            src={e.url}
                            alt={e.nombre}
                            width="200"
                            className=""
                        />
                    ))}
                </div>
            </div>
        </AnimationOnScroll>
    )
}

export default Exito
