import React, { useState } from 'react'
import uuid from 'react-uuid'
import Button from '../UI/Button'
import Card from '../UI/Card'

const Pregunta = ({ preguntas, respuestas }) => {
    const [numeroAmbito, setNumeroAmbito] = useState(1)
    const [diagnostico, setDiagnostico] = useState({
        '1.1.1': '',
        '1.1.2': '',
        '1.2.1': '',
        '1.2.2': '',
        '1.2.3': '',
        '1.2.4': '',
        '1.3.1': '',
        '1.3.2': '',
        '2.1.1': '',
        '2.1.2': '',
        '2.1.3': '',
        '2.1.4': '',
        '2.1.5': '',
        '2.1.6': '',
        '2.2.1': '',
        '2.2.2': '',
        '2.2.3': '',
        '2.3.1': '',
        '3.1.1': '',
        '3.2.1': '',
        '3.2.2': '',
        '3.2.3': '',
        '3.3.1': '',
        '3.3.2': '',
        '4.1.1': '',
        '4.2.1': '',
        '4.3.1': '',
        '4.3.2': '',
        '5.1.1': '',
        '5.1.2': '',
        '5.1.3': '',
        '5.2.1': '',
        '5.2.2': '',
        '5.3.1': '',
        '5.3.2': '',
        '6.1.1': '',
        '6.1.2': '',
        '6.2.1': '',
        '6.2.2': '',
        '6.3.1': '',
        '6.3.2': '',
        '7.1.1': '',
        '7.1.2': '',
        '7.1.3': '',
        '7.1.4': '',
        '7.2.1': '',
        '7.3.1': '',
    })


    const clickHandler = () => {
        setNumeroAmbito(prevState => prevState + 1)
        window.scroll(0, 0)
    }
    const clickBackHandler = () => {
        setNumeroAmbito(prevState => prevState - 1)
        window.scroll(0, 0)
    }

    const changeHandler = (event) => {
        setDiagnostico({
            ...diagnostico, [event.target.name]: event.target.value
        })
    }

    const submitHandler = (event) => {
        event.preventDefault()
        console.log(diagnostico)
    }

    const ambitos = preguntas.ambitos.map((a, i) => {

        if (numeroAmbito === i + 1) {
            return (
                <Card key={a.id} className='container'>
                    <p className='underline text-2xl'>Ámbito: {a.ambito}</p>
                    {a.temas.map((t) => {
                        return (
                            <Card key={t.id} className='bg-slate-200'>
                                <p className='text-xl'>Tema: {t.tema}</p>
                                {t.cuestiones.map((c, ci) => {
                                    return (
                                        <Card key={c.id} className='bg-white'>
                                            <p>Cuestión {c.id} - {c.cuestion}</p>
                                            {respuestas.respuestas.map((m, i) => {
                                                return (
                                                    <div className='continer mx-20 p-2 flex flex-row gap-4' key={c.id + i}>
                                                        <input type="radio" name={c.id} id={c.id + i} value={i + 1} onChange={changeHandler} />
                                                        <label htmlFor={c.id + i}>{m}</label>
                                                    </div>
                                                )
                                            })}
                                        </Card>
                                    )
                                })}
                            </Card>
                        )
                    })}
                </Card >

            )
        }
        return
    })

    return (
        <form onSubmit={submitHandler} className='container'>
            {ambitos}
            {numeroAmbito !== 7 && (
                <div className='flex flex-row-reverse justify-between text-xl'>
                    <Button type='button' title='Siguiente ámbito' clickHandler={clickHandler} />
                    {numeroAmbito > 1 && <Button type='button' title='Ámbito anterior' clickHandler={clickBackHandler} />}
                </div>
            )}
            {numeroAmbito === 7 && <Button type='submit' title="finalizar" />}
        </form>
    )

}

export default Pregunta
