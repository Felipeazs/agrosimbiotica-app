import React, { useState } from 'react'

//data
import preguntas from '../../data/diagnostico.json'
import respuestas from '../../data/respuestas.json'

//componentes
import Pregunta from './Pregunta'
import Button from '../UI/Button'
import Chart from './Chart'


const Preguntas = () => {
    const [puntosRadar, setPuntosRadar] = useState()

    const resultados = (res) => {
        console.log(res)

        for (let i in res) {
            for (let a of res[i]) {
                for (let b in a) {
                    let total = a[b].reduce((prev, next) => +prev + +next, 0)
                    total = total / a[b].length
                    a[b].splice(0, a[b].length, total)
                }
            }
        }
        setPuntosRadar(res)
    }

    const clickHandler = () => {
        setPuntosRadar()
    }

    return (
        <>
            {!puntosRadar && <Pregunta preguntas={preguntas} respuestas={respuestas} radar={resultados} />}
            {puntosRadar && (
                <div className='container'>
                    <Button title='Volver al diagnóstico' clickHandler={clickHandler}
                        className='font-black text-lg' />
                    <Chart puntosRadar={puntosRadar} />
                </div>
            )}
        </>
    )
}

export default Preguntas
