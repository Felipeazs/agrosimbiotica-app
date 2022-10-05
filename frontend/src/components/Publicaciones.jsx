import React from 'react'
import { useNavigate } from 'react-router-dom'

import Button from './UI/Button'
import publicaciones from '../data/publicaciones.json'

const Publicaciones = () => {
    
    const navigate = useNavigate()

    return (
        <div className=" bg-back4 bg-cover">
            <div className="custom-shape-divider-top-1663884187">
                <svg
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none">
                    <path
                        d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
                        className="shape-fill"></path>
                </svg>
            </div>

            <div className="container pb-40">
                <p className="text-4xl pb-10">Últimas Publicaciones</p>
                <div className="flex flex-row justify-center gap-20">

                    {publicaciones.data.map(p => (
                        <div
                            key={p.id}
                            className={`w-250 mt-10`}>
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
                                clickHandler={() => {
                                    navigate(`/blog/${p.id}`)
                                    window.scroll(0, 0)
                                }}
                            />
                        </div>
                    ))}
                </div>
            </div>
                
        </div>
    )
}

export default Publicaciones
