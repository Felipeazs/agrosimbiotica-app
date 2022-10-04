import React, { useEffect } from 'react'

//data
import preguntas from '../../data/diagnostico.json'
import respuestas from '../../data/respuestas.json'

//componentes
import Pregunta from './Pregunta'


const Preguntas = () => {
    console.log(respuestas)
    return (
        <Pregunta preguntas={preguntas} respuestas={respuestas} />
    )
}

export default Preguntas
