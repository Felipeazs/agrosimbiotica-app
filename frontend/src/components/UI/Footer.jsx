import React from 'react'

import Input from './Input'

const Footer = () => {
    return (
        <div className="flex flex-col justify-between bg-secondary h-96 text-white py-16">
            <div className="container flex flex-row justify-around">
                <div>
                    <p>Suscríbete a nuestro newsletter</p>
                    <Input
                        type="text"
                        placeholder="ingresa tu correo"
                    />
                </div>
                <div>
                    <p className="pb-4">Contacto</p>
                    <p>Dirección</p>
                    <p>Teléfono</p>
                    <p>Email</p>
                </div>
                <div>
                    <p className="pb-4">Recursos</p>
                    <p>Lazo Consultora de Negocios</p>
                    <p>Agricultura Chile</p>
                    <p>Blog</p>
                </div>
                <div>
                    <p className="pb-4">Empresa</p>
                    <p>Leadership</p>
                    <p>Carreras</p>
                    <p>Política de privacidad</p>
                </div>
            </div>
            <div className="flex flex-row justify-around">
                <div className="flex flex-row  gap-4">
                    <p>Términos y condiciones</p>
                    <p>Política de privacidad</p>
                </div>
                <div className="flex flex-row gap-4">
                    <p>Facebook</p>
                    <p>Twitter</p>
                    <p>Instagram</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
