import React, { useState, useEffect } from 'react'

import Diagnostico from './Diagnostico'

import Card from '../components/UI/Card'
import Input from '../components/UI/Input'
import Button from '../components/UI/Button'

const options = [
    { id: 1, value: 'I', nombre: 'I Región de Tarapacá' },
    { id: 2, value: 'II', nombre: 'II Región de Antofagasta' },
    { id: 3, value: 'III', nombre: 'III Región de Atacama' },
    { id: 4, value: 'IV', nombre: 'IV Región de Coquimbo' },
    { id: 5, value: 'V', nombre: 'V Región de Valparaíso' },
    { id: 6, value: 'VI', nombre: 'VI Región de O\'Higgins' },
    { id: 7, value: 'VII', nombre: 'VII Región del Maule' },
    { id: 8, value: 'VIII', nombre: 'VIII Región del Biobio' },
    { id: 9, value: 'IX', nombre: 'IX Región de la Araucanía' },
    { id: 10, value: 'X', nombre: 'X Región de los Lagos' },
    { id: 11, value: 'XI', nombre: 'XI Región de Aysén' },
    { id: 12, value: 'XII', nombre: 'XII Región de Magallanes' },
    { id: 13, value: 'metropolitana', nombre: 'Región Metropolitana' },
    { id: 14, value: 'XIV', nombre: 'XIV Región de los Ríos' },
    { id: 15, value: 'XV', nombre: 'XV Región de Arica y Parinacota' }
]

const rubros = [
    { id: 16, value: 'cultivo de plantas', nombre: 'Cultivo de plantas' },
    { id: 17, value: 'procesamiento de alimentos', nombre: 'Procesamiento de alimentos' },
    { id: 18, value: 'fabricacion de bebidas no alcoholicas', nombre: 'Fabricación de bebidas no alcohólicas' },
    { id: 19, value: 'fabricación de bebidas alcoholicas', nombre: 'Fabricación de bebidas alcohólicas' },
    { id: 20, value: 'otro_rubro', nombre: 'Otro' }
]

const empresas_alrededor = [
    { id: 21, value: 1, nombre: 'Sí, las conozco bien' },
    { id: 22, value: 0.5, nombre: 'Sí, pero muy en general' },
    { id: 23, value: 0, nombre: 'No, no las conozco' },
]

const respuesta = [
    { id: 24, value: 1, nombre: 'Sí' },
    { id: 25, value: 0, nombre: 'No' }
]

const respuestas_2 = [
    { id: 26, value: 1, nombre: 'Sí, con metas asociadas' },
    { id: 27, value: 0.5, nombre: 'No, pero la empresa si tiene metas asociadas a este tema' },
    { id: 28, value: 0, nombre: 'No, no ha sido un tema de interés en la empresa' },
]

const respuestas_3 = [
    { id: 29, value: 1, nombre: 'Sí, es un tema que conocemos muy bien en la empresa' },
    { id: 30, value: 0.5, nombre: 'Lo conozco muy en general, no se cuál es su alcance específico' },
    { id: 31, value: 0, nombre: 'No la he escuchado' },
]

const respuestas_4 = [
    { id: 32, value: 1, nombre: 'Sí, en las política se declaran uno o más de estos temas' },
    { id: 33, value: 0, nombre: 'No, no de declaran en la política de sostenibilidad' }
]

const respuestas_5 = [
    { id: 34, value: 1, nombre: 'Sí, la empresa tiene al menos una de esas certificaciones' },
    { id: 35, value: 0, nombre: 'No, la empresa no tiene ninguna certificación en gestión ambiental o similar' }
]

const respuestas_6 = [
    { id: 36, value: 1, nombre: 'Sí, la empresa ya está trabajando con al menos una de ellas' },
    { id: '36b', value: 0.5, nombre: 'Sí, pero no han sido integrados' },
    { id: 37, value: 0, nombre: 'No, no se conocen en la empresa/no han sido integradas' }
]

const respuestas_7 = [
    { id: 38, value: 1, nombre: 'Sí, la empresa ya participó en al menos una de ellas' },
    { id: 39, value: 0, nombre: 'No, no se conocen en la empresa/no han sido integradas' }
]

