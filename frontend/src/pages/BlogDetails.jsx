import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import publicaciones from '../data/publicaciones.json'

const BlogDetails = () => {
    const { blogId } = useParams()
    const [publicacion, setPublicacion] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const publicacion = publicaciones.data.find((p) => p.id === blogId)
        setPublicacion(publicacion)
        setLoading(false)
        window.scroll(0, 0)
    }, [blogId])

    if (!loading) {
        return (
            <div className="container flex flex-col pt-40">
                <p className='text-2xl font-black'>{publicacion.titulo}</p>
                <p>{publicacion.fecha}</p>
                <div className='container flex flex-row gap-4 pt-4 pb-10'>
                    <div className='w-400 h-auto'>
                        <img src={publicacion.url} alt={publicacion.autor} className='w-400 h-auto 
                        object-cover' />
                    </div>

                    <div className='text-lg w-full'>
                        <p className='italic'>autor: {publicacion.autor}</p>
                        {publicacion.articulo.map((t, i) => (
                            <div key={i} className='container text-justify py-4 pr-96'>
                                <p className='font-black'>{t.titulo}</p>
                                <p>{t.texto}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <p className='text-center italic'>{publicacion.autor}</p>
                <hr />
            </div>
        )
    }

}

export default BlogDetails
