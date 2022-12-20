import React, { useEffect, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

//components
import Layout from './components/UI/Layout'
// import Home from './pages/Home'

//styles
import './App.css'

// const Blog = React.lazy(() => import('./pages/Blog'))
// const Evaluacion = React.lazy(() => import('./pages/Evaluacion'))
// const Marketplace = React.lazy(() => import('./pages/Marketplace'))
// const BlogDetails = React.lazy(() => import('./pages/BlogDetails'))
// const ProductoDetails = React.lazy(() => import('./pages/ProductoDetails'))
import Home2 from './pages/Home2'

const Diagnostico = React.lazy(() => import('./pages/Diagnostico'))
const FormularioGeneral = React.lazy(() => import('./pages/FormularioGeneral'))

const ENV = process.env.REACT_APP_NODE_ENV
const baseUrl = ENV === 'production' ? process.env.REACT_APP_BASE_URL : 'http://localhost:5001'

function App() {

    useEffect(() => {
        console.log('baseURL:', baseUrl)
        const fetching = async () => {
            await fetch(`${baseUrl}/api`)
                .then(res => res.json())
                .then(res => console.log(res))
                .catch(err => console.log(err.message))
        }
        fetching()
    }, [])

    return (
        <Suspense>
            <Router>
                <Layout>
                    <Routes>
                        <Route
                            path="/"
                            element={<Home2 />}
                        />
                        <Route
                            path="/inicio"
                            element={<Home2 />}
                        />
                        <Route
                            path="/diagnostico"
                            element={<Diagnostico />}
                        />
                        <Route
                            path="/formulario"
                            element={<FormularioGeneral />}
                        />
                        {/*<Route
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
                        */}
                    </Routes>
                </Layout>
            </Router>
        </Suspense>
    )
}

export default App
