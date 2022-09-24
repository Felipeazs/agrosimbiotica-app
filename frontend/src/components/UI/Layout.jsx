import { useLocation } from 'react-router-dom'

import Navigator from './Navigator'
import Footer from './Footer'

const Layout = ({ children }) => {
    const { pathname } = useLocation()

    return (
        <div className="App">
            <div
                className={`${
                    pathname === '/inicio' || pathname === '/'
                        ? 'bg-main-background bg-cover h-1200'
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
