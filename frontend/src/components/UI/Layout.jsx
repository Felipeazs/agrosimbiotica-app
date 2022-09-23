import { useLocation } from 'react-router-dom'

import Navigator from './Navigator'
import Footer from './Footer'
import Widget from '../Widget'

const Layout = ({ children }) => {
    const { pathname } = useLocation()

    console.log(pathname)
    return (
        <div className="App">
            <div
                className={`${
                    pathname === '/inicio' || pathname === '/'
                        ? 'bg-main-background bg-cover h-1200'
                        : 'bg-secondary'
                }
                ${pathname === '/evaluacion' ? 'bg-back3' : ''}`}>
                <Navigator />
                <Widget />
                <div className="">{children}</div>
                <Footer />
            </div>
        </div>
    )
}

export default Layout
