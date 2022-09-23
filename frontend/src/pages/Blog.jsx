import React from 'react'

import Button from '../components/UI/Button'
import blogs from '../data/publicaciones.json'

const Blog = () => {
    return (
        <>
            <div className="flex flex-row">
                <div className="flex flex-row relative w-3/5">
                    <img
                        src={blogs.data[0].url}
                        alt={blogs.data[0].titulo}
                        style={{ objectFit: 'cover' }}
                        className=" hover:opacity-70"
                    />
                    <div className="absolute bottom-10 left-1/4">
                        <Button
                            title="ver publicación"
                            bgColor="bg-white"
                            hoverBgColor="hover:bg-primary"
                            textColor="hover:text-white"
                        />
                        <p className="font-bold text-white text-4xl underline">
                            {blogs.data[0].titulo}
                        </p>
                        <p className="text-white">{blogs.data[0].fecha}</p>
                    </div>
                </div>
                <div className="flex flex-col w-2/5">
                    <div className="flex flex-row relative">
                        <img
                            src={blogs.data[1].url}
                            alt={blogs.data[1].titulo}
                            style={{ objectFit: 'cover' }}
                            className=" hover:opacity-70"
                        />
                        <div className="absolute bottom-10 left-1/4">
                            <Button
                                title="ver publicación"
                                bgColor="bg-white"
                                hoverBgColor="hover:bg-primary"
                                textColor="hover:text-white"
                            />
                            <p className="font-bold text-white text-4xl underline">
                                {blogs.data[1].titulo}
                            </p>
                            <p className="text-white">{blogs.data[1].fecha}</p>
                        </div>
                    </div>
                    <div className="flex flex-row relative">
                        <img
                            src={blogs.data[2].url}
                            alt={blogs.data[2].titulo}
                            style={{ objectFit: 'cover' }}
                            className=" hover:opacity-70"
                        />
                        <div className="absolute bottom-10 left-1/4">
                            <Button
                                title="ver publicación"
                                bgColor="bg-white"
                                hoverBgColor="hover:bg-primary"
                                textColor="hover:text-white"
                            />
                            <p className="font-bold text-white text-4xl underline">
                                {blogs.data[2].titulo}
                            </p>
                            <p className="text-white">{blogs.data[2].fecha}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="flex flex-row relative h-600">
                    <img
                        src={blogs.data[3].url}
                        alt={blogs.data[3].titulo}
                        className=" hover:opacity-70 w-full object-cover"
                    />
                    <div className="absolute bottom-10 left-1/4">
                        <Button
                            title="ver publicación"
                            bgColor="bg-white"
                            hoverBgColor="hover:bg-primary"
                            textColor="hover:text-white"
                        />
                        <p className="font-bold text-white text-4xl underline">
                            {blogs.data[3].titulo}
                        </p>
                        <p className="text-white">{blogs.data[3].fecha}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blog
