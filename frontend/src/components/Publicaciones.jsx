import React from 'react'
import Card from './UI/Card'

const Publicaciones = () => {
    return (
        <div className="container h-96 -skew-y-6">
            <p>Últimas Publicaciones</p>
            <div className="flex flex-row justify-center gap-10">
                <Card>
                    <img
                        src="./assets/imgs/nuevas-empresas.jpg"
                        alt="publicaciones"
                        width="200"
                        height="100"
                        className=""
                    />

                    <p>Nuevas empresas</p>
                </Card>
                <Card>
                    <p>Conexiones</p>
                </Card>
                <Card>
                    <p>La Cebada</p>
                </Card>
                <Card>
                    <p>Sector agropecuario</p>
                </Card>
            </div>
        </div>
    )
}

export default Publicaciones