const respuestas_8 = [
    { id: 40, value: 1, nombre: 'Sí, se cómo me puede ayudar' },
    { id: 41, value: 0.5, nombre: 'Quizás, no lo tengo claro' },
    { id: 42, value: 0, nombre: 'No, no lo sé pero me interesa profundizar en este tema' },
    { id: 43, value: -1, nombre: 'No, no lo sé y no es de interés de la empresa en este momento' }
]

const respuestas_9 = [
    { id: 44, value: 1, nombre: 'Sí, la empresa lo tiene cuantificado' },
    { id: 45, value: 0, nombre: 'No, la empresa no sabe cuánta energíá consume' },
]

const respuestas_10 = [
    { id: 46, value: 1, nombre: 'Sí, la empresa lo tiene cuantificado' },
    { id: 47, value: 0, nombre: 'No, la empresa no sabe cuánta agua consume' },
]

const respuestas_11 = [
    { id: 48, value: 1, nombre: 'Sí, la empresa lo tiene cuantificado' },
    { id: 49, value: 0.5, nombre: 'La empresa tiene identificado sólo algunos de los materiales que consume' },
    { id: 50, value: 0, nombre: 'No, la empresa no sabe cuánta materiales consume' },
]

const respuestas_12 = [
    { id: 51, value: 1, nombre: 'Sí, la empresa lo tiene cuantificado' },
    { id: 52, value: 0.5, nombre: 'La empresa tiene identificado sólo algunos de los impactos' },
    { id: 53, value: 0, nombre: 'No, la empresa no sabe cuales son los impactos de los materiales que consume' },
]
const respuestas_13 = [
    { id: 54, value: 1, nombre: 'Sí, lo tengo cuantificado' },
    { id: 55, value: 0.5, nombre: 'La empresa sabe cuáles residuos produce, pero no los ha cuantificado' },
    { id: 56, value: 0, nombre: 'No, la empresa no sabe cuantos residuos produce' },
]
const inorganicos = [
    { id: 57, value: 'papel, cartón y similares', nombre: 'Papel, cartón y similares (envases y embalajes)' },
    { id: 58, value: 'latas y/o metales en general', nombre: 'Latas y/o metales en general' },
    { id: 59, value: 'neumaticos', nombre: 'Neumáticos' },
    { id: 60, value: 'aceites y lubricantes', nombre: 'Aceites y lubricantes' },
    { id: 61, value: 'baterias y/o pilas', nombre: 'Baterias y/o pilas' },
    { id: 62, value: 'aparatos electronicos', nombre: 'Aparatos Electrónicos' },
    { id: 63, value: 'textiles y/o panos', nombre: 'Textiles y/o paños' },
]
const procedencia_organicos = [
    { id: 64, value: 'casino de empleados', nombre: 'Casino de empleados' },
    { id: 65, value: 'proceso productivo', nombre: 'Proceso productivo' },
    { id: 66, value: 'otro_residuo_organico', nombre: 'Otro' },
]
const organicos_problematicos = [
    { id: 67, value: 'si', nombre: 'Sí, pierdo tiempo en gestionarlo' },
    { id: 68, value: 'a veces', nombre: 'A veces, depende de la persona o empresa que viene a retirarlo' },
    { id: 69, value: 'no', nombre: 'No me es un problema, lo puedo gestionar bien' },
    { id: 70, value: 'otro_problema', nombre: 'Otro' },
]
const tipos_problemas = [
    { id: 71, value: 'economico', nombre: 'Económico. La empresa paga mucho por que se lo lleven' },
    { id: 72, value: 'ambiental', nombre: 'Ambiental. Genera focos de contaminación al intererior de la empresa' },
    { id: 73, value: 'Social', nombre: 'Social. A veces la contaminación traspasa los límites de la empresa e impacta en la comunidad' },
]

