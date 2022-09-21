import React from 'react'
import Card from './UI/Card'
import Input from './UI/Input'
import Button from './UI/Button'

const Contacto = () => {
    return (
        <div className="flex flex-row justify-center items-center gap-40 bg-white py-20 px-80">
            <div className="text-lg text-end">
                ¿Eres un generador de residuos orgánicos? Haz tu diagnóstico gratis y conoce como
                puedes mejorar el desempeño económico, ambiental y social de tu empresa. ¿Buscas
                material para tus procesos? Suscríbete a nuestro boletín y recibe todas las noticias
                del sector, ofertas y los nuevos materiales de nuestro inventario.
            </div>
            <div>
                <Card>
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
                    />
                </Card>
            </div>
        </div>
    )
}

export default Contacto
