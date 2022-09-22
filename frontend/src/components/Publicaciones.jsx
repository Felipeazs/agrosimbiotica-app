import React from 'react'
import Button from './UI/Button'

import publicaciones from '../data/publicaciones.json'

const Publicaciones = () => {
    return (
        <div className="container py-40 -skew-y-6">
            <p className="text-4xl pb-10">Últimas Publicaciones</p>
            <div className="flex flex-row justify-center  gap-20">
                {publicaciones.data.map(p => {
                    let mrgt = 'mt-' + p.id * 10
                    return (
                        <div
                            key={p.id}
                            className={`w-250 ${mrgt}`}>
                            <img
                                src={p.url}
                                alt={p.titulo}
                                className="w-300 h-200 pb-5 object-cover"
                            />
                            <p className="text-end">{p.fecha}</p>
                            <p className="text-xl">{p.titulo}</p>
                            <p className="py-4">{p.bajada}</p>
                            <Button
                                title="Ver publicación"
                                textColor="white"
                            />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Publicaciones
