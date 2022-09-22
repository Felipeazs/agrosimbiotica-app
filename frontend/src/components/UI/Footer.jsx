import React from 'react'

import Input from './Input'
import Button from './Button'

const Footer = () => {
    return (
        <div className="flex flex-col justify-between text-white bg-secondary h-96 py-16">
            <div className="container flex flex-row justify-around">
                <div className="">
                    <Input
                        label="Suscríbete a nuestro newsletter"
                        type="text"
                        placeholder="ingresa tu correo"
                    />
                    <Button
                        title="Enviar"
                        textColor="text-white"
                        bgColor="bg-secondary"
                        hoverBgColor="hover:bg-white"
                        hoverTextColor="hover:text-black"
                    />
                </div>
                <div className="">
                    <p className="pb-4">Contacto</p>
                    <p>Dirección</p>
                    <p>Teléfono</p>
                    <p>Email</p>
                </div>
                <div className="">
                    <p className="pb-4">Recursos</p>
                    <p>Lazo Consultora de Negocios</p>
                    <p>Agricultura Chile</p>
                    <p>Blog</p>
                </div>
                <div className="">
                    <p className="pb-4">Empresa</p>
                    <p>Leadership</p>
                    <p>Carreras</p>
                    <p>Política de privacidad</p>
                </div>
            </div>
            <div className="flex flex-row justify-around ">
                <div className="flex flex-row  gap-4">
                    <p className="underline">Términos y condiciones</p>
                    <p className="underline">Política de privacidad</p>
                </div>
                <div className="flex flex-row gap-4">
                    <p className="underline">Facebook</p>
                    <p className="underline">Twitter</p>
                    <p className="underline">Instagram</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
