import React, { useState } from 'react'

import Button from '../UI/Button'
import Card from '../UI/Card'

const Pregunta = ({ preguntas, respuestas, radar }) => {
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

        const adquisiciones_sostenibles = [
            { ambiental: [] },
            { economico: [] },
            { social: [] }
        ]
        const ecodiseno = [
            { ambiental: [] },
            { economico: [] },
            { social: [] }
        ]
        const simbiosis_industrial = [
            { ambiental: [] },
            { economico: [] },
            { social: [] }
        ]
        const economia_funcional = [
            { ambiental: [] },
            { economico: [] },
            { social: [] }
        ]
        const consumo_responsable = [
            { ambiental: [] },
            { economico: [] },
            { social: [] }
        ]
        const prorroga_uso = [
            { ambiental: [] },
            { economico: [] },
            { social: [] }
        ]
        const gestion_eficiente = [
            { ambiental: [] },
            { economico: [] },
            { social: [] }
        ]

        for (let res in diagnostico) {
            const ambito = res.substring(0, 3)

            switch (ambito) {
                case "1.1":
                    let ambiental = adquisiciones_sostenibles[0].ambiental
                    ambiental.push(diagnostico[res])
                    break
                case "1.2":
                    adquisiciones_sostenibles[1].economico.push(diagnostico[res])
                    break
                case "1.3":
                    adquisiciones_sostenibles[2].social.push(diagnostico[res])
                    break
                case "2.1":
                    ecodiseno[0].ambiental.push(diagnostico[res])
                    break
                case "2.2":
                    ecodiseno[1].economico.push(diagnostico[res])
                    break
                case "2.3":
                    ecodiseno[2].social.push(diagnostico[res])
                    break
                case "3.1":
                    simbiosis_industrial[0].ambiental.push(diagnostico[res])
                    break
                case "3.2":
                    simbiosis_industrial[1].economico.push(diagnostico[res])
                    break
                case "3.3":
                    simbiosis_industrial[2].social.push(diagnostico[res])
                    break
                case "4.1":
                    economia_funcional[0].ambiental.push(diagnostico[res])
                    break
                case "4.2":
                    economia_funcional[1].economico.push(diagnostico[res])
                    break
                case "4.3":
                    economia_funcional[2].social.push(diagnostico[res])
                    break
                case "5.1":
                    consumo_responsable[0].ambiental.push(diagnostico[res])
                    break
                case "5.2":
                    consumo_responsable[1].economico.push(diagnostico[res])
                    break
                case "5.3":
                    consumo_responsable[2].social.push(diagnostico[res])
                    break
                case "6.1":
                    prorroga_uso[0].ambiental.push(diagnostico[res])
                    break
                case "6.2":
                    prorroga_uso[1].economico.push(diagnostico[res])
                    break
                case "6.3":
                    prorroga_uso[2].social.push(diagnostico[res])
                    break
                case "7.1":
                    gestion_eficiente[0].ambiental.push(diagnostico[res])
                    break
                case "7.2":
                    gestion_eficiente[1].economico.push(diagnostico[res])
                    break
                case "7.3":
                    gestion_eficiente[2].social.push(diagnostico[res])
                    break
                default:
                    break
            }
        }


        const puntosRadar = {
            adquisiciones_sostenibles, ecodiseno, simbiosis_industrial, economia_funcional,
            consumo_responsable, prorroga_uso, gestion_eficiente
        }
        radar(puntosRadar)
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
                                {t.cuestiones.map((c) => {
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

            )}
        return null
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
            {numeroAmbito === 7 && <Button type='submit' title="Finalizar" className='text-xl text-center' />}
        </form>
    )

}

export default Pregunta
