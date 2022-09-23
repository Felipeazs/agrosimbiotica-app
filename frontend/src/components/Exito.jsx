import React from 'react'

//animation
import { AnimationOnScroll } from 'react-animation-on-scroll'
import 'animate.css/animate.min.css'

//data
import exitos from '../data/exito.json'

const Exito = () => {
    return (
        <div
            className="text-center py-40 bg-slate-800 rounded-tr-150"
            id="exito">
            <p className="text-4 pb-10 underline">Casos de éxito</p>

            <div className="container flex flex-row justify-center items-center gap-20 flex-wrap ">
                {exitos.data.map(e => (
                    <AnimationOnScroll
                        animateIn="animate__fadeInLeftBig"
                        animateOut="animate__fadeOutRightBig"
                        delay={`${e.id * 200}`}
                        key={e.id}>
                        <img
                            src={e.url}
                            alt={e.nombre}
                            width="200"
                            className=""
                        />
                    </AnimationOnScroll>
                ))}
            </div>
        </div>
    )
}

export default Exito
