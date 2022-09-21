import Navigator from './Navigator'
import Footer from './Footer'

const Layout = ({ children }) => {
    return (
        <div className="App">
            <div className="bg-main-background h-1200 bg-cover">
                <Navigator />
                <div className="">{children}</div>
                <Footer />
            </div>
        </div>
    )
}

export default Layout
