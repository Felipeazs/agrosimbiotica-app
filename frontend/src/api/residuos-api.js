export const getAllResiduos = () =>
    fetch('productos.json')
        .then(res => {
            return res.json()
        })
        .then(res => res.datos)


