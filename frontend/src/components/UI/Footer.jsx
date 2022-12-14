import { useState } from 'react'

//components
import Input from './Input'
import Button from './Button'

const Footer = () => {
    const [email, setEmail] = useState('')
    const [disabled, setDisabled] = useState(true)

    const onInputChange = event => {
        setDisabled(false)
        setEmail(event.target.value)
    }

    const submitHandler = event => {
        event.preventDefault()
        console.log('email', email)
    }

    return (
        <>
            <hr />
            <div
                className='text-black bg-white h-full py-16'
                id="contacto">
                <div className="container flex flex-col justify-center items-center lg:flex-row lg:mx-10 lg:gap-20">
                    <div className="px-10 w-full md:w-3/4 lg:w-1/3">
                        <form onSubmit={submitHandler}>
                            <Input
                                label="Suscríbete a nuestro newsletter"
                                type="text"
                                onInputChange={onInputChange}
                                placeholder="ingresa tu correo"
                            />
                            <Button
                                title="Enviar"
                                textColor="text-white"
                                bgColor="bg-black"
                                hoverBgColor="hover:bg-white"
                                hoverTextColor="hover:text-black"
                                disabled={disabled}
                            />
                        </form>
                    </div>

                    <div className="flex flex-col py-10 text-center lg:flex-row lg:gap-20">
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
                </div>
                <div className="flex flex-col items-center md:flex-row md:justify-around">
                    <div className="flex flex-col md:flex-row md:gap-5 py-5">
                        <p className="underline">Términos y condiciones</p>
                        <p className="underline">Política de privacidad</p>
                    </div>

                    <div className="flex flex-row gap-4 py-5">
                        <p className="underline">
                            <a
                                href="https://www.facebook.com"
                                target="_blank"
                                rel="noreferrer">
                                Facebook
                            </a>
                        </p>
                        <p className="underline">
                            <a
                                href="https://www.twitter.com"
                                target="_blank"
                                rel="noreferrer">
                                Twitter
                            </a>
                        </p>
                        <p className="underline">
                            <a
                                href="https://www.instagram.com"
                                target="_blank"
                                rel="noreferrer">
                                Instagram
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
