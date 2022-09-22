import React from 'react'
import Card from './UI/Card'
import Input from './UI/Input'
import Button from './UI/Button'

const Contacto = () => {
    return (
        <div className="flex flex-row justify-center items-center gap-40 bg-white text-black py-20 px-80 rounded-bl-150">
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
                        hoverBgColor="hover:bg-quaternary"
                        hoverTextColor="hover:text-white"
                    />
                    <Button
                        title="Saber más"
                        type="button"
                        hoverBgColor="hover:bg-quaternary"
                        hoverTextColor="hover:text-white"
                    />
                </div>
            </div>
            <div className="">
                <Card background="bg-white">
                    <p className="text-center pb-8 text-2xl font-bold">Contáctanos</p>
                    <Input
                        label="Nombre"
                        type="text"
                    />
                    <Input
                        label="Email"
                        type="text"
                    />
                    <Input
                        label="Mensaje"
                        type="textarea"
                    />
                    <Button
                        title="Enviar"
                        type="button"
                        hoverBgColor="hover:bg-quaternary"
                        hoverTextColor="hover:text-white"
                    />
                </Card>
            </div>
        </div>
    )
}

export default Contacto
