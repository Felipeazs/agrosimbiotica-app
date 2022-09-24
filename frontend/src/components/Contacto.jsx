import React, { useState } from 'react'
import Card from './UI/Card'
import Input from './UI/Input'
import Button from './UI/Button'

const Contacto = () => {
    const [disabled, setDisabled] = useState(true)
    const [contacto, setContacto] = useState({
        nombre: '',
        email: '',
        mensaje: '',
    })

    const { nombre, email, mensaje } = contacto

    const onInputChange = event => {
        setContacto(prevState => {
            return {
                ...prevState,
                [event.target.name]: event.target.value,
            }
        })

        if (nombre.trim().length >= 5 && email.trim().length >= 5 && mensaje.trim().length >= 5) {
            setDisabled(false)
        } else {
            setDisabled(true)
        }
    }

    const submitHandler = event => {
        event.preventDefault()
        console.log(contacto)
    }
    return (
        <div className="flex flex-row justify-center items-center gap-20 bg-white text-black py-20 px-60 rounded-bl-150">
            <div className="text-xl text-end">
                <p>
                    ¿Eres un generador de residuos orgánicos? Haz tu diagnóstico gratis y conoce
                    como puedes mejorar el desempeño económico, ambiental y social de tu empresa.
                    ¿Buscas material para tus procesos? Suscríbete a nuestro boletín y recibe todas
                    las noticias del sector, ofertas y los nuevos materiales de nuestro inventario.
                </p>
                <div className="flex flex-row justify-center gap-20 py-6">
                    <Button
                        title="Evalúa tus oportunidades"
                        type="button"
                        bgColor="bg-tertiary"
                        textColor="text-white"
                        disabled={false}
                        hoverBgColor="hover:bg-quaternary"
                        hoverTextColor="hover:text-white"
                    />
                    <Button
                        title="Saber más"
                        type="button"
                        disabled={false}
                        bgColor="bg-white"
                        textColor="text-black"
                        hoverBgColor="hover:bg-quaternary"
                        hoverTextColor="hover:text-white"
                    />
                </div>
            </div>
            <div className="">
                <Card background="bg-white">
                    <form onSubmit={submitHandler}>
                        <p className="text-center pb-8 text-2xl font-bold">Contáctanos</p>
                        <Input
                            label="Nombre"
                            name="nombre"
                            type="text"
                            onInputChange={onInputChange}
                        />
                        <Input
                            name="email"
                            label="Email"
                            type="text"
                            onInputChange={onInputChange}
                        />
                        <Input
                            name="mensaje"
                            label="Mensaje"
                            type="textarea"
                            onInputChange={onInputChange}
                        />
                        <Button
                            title="Enviar"
                            bgColor="bg-white"
                            textColor="text-black"
                            hoverBgColor="hover:bg-quaternary"
                            hoverTextColor="hover:text-white"
                            disabled={disabled}
                        />
                    </form>
                </Card>
            </div>
        </div>
    )
}

export default Contacto