const acciones_residuo_problematico = [
    { id: 74, value: 'pago un gestor de residuos', nombre: 'Pago para que se lo lleve un gestor de residuos' },
    { id: 75, value: 'lo regalo', nombre: 'Lo regalo para que otras personas lo usen' },
    { id: 76, value: 'tratamiento interno', nombre: 'Tengo un sistema de tratamiento interno y lo reutilizo en otros procesos' },
    { id: 77, value: 'lo boto', nombre: 'Lo boto directamente a la basura domiciliaria' },
    { id: 78, value: 'otra_accion', nombre: 'Otro' },
]

const gastos_residuos_problematicos = [
    { id: 79, value: '< 100.000', nombre: 'menos de $100.000' },
    { id: 80, value: '$100.000 y $250.000', nombre: 'entre $100.000 y $250.000' },
    { id: 81, value: '$250.000 y $500.000', nombre: 'entre $250.000 y $500.000' },
    { id: 82, value: '> $500.000', nombre: 'más de $500.000' },
    { id: 83, value: 'gratis', nombre: 'lo retiran gratis' },
    { id: 84, value: 'otro_gasto', nombre: 'otro' }
]
const respuestas_14 = [
    { id: 85, value: 1, nombre: 'Sí, está caracterizado por un laboratorio externo/literatura' },
    { id: 86, value: 0, nombre: 'No, no se conoce lo que hay en el residuo que se genera' },
]
const respuestas_15 = [
    { id: 87, value: 1, nombre: 'Sí, se tienen procesos de revalorización en la empresa' },
    { id: 88, value: 0.5, nombre: 'Es de interés, pero no se ha avanzado en el tema aún' },
    { id: 89, value: 0, nombre: 'No es de interés en la empresa ' },
]
const respuestas_16 = [
    { id: 90, value: 1, nombre: 'Sí, se han investigado sus usos para el (o los) residuo(s) y ahora se necesita implementarlo' },
    { id: 91, value: 0.5, nombre: 'La empresa tiene la intención pero no sabe qué hacer con ellos' },
    { id: 92, value: 0, nombre: 'No es de interés en la empresa en estos momentos' },
]
const no_implementa_acciones = [
    { id: 93, value: 'tiempo', nombre: 'Tiempo, no podemos dedicarnos a ello' },
    { id: 94, value: 'dinero', nombre: 'Dinero, sabemos que podemos hacer algo pero no contamos con el financiamiento' },
    { id: 95, value: 'espacio', nombre: 'Espacio, prodríamos hacer algo con los residuos, pero no podemos hacerlo dentro de la empresa' },
    { id: 96, value: 'capacidad', nombre: 'Capacidad interna, tenemos los recursos y el espacio pero no tenemos quién se haga cargo' }
]
const interesa_evaluaciones = [
    { id: 97, value: 'si', nombre: 'Sí' },
    { id: 98, value: 'quizas', nombre: 'Quizás' },
    { id: 99, value: 'no', nombre: 'No por el momento' }
]
const items_de_que_depende = [
    { id: 100, value: 'costo', nombre: 'Del costo de implementar un proceso de valorización' },
    { id: 101, value: 'tiempo', nombre: 'Del tiempo que hay dedicarle al proceso' },
    { id: 102, value: 'capacidad', nombre: 'De tener la capacidad interna de gestionarlo adecuadamente' },
    { id: 103, value: 'posibilidades', nombre: 'De poder hacerlo al interior de la empresa en su ubicación actual' },
]
const respuestas_17 = [
    { id: 104, value: 'si', nombre: 'Si, es algo que necesito urgentemente' },
    { id: 105, value: 'si, pero', nombre: 'Si, pero no es algo prioritario para mi empresa' },
    { id: 106, value: 'quizas', nombre: 'Quizás, tendría que evaluarlo' },
    { id: 107, value: 'no', nombre: 'No, no es algo que me interese' }
]
const items_servicio = [
    { id: 108, value: 'gestion', nombre: 'Que se hiciera cargo de toda la gestión del residuo' },
    { id: 109, value: 'propuestas', nombre: 'Que me propusiera nuevos negocios para aumentar mis ingresos' },
    { id: 110, value: 'reportes', nombre: 'Que me diera reportes periódicos de mi desempeño ambiental y social' },
    { id: 111, value: 'publicidad', nombre: 'Que me publicitara como una empresa responsable con el medio ambiente y la comunidad' },
]
const items_pagar = [
    { id: 112, value: '< $250.000', nombre: 'Menos de $250.000' },
    { id: 113, value: '$250.000 y $500.000', nombre: 'Entre $250.000 y $500.000' },
    { id: 114, value: '$500.000 y $1.000.000', nombre: 'Entre $500.000 y $1.000.000' },
    { id: 115, value: 'indiferente', nombre: 'Me es indiferente el costo mensual si es que me genera beneficios al corto plazo' },
]
//TODO:reparar la logica de el input de la seleccion de residuos inorgánicos (introducir residuo adicional cuando se realiza el submit)

