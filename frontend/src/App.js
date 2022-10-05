import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

//components
import Layout from './components/UI/Layout'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Evaluacion from './pages/Evaluacion'
import Marketplace from './pages/Marketplace'
import BlogDetails from './pages/BlogDetails'
import Diagnostico from './pages/Diagnostico'
import ProductoDetails from './pages/ProductoDetails'

//styles
import './App.css'

function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route
                        path="/"
                        element={<Home />}
                    />
                    <Route
                        path="/inicio"
                        element={<Home />}
                    />
                    <Route
                        path="/blog"
                        element={<Blog />}>
                        <Route
                            path=":blogId"
                            element={<BlogDetails />}
                        />
                    </Route>

                    <Route
                        path="/evaluacion"
                        element={<Evaluacion />}
                    />
                    <Route
                        path="/diagnostico"
                        element={<Diagnostico />}
                    />
                    <Route
                        path="/marketplace"
                        element={<Marketplace />}>
                        <Route path="producto/:productoId"
                            element={<ProductoDetails />}
                            />
                    </Route>
                </Routes>
            </Layout>
        </Router>
    )
}

export default App
