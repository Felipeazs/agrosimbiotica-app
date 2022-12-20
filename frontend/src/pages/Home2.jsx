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
        <div className="py-26 px-5 xl:px-64 2xl:px-80">
            <Card className="container py-10">
                <p className='text-2xl text-center px-10 font-bold'>¿Sabes cómo la simbiosis industrial puede ayudar a tu empresa a mejorar su desempeño y transitar hacia la sostenibilidad? </p>
                <br />
                <div className='text-justify px-10'>
                    <p>
                        La simbiosis industrial se materializa mediante la puesta en común y/o la interrelación de distintas fases productivas, de varios procesos para la fabricación de bienes o servicios específicos, con el objetivo de la gestión compartida de ciertas funciones, bienes, stocks, flujos de materiales y energía para optimizarlos.
                    </p>
                    <br />
                    {/*<p>
                        Esta área puede englobar sinergias de sustitución establecidas entre varios actores ecnonómicos para optimizar el uso de recursos, donde, por ejemplo, los residuos de un sector pueden convertirse en materia prima de otro. Puede también incluyen sinergias que agrupan flujos de materiales, energíá, agua, infraestructuras, bienes, o servicios para optimizar el uso de recursos.
                    </p>
                    <br />
                    <p>
                        La proximidad geográfica puede ser un factor determinante en las interrelaciones o puestas en común para la implementación de simbiosis industrial regional o ecología industrila y regional. Enfoques de ecología industrial y regional son acciones voluntarias y colectivas que reúnen a una diversidad de actores públicos o provados con el objetivo de optimizar recursos y fomentando el anclaje de las actividades y el empleo en las regiones.
                    </p>*/}
                </div>
            </Card>
            <Card className="container py-10 flex flex-col justify-center items-center gap-5">
                <p className="py-5 px-10 text-center">
                    Si trabajas en el área de sostenibilidad de una empresa o quieres conocer cómo tu empresa está avanzando hacia la economía circular, te invitamos a utilizar nuestras herramientas de diagnóstico basadas en la norma internacional BSI 8001:2017
                </p>
                <div className="flex flex-col md:flex-row md:gap-5 justify-center items-center h-full">
                    <Card onClick={formularioGeneralHandler} className="bg-oficial hover:cursor-pointer hover:shadow-slate-900 hover:border-2 hover:border-black h-32 w-3/4 flex justify-center items-center text-center">
                        <h1 className="text-white font-bold">DIAGNÓSTICO DE MADUREZ EN ECONOMÍA CICULAR</h1>
                    </Card>
                    {/*<Card onClick={simbiosisIndustrialHandler} className="bg-oficial hover:cursor-pointer hover:shadow-slate-900 h-32 w-3/4 md:w-1/2 flex justify-center items-center text-center">
                        <h1 className="text-white font-bold">EVALUACIÓN EN SIMBIOSIS INDUTRIAL</h1>
                    </Card>*/}
                </div>
                <p className="text-center py-5">Todos los datos que nos entregues serán confidenciales y el resultado sólo será enviado a tu casilla de correo.</p>
            </Card>
            <p className="py-10 lg:py-20 md:px-20 text-justify">¿Te interesa saber más de lo que puede hacer tu empresa para mejorar su desempeño ambiental, social y económico? Si quieres avanzaren la sostenibilidad en tu empresa, ya sea para diseñar la hoja de ruta que los haga transitar hacia la economía circular, buscar financiamiento para implementar iniciativas o encontrar socios estratégicos, no dudes en contactarnos a <a href="mailto:contacto@asginnobiotics" className="underline font-bold">contacto@asginnobiotics.cl</a> o a <a href="mailto:contacto@lazofoods.cl" className="underline font-bold">contacto@lazofoods.cl</a></p>
        </div>
    )
}

export default Home2