const FormularioGeneral = () => {
    const [producto, setProducto] = useState('')
    const [productos, setProductos] = useState([])
    const [selectResiduosInorganicos, setSelectResiduosInorganicos] = useState([])
    const [selectTipoProblema, setSelectTipoProblema] = useState([])
    const [selectOptionsNoImplementaAcciones, setSelectOptionsNoImplementaAcciones] = useState([])
    const [selectOptionsDeQueDepende, setSelectOptionsDeQueDepende] = useState([])
    const [selectOptionsNecesidadesServicio, setSelectOptionsNecesidadesServicio] = useState([])
    const [respuestas, setRespuestas] = useState({
        rubro: 'cultivo de plantas',
        colaboracion_empresas: '0',
        residuos_inorganicos: ['papel, carton y similares'],
        procedencia_organico: 'casino de empleados',
        organico_problematico: 'si',
        accion_residuo_problematico: 'lo regalo',
        gasto_residuo_problematico: 'gratis',
        interesa_evaluacion: 'si'
    })

    const {
        rubro,
        colaboracion_empresas,
        procedencia_organico,
        organico_problematico,
        accion_residuo_problematico,
        gasto_residuo_problematico,
        interesa_evaluacion
    } = respuestas

    const diffrubro = rubros.some(r => r.value === rubro)
    const diffcolaboracion = respuesta.some(r => r.value === +colaboracion_empresas)
    const diffprocedenciaorganico = procedencia_organicos.some(r => r.value === procedencia_organico)
    const difforganicoproblematico = organicos_problematicos.some(r => r.value === organico_problematico)
    const diffaccionresiduoproblematico = acciones_residuo_problematico.some(a => a.value === accion_residuo_problematico)
    const diffgastoresiduo = gastos_residuos_problematicos.some(g => g.value === gasto_residuo_problematico)
    const diffinteresaevaluacion = interesa_evaluaciones.some(i => i.value === interesa_evaluacion)

    useEffect(() => {
        console.log(respuestas)
        console.log('diff rubro:', diffrubro)
        console.log('diff colaboración:', diffcolaboracion)
    }, [diffrubro, diffcolaboracion, respuestas])

    const inputHandler = (event) => {
        setRespuestas(prevState => {
            return {
                ...prevState, [event.target.name]: event.target.value
            }
        })
    }

    const productoChangeHandler = (event) => {
        setProducto(event.target.value)

    }

    const productosHandler = (event) => {
        setProductos([...productos, producto])
        setRespuestas(prevState => {
            return {
                ...prevState, [event.target.name]: productos
            }
        })

        setProducto('')
    }

    const radioHandler = (event) => {
        const rubroValue = event.target.value

        setRespuestas(prevState => {
            return {
                ...prevState, [event.target.name]: rubroValue
            }
        })

    }

    const selectOptionsResiduosInorganicosHandler = (event) => {
        setSelectResiduosInorganicos([...selectResiduosInorganicos, event.target.value])
        setRespuestas(prevState => {
            return {
                ...prevState, [event.target.name]: selectResiduosInorganicos
            }
        })

    }

    const selectOptionsTipoProblemaHandler = (event) => {
        setSelectTipoProblema([...selectTipoProblema, event.target.value])
        setRespuestas(prevState => {
            return {
                ...prevState, [event.target.name]: selectTipoProblema
            }
        })
    }

    const selectOptionsNoImplementaAccionesHandler = (event) => {
        setSelectOptionsNoImplementaAcciones([...selectOptionsNoImplementaAcciones, event.target.value])
        setRespuestas(prevState => {
            return {
                ...prevState, [event.target.name]: selectOptionsNoImplementaAcciones
            }
        })
    }

    const selectOptionsDeQueDependeHandler = (event) => {
        setSelectOptionsDeQueDepende([...selectOptionsDeQueDepende, event.target.value])
        setRespuestas(prevState => {
            return {
                ...prevState, [event.target.name]: selectOptionsDeQueDepende
            }
        })
    }

    const selectOptionsNecesidadesServicioHandler = (event) => {
        setSelectOptionsNecesidadesServicio([...selectOptionsNecesidadesServicio, event.target.value])
        setRespuestas(prevState => {
            return {
                ...prevState, [event.target.name]: selectOptionsNecesidadesServicio
            }
        })

    }

    return (
        <div className="py-26 px-5 md:px-20">
            <Card>
                <h1>DATOS GENERALES DE LA EMPRESA</h1>
                <Card className="container">
                    <Input label="1.- ¿En qué región opera la empresa?" type="select" option="selecciona una región" name="region" items={options} onSelectChange={inputHandler} className="w-full" />
                </Card>
                <Card className="container flex flex-col">
                    <div className="flex flex-row items-end gap-5">
                        <Input label="2.- ¿Cuáles son los productos principales que ofrece la empresa" placeholder="ingresa el producto" type="text" name="producto" value={producto} onInputChange={productoChangeHandler} className="w-full" />
                        <Button title="agregar" type="button" name="productos" clickHandler={productosHandler} />
                    </div>
                    <ul>
                        {productos.map((p, i) => <li key={i}>{i + 1}- {p}</li>)}
                    </ul>
                </Card>
                <Card className="container">
                    <Input label="3.- ¿Cuál es el rubro de la empresa?" type="radio" name="rubro" items={rubros} onRadioChange={radioHandler} className="w-full" />
                    {(rubro === 'otro_rubro' || diffrubro === false) && (
                        <div className="flex flex-row items-end gap-5 w-1/2">
                            <Input type="text" label="" name="rubro" placeholder="ingresa el rubro" onInputChange={inputHandler} className="w-full" />
                        </div>
                    )}
                </Card>
                <Card className="container">
                    <Input
                        label="4.- ¿La empresa tiene una política de sostenibilidad?"
                        type="radio"
                        name="politicas_sostenibilidad"
                        items={respuestas_2}
                        onRadioChange={radioHandler}
                        className="w-full" />
                </Card>
                <Card className="container">
                    <Input
                        label="5.- ¿La empresa declara en su política de sostenibilidad (u otra) alguno de los siguiente temas?:"
                        labels={[
                            "Adquisiciones sostenibles",
                            "Eficiencia energética",
                            "Eficiencia hídrica",
                            "Simbiosis industrial",
                            "Ecodiseño"]}
                        type="radio"
                        name="declaración_temas"
                        items={respuestas_4}
                        onRadioChange={radioHandler}
                        className="w-full" />
                </Card>
                <Card className="container">
                    <Input
                        label="6.- ¿La empresa tiene alguna de las siguientes certificaciones?:"
                        LABELS={[
                            "ISO 14001:2015 - SISTEMAS DE GESTIÓN AMBIENTAL",
                            "ISO 50001:2018 - SISTEMAS DE GESTIÓN DE LA ENERGÍA"]}
                        type="radio"
                        name="certificaciones"
                        items={respuestas_5}
                        onRadioChange={radioHandler}
                        className="w-full" />
                </Card>
                <Card className="container">
                    <Input
                        label="7.- ¿La empresa tiene una hoja de ruta asociada a la economía circular?"
                        type="radio"
                        name="hoja_ruta"
                        items={respuestas_2}
                        onRadioChange={radioHandler}
                        className="w-full" />
                </Card>
                <Card className="container">
                    <Input
                        label="8.- ¿Sabías que las siguientes certificaciones y estándares establecen sistemas de gestión basado en economía circular?:"
                        labels={[
                            "BS 8001:2017 - marco para la aplicación de los principios de la economía circular en las organizaciones",
                            "AFNOR XP X 30-901:2018 - economía circular - sistemas de gestión de proyectos de economía circular - requisitos y directrices",
                            "CWA 17354:2018 - simbiosis industrial"]}
                        type="radio"
                        name="sabias_sistemas_gestion"
                        items={respuestas_6}
                        onRadioChange={radioHandler}
                        className="w-full" />
                </Card>
                <Card className="container">
                    <Input
                        label="9.- ¿La empresa ha participado de alguno de los siguientes sellos o premios?"
                        labels={[
                            "Premios Verdes (http://premiosverdes.org/es/)",
                            "Premios Sustenta (http?//sustenta.utem.cl)",
                            "Premios Cero Basura",
                            "Empresas B",
                            "Programa Huella Chile"]}
                        type="radio"
                        name="participacion_premios"
                        items={respuestas_7}
                        onRadioChange={radioHandler}
                        className="w-full" />
                </Card>
                <Card className="container">
                    <Input
                        label="10.- ¿La empresa sabe lo que significa simbiosis industrial?"
                        type="radio"
                        name="conoce_si"
                        items={respuestas_3}
                        onRadioChange={radioHandler}
                        className="w-full" />
                </Card>
                <Card className="container">
                    <Input
                        label="11.- ¿Conoces las empresas que están alrededor de tu organización y cuáles son sus productos/servicios?"
                        type="radio"
                        name="empresas_alrededor"
                        items={empresas_alrededor}
                        onRadioChange={radioHandler}
                        className="w-full" />
                </Card>
                <Card className="container">
                    <Input
                        label="12.- ¿La empresa ha colaborado con empresas cercanas intercambiando/compartiendo algún tipo de recurso (agua, energía, residuos, tecnologías, infraestructura, maquinario, etc.)?"
                        type="radio"
                        name="colaboracion_empresas"
                        items={respuesta}
                        onRadioChange={radioHandler}
                        className="w-full" />
                    {(colaboracion_empresas === '1' || diffcolaboracion === false) && (
                        <div className="flex flex-row items-end gap-5 w-1/2">
                            <Input
                                type="text"
                                label=""
                                name="colaboracion_empresas"
                                placeholder="ingresa lo intercambiado/compartido"
                                onInputChange={inputHandler}
                                className="w-full" />
                        </div>
                    )}
                </Card>
                <Card className="container">
                    <Input
                        label="13.- ¿Sábes cómo la simbiosis industrial apoya en la consecución de diversas certificaciones y sellos nacionales e internacionales?"
                        type="radio"
                        name="sabias_si_apoyo"
                        items={respuestas_8}
                        onRadioChange={radioHandler}
                        className="w-full" />
                </Card>
            </Card>
            <Card>
                <h1>CONSUMOS</h1>
                <Card className="container">
                    <Input
                        label="14.- ¿Sábes cuánto es el consumo de energía de la empresa?"
                        type="radio"
                        name="consumo_energia"
                        items={respuestas_9}
                        onRadioChange={radioHandler}
                        className="w-full" />
                </Card>
                <Card className="container">
                    <Input
                        label="15.- ¿Sábes cuánto es el consumo de agua de la empresa?"
                        type="radio"
                        name="consumo_agua"
                        items={respuestas_10}
                        onRadioChange={radioHandler}
                        className="w-full" />
                </Card>
                <Card className="container">
                    <Input
                        label="16.- ¿Sábes cuánto es el consumo de materiales (ingredientes, insumos, secundarios) de la empresa?"
                        type="radio"
                        name="consumo_materiales"
                        items={respuestas_11}
                        onRadioChange={radioHandler}
                        className="w-full" />
                </Card>
                <Card className="container">
                    <Input
                        label="17.- ¿Conoces el impacto ambiental y social que tienen los materiales que consume la empresa?"
                        type="radio"
                        name="impacto_materiales"
                        items={respuestas_12}
                        onRadioChange={radioHandler}
                        className="w-full" />
                </Card>
            </Card>
            <Card>
                <h1>RESIDUOS</h1>
                <Card className="container">
                    <Input
                        label="18.- ¿Sábes cuántos residuos produce mensualmente?"
                        type="radio"
                        name="produccion_materiales"
                        items={respuestas_13}
                        onRadioChange={radioHandler}
                        className="w-full" />
                </Card>
                <Card className="container">
                    <Input
                        label="19.- Selecciona los residuos inorgánicos que se producen en la empresa"
                        type="checkbox"
                        name="residuos_inorganicos"
                        items={inorganicos}
                        onCheckChange={selectOptionsResiduosInorganicosHandler}
                        className="w-full" />
                    <div className="flex flex-row items-end gap-5 w-1/2">
                        <Input type="text" label="" name="residuos_inorganicos" placeholder="agrega un residuo inorgánico" onInputChange={selectOptionsResiduosInorganicosHandler} className="w-full" />
                    </div>
                </Card>
                <Card className="container">
                    <Input
                        label="20.- ¿Cuál es el principal residuo orgánico que produce la empresa?"
                        type="text"
                        name="residuo_principal"
                        onInputChange={inputHandler}
                        className="w-full" />
                </Card>
                <Card className="container">
                    <Input label="21.- ¿De dónde proviene este residuo orgánico?" type="radio" name="procedencia_organico" items={procedencia_organicos} onRadioChange={radioHandler} className="w-1/2" />
                    {(procedencia_organico === 'otro_residuo_organico' || diffprocedenciaorganico === false) && (
                        <div className="flex flex-row items-end gap-5 w-1/2">
                            <Input type="text" label="" name="procedencia_organico" placeholder="ingresa la procedenia del residuo" onInputChange={inputHandler} className="w-full" />
                        </div>
                    )}
                </Card>
                <Card className="container">
                    <Input
                        label="22.- ¿Este residuo, u otro que produzca la empresa, genera un problema?"
                        type="radio"
                        name="organico_problematico"
                        items={organicos_problematicos}
                        onRadioChange={radioHandler}
                        className="w-full" />
                    {(organico_problematico === 'otro_problema' || difforganicoproblematico === false) && (
                        <div className="flex flex-row items-end gap-5 w-1/2">
                            <Input type="text" label="" name="organico_problematico" placeholder="ingresa el problema que genera el residuo" onInputChange={inputHandler} className="w-full" />
                        </div>
                    )}
                </Card>
                <Card className="container">
                    <Input
                        label="23.- ¿Qué tipo de problema te da tu residuo?"
                        type="checkbox"
                        name="tipo_problema_residuo"
                        items={tipos_problemas}
                        onCheckChange={selectOptionsTipoProblemaHandler}
                        className="w-full" />
                    <div className="flex flex-row items-end gap-5 w-1/2">
                        <Input type="text" label="" name="tipo_problema_residuo" placeholder="agrega otro tipo de problema" onInputChange={selectOptionsTipoProblemaHandler} className="w-full" />
                    </div>
                </Card>
                <Card className="container">
                    <Input
                        label="24.- ¿Este residuo, u otro que produzca la empresa, genera un problema?"
                        type="radio"
                        name="accion_residuo_problematico"
                        items={acciones_residuo_problematico}
                        onRadioChange={radioHandler}
                        className="w-full" />
                    {(accion_residuo_problematico === 'otra_accion' || diffaccionresiduoproblematico === false) && (
                        <div className="flex flex-row items-end gap-5 w-1/2">
                            <Input type="text" label="" name="accion_residuo_problematico" placeholder="ingresa otra acción" onInputChange={inputHandler} className="w-full" />
                        </div>
                    )}
                </Card>
                <Card className="container">
                    <Input
                        label="25.- Si es que la empresa le paga a un tercero para que se lleve este residuo, ¿Cuánto se destina mensualmente a éste item?"
                        type="radio"
                        name="gasto_residuo_problematico"
                        items={gastos_residuos_problematicos}
                        onRadioChange={radioHandler}
                        className="w-full" />
                    {(gasto_residuo_problematico === 'otro_gasto' || diffgastoresiduo === false) && (
                        <div className="flex flex-row items-end gap-5 w-1/2">
                            <Input type="text" label="" name="gasto_residuo_problematico" placeholder="ingresa otro gasto" onInputChange={inputHandler} className="w-full" />
                        </div>
                    )}
                </Card>
            </Card>
            <Card>
                <h1>POTENCIAL DE USO DE LOS RESIDUOS</h1>
                <Card className="container">
                    <Input
                        label="26.- ¿Del principal residuo, la empresa conoce las características de éste? (ej: humedad, composición, etc.)"
                        type="radio"
                        name="características_residuo"
                        items={respuestas_14}
                        onRadioChange={radioHandler}
                        className="w-full" />
                </Card>
                <Card className="container">
                    <Input
                        label="27.- ¿La empresa hace revalorización con lo residuos?"
                        type="radio"
                        name="revalorizacion"
                        items={respuestas_15}
                        onRadioChange={radioHandler}
                        className="w-full" />
                </Card>
                <Card className="container">
                    <Input
                        label="28.- En caso que no se esté valorizando los residuos, ¿sabe la empresa que puede hacer con ellos?"
                        type="radio"
                        name="sabe_que_hacer"
                        items={respuestas_16}
                        onRadioChange={radioHandler}
                        className="w-full" />
                </Card>
                <Card className="container">
                    <Input
                        label="29.- Si es que la empresa quiere implementar acciones de revalorización de el (los) residuo(s) y aún no lo ha hecho, ¿por qué ha sido?"
                        type="checkbox"
                        name="por_que_no_implementa"
                        items={no_implementa_acciones}
                        onCheckChange={selectOptionsNoImplementaAccionesHandler}
                        className="w-full" />
                    <div className="flex flex-row items-end gap-5 w-1/2">
                        <Input type="text" label="" name="por_que_no_implementa" placeholder="agrega otra razón" onInputChange={selectOptionsTipoProblemaHandler} className="w-full" />
                    </div>
                </Card>
                {/*<Card className="container">
                    <Input
                        label="30.- Si te dijéramos que el residuo puede ser una fuente complementaria de ingresos para la empresa, ¿te interesaría evaluar qué se puede hacer con ellos?"
                        type="radio"
                        name="interesa_evaluacion"
                        items={interesa_evaluaciones}
                        onRadioChange={radioHandler}
                        className="w-full" />
                    {(interesa_evaluacion === 'quizas' || diffinteresaevaluacion === false) && (
                        <div className="flex flex-col w-full ml-20">
                            <Input
                                label="De qué depende?, selecciona todas las que correspondan"
                                type="checkbox"
                                name="de_que_depende"
                                items={items_de_que_depende}
                                onCheckChange={selectOptionsDeQueDependeHandler}
                                className="w-full" />
                            <div className="flex flex-row items-end gap-5 w-1/2">
                                <Input type="text" label="" name="de_que_depende" placeholder="agrega otra razón" onInputChange={selectOptionsTipoProblemaHandler} className="w-full" />
                            </div>
                        </div>
                    )}
                </Card>
                <Card className="container">
                    <Input
                        label="31.- Si te hiciéramos contacto con un servicio integral de gestión de residuos, con el cual puedes mojorar el desempeño económico, ambiental y social de la empresa, ¿te interesaría conocerlo?"
                        type="radio"
                        name="interesado"
                        items={respuestas_17}
                        onRadioChange={radioHandler}
                        className="w-full" />
                </Card>
                <Card className="container">
                    <Input
                        label="32.- Específicamente, ¿qué necesitas que este servicio hiciera en tu empresa?"
                        type="radio"
                        name="dispuesto_pagar"
                        items={items_pagar}
                        onRadioChange={radioHandler}
                        className="w-full" />
                </Card>*/}
            </Card>
            <Card className="py-5">
                <p>lorem ipsum</p>
            </Card>
            <Diagnostico />
        </div>
    )
}

export default FormularioGeneral
