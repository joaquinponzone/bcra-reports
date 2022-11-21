const config = {
    BCRA_urls: {
        hipoteca: {
            title: 'Hipotecarios',
            route: '/hipoteca',
            url: 'https://www.bcra.gob.ar/pdfs/BCRAyVos/HIPOTECA.CSV'
        },
        personales: {
            title: 'Personales',
            route: '/personales',
            url: 'https://www.bcra.gob.ar/pdfs/BCRAyVos/PERSONALES.CSV'
        },
        prendarios: {
            title: 'Prendarios',
            route: '/prendarios',
            url: 'https://www.bcra.gob.ar/pdfs/BCRAyVos/PRENDARIOS.CSV'
        },
        pfijos: {
            title: 'Plazos Fijos',
            route: '/pfijos',
            url: 'https://www.bcra.gob.ar/pdfs/BCRAyVos/PFIJO.CSV'
        },
        paquete: {
            title: 'Paquetes de Productos',
            route: '/paquetes',
            url: 'https://www.bcra.gob.ar/pdfs/BCRAyVos/PAQUETE.CSV'
        },
        tarjetas: {
            title: 'Tarjetas de crédito',
            route: '/tarjetas',
            url: 'https://www.bcra.gob.ar/pdfs/BCRAyVos/TARJETAS.CSV'
        },
        cajaAhorros: {
            title: 'Cajas de ahorros',
            route: '/pfijos',
            url: 'https://www.bcra.gob.ar/pdfs/BCRAyVos/CAJADEAHORROS.CSV'
        }
    },
    BCRA_reports: ['hipoteca', 'personales', 'prendarios', 'pfijos', 'paquete', 'tarjetas', 'caja-ahorros']
}

export default config