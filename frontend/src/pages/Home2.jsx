import React from 'react'
import { useNavigate } from 'react-router-dom'

import Card from '../components/UI/Card'

const Home2 = () => {
    const navigate = useNavigate()

    const formularioGeneralHandler = () => {
        navigate('/formulario')

    }
    const simbiosisIndustrialHandler = () => {
        navigate('/diagnostico')
    }

    return (
        <div className="py-26 px-5 md:px-20">
            <Card className="container">
                <p className='text-2xl text-center px-10'>¿Sabes cómo la simbiosis industrial puede ayudar a tu empresa a mejorar su desempeño y transitar hacia la sostenibilidad? </p>
                <br />
                <div className='text-center'>
                    <p>
                        La simbiosis industrial se materializa mediante la puesta en común y/o la interrelación de distintas fases productivas, de varios procesos para la fabricación de bienes o servicios específicos, con el objetivo de la gestión compartida de ciertas funciones, bienes, stocks, flujos de materiales y energía para optimizarlos.
                    </p>
                    <br />
                    <p>
                        Esta área puede englobar sinergias de sustitución establecidas entre varios actores ecnonómicos para optimizar el uso de recursos, donde, por ejemplo, los residuos de un sector pueden convertirse en materia prima de otro. Puede también incluyen sinergias que agrupan flujos de materiales, energíá, agua, infraestructuras, bienes, o servicios para optimizar el uso de recursos.
                    </p>
                    <br />
                    <p>
                        La proximidad geográfica puede ser un factor determinante en las interrelaciones o puestas en común para la implementación de simbiosis industrial regional o ecología industrila y regional. Enfoques de ecología industrial y regional son acciones voluntarias y colectivas que reúnen a una diversidad de actores públicos o provados con el objetivo de optimizar recursos y fomentando el anclaje de las actividades y el empleo en las regiones.
                    </p>
                    <br />
                </div>
            </Card>
            <div className="container flex flex-col justify-center gap-5 lg:flex-row">
                <Card onClick={formularioGeneralHandler} className="hover:cursor-pointer hover:shadow-slate-900 h-full text-center lg:w-1/3 lg:px-5">
                    <h1>FORMULARIO GENERAL</h1>
                    <br />
                    <p>Si trabajas en el área de sostenibilidad de una empresa o quieres conocer cómo tu empresa está avanzando hacia la economía circular, te invitamos a participar de un diagnóstico preliminar <span className="underline">respondiendo este formulario</span>.</p>
                </Card>
                <Card onClick={simbiosisIndustrialHandler} className="hover:cursor-pointer hover:shadow-slate-900 h-40 text-center lg:w-1/3 lg:px-5">
                    <h1>SIMBIOSIS INDUSTRIAL</h1>
                    <br />
                    <p>Paso 2</p>
                </Card>
            </div>
            <div className="text-justify">
                <p className="text-center py-5">Todos los datos que nos entregues serán confidenciales y el resultado sólo será enviado a tu casilla de correo.</p>
                <p className="py-40">¿Te interesa saber más de lo que puede hacer tu empresa para mejorar su desempeño ambiental, social y económico? Si quieres avanzaren la sostenibilidad en tu empresa, ya sea para diseñar la hoja de ruta que los haga transitar hacia la economía circular, buscar financiamiento para implementar iniciativas o encontrar socios estratégicos, no dudes en contactarnos a <a href="mailto:contacto@asginnobiotics" className="underline">contacto@asginnobiotics.cl</a> o a <a href="mailto:contacto@lazofoods.cl" className="underline">contacto@lazofoods.cl</a></p>
            </div>
        </div>
    )
}

export default Home2
