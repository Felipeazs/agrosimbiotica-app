import React from 'react'
import Card from './UI/Card'

import publicaciones from '../data/publicaciones.json'

const Publicaciones = () => {
    return (
        <div className="container h-800 -skew-y-6">
            <p className="text-xl">Últimas Publicaciones</p>
            <div className="flex flex-row justify-center gap-10">
                {publicaciones.data.map(p => (
                    <Card key={p.id}>
                        <img
                            src={p.url}
                            alt=""
                            className="w-300 pb-5"
                        />
                        <p>{p.titulo}</p>
                        <p className="w-200 py-4">{p.bajada}</p>
                        <p className="text-end">{p.fecha}</p>
                    </Card>
                ))}
            </div>
        </div>
    )
}

export default Publicaciones
