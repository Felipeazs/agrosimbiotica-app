import { useLocation } from 'react-router-dom'

//components
import Navigator from './Navigator'
import Footer from './Footer'

const Layout = ({ children }) => {
    const { pathname } = useLocation()

    const background = 'bg-main-background bg-cover h-1200'

    return (
        <div className="App">
            <div
                className={`${pathname === '/inicio' || pathname === '/'
                    ? 'bg-white'
                    : 'bg-white'
                    }
                `}>
                <Navigator />
                <div className="">{children}</div>
                <Footer />
            </div>
        </div>
    )
}

export default Layout
