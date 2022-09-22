import React from 'react'
import Button from './UI/Button'

import publicaciones from '../data/publicaciones.json'

const Publicaciones = () => {
    return (
        <div className=" bg-back3 bg-cover -skew-y-3">
            <div className="container py-40 -skew-y-3">
                <p className="text-4xl pb-10">Últimas Publicaciones</p>
                <div className="flex flex-row justify-center gap-20">
                    {publicaciones.data.map(p => (
                        <div
                            key={p.id}
                            className="w-250 mt-10">
                            <img
                                src={p.url}
                                alt={p.titulo}
                                className="w-300 h-200 pb-5 object-cover rounded-md"
                            />
                            <p className="text-end text-sm italic">{p.fecha}</p>
                            <p className="text-xl">{p.titulo}</p>
                            <p className="py-4">{p.bajada}</p>
                            <Button
                                title="Ver publicación"
                                textColor="white"
                                hoverBgColor="hover:bg-white"
                                hoverTextColor="hover:text-black"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Publicaciones
