import { Link, NavLink } from 'react-router-dom'

const Navigator = () => {

    return (
        <nav
            className='bg-oficial text-white px-5 md:px-20 shadow-xl fixed z-10 w-full'>
            <div className="flex flex-row justify-between items-center h-20">
                <div className="w-full">
                    <Link to="/">
                        <img
                            src="https://res.cloudinary.com/dqm9xo01m/image/upload/v1671055667/Assets/logo2_mky4qp.png"
                            alt="logo"
                            className="w-60"
                        />
                    </Link>
                </div>
                <ul className="invisible md:visible flex flex-row gap-5 text-xl justify-center items-center">
                    <li>
                        <NavLink
                            to="/inicio"
                            className={nav => (nav.isActive ? 'active' : '')}>
                            Inicio
                        </NavLink>
                    </li>
                    {/* <li>
                        <NavLink to="/marketplace">Marketplace</NavLink>
                    </li>
                    <li>
                        <NavLink to="/blog">Blog</NavLink>
                    </li>
                    <li>
                        <NavLink to="/evaluacion">Evalúa tus oportunidades</NavLink>
                    </li>
                    <li>
                    <NavLink to="/diagnostico">Diagnóstico</NavLink>
                    </li>
                    */}
                    <li>
                        <a href="#contacto">Contacto</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navigator
