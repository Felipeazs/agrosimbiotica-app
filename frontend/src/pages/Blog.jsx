import React, { useEffect } from 'react'
import { useNavigate, Outlet } from 'react-router-dom'

import Button from '../components/UI/Button'
import blogs from '../data/publicaciones.json'

const Blog = () => {
    const navigate = useNavigate()


    useEffect(() => {
        window.scrollTo(0, 0)
        
    }, [])

    const clickHandler = blogId => {
        navigate(`/blog/${blogId}`)
    }
return (

        <>
            <Outlet />
            <div className="container flex flex-row py-40">
                <div className="flex flex-row relative h-600 w-1/2">
                    <img
                        src={blogs.data[0].url}
                        alt={blogs.data[0].titulo}
                        width="100%"
                        style={{ objectFit: 'cover' }}
                        className=" hover:opacity-70"
                    />
                    <div className="absolute bottom-10 left-1/4">
                        <Button
                            title="ver publicación"
                            bgColor="bg-white"
                            hoverBgColor="hover:bg-primary"
                            textColor="hover:text-white"
                            clickHandler={() => clickHandler(blogs.data[0].id)}
                        />
                        <p className="font-bold text-white text-4xl underline">
                            {blogs.data[0].titulo}
                        </p>
                        <p className="text-white">{blogs.data[0].fecha}</p>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="flex flex-row relative h-300 w-full">
                        <img
                            src={blogs.data[1].url}
                            alt={blogs.data[1].titulo}
                            width="100%"
                            style={{ objectFit: 'cover' }}
                            className=" hover:opacity-70"
                        />
                        <div className="absolute bottom-10 left-1/4">
                            <Button
                                title="ver publicación"
                                bgColor="bg-white"
                                hoverBgColor="hover:bg-primary"
                                textColor="hover:text-white"
                                clickHandler={() => clickHandler(blogs.data[1].id)}
                            />
                            <p className="font-bold text-white text-4xl underline">
                                {blogs.data[1].titulo}
                            </p>
                            <p className="text-white">{blogs.data[1].fecha}</p>
                        </div>
                    </div>
                    <div className="flex flex-row relative h-300 w-full">
                        <img
                            src={blogs.data[2].url}
                            alt={blogs.data[2].titulo}
                            width="100%"
                            style={{ objectFit: 'cover' }}
                            className=" hover:opacity-70"
                        />
                        <div className="absolute bottom-10 left-1/4">
                            <Button
                                title="ver publicación"
                                bgColor="bg-white"
                                hoverBgColor="hover:bg-primary"
                                textColor="hover:text-white"
                                clickHandler={() => clickHandler(blogs.data[2].id)}
                            />
                            <p className="font-bold text-white text-4xl underline">
                                {blogs.data[2].titulo}
                            </p>
                            <p className="text-white">{blogs.data[2].fecha}</p>
                        </div>
                    </div>
                </div>
                <div className="container flex flex-row relative h-600 w-1/3">
                    <img
                        src={blogs.data[3].url}
                        alt={blogs.data[3].titulo}
                        width="100%"
                        height="auto"
                        className="object-cover hover:opacity-70"
                    />
                    <div className="absolute pt-20 pl-10">
                        <Button
                            title="ver publicación"
                            bgColor="bg-white"
                            hoverBgColor="hover:bg-primary"
                            textColor="hover:text-white"
                            clickHandler={() => clickHandler(blogs.data[3].id)}
                        />
                        <p className="font-bold text-white text-4xl underline">
                            {blogs.data[3].titulo}
                        </p>
                        <p className="text-white">{blogs.data[3].fecha}</p>
                    </div>
                </div>
            </div>
            <div></div>
        </>
    )
}

export default Blog
