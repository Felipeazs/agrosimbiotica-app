import { useLocation } from 'react-router-dom'
import { Link, NavLink } from 'react-router-dom'

//logos
const logoWhite = require('../../assets/logo/logo.png')
const logoBlack = require('../../assets/logo/logo2.png')

const Navigator = () => {
    const { pathname } = useLocation()

    return (
        <nav
            className={`${pathname === '/inicio' || pathname === '/'
                ? 'bg-black/50 text-white'
                : 'bg-white text-black'
                }  px-20 shadow-xl fixed z-10 w-full`}>
            <div className="flex flex-row justify-between items-center h-20">
                <div className="w-10">
                    <Link to="/">
                        <img
                            src={pathname === '/' || pathname === '/inicio' ? logoWhite : logoBlack}
                            alt="logo"
                            className="max-w-full h-auto"
                        />
                    </Link>
                </div>
                <ul className="flex flex-row gap-5 text-xl">
                    <li>
                        <NavLink
                            to="/inicio"
                            className={nav => (nav.isActive ? 'active' : '')}>
                            Inicio
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/marketplace">Marketplace</NavLink>
                    </li>
                    <li>
                        <NavLink to="/blog">Blog</NavLink>
                    </li>
                    <li>
                        <NavLink to="/evaluacion">Evalúa tus oportunidades</NavLink>
                    </li>
                    <li>
                        <a href="#contacto">Contacto</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navigator
