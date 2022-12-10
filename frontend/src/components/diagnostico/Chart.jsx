import React, { useEffect, useState } from 'react'

//ChartJS
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend }
    from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const options = {
    responsive: true,
    aspectRatio: 2,
    scales: {
        r: {
            ticks: {
                stepSize: 0.5,
            },
            beginAtZero: true,
            pointLabels: {
                color: '#BDBDBD',
                font: {
                    weight: 'bold',
                    size: 12,
                },
            },
        },
    },
    plugins: {
        legend: {
            display: true,
            position: 'top',
            align: 'center',
            labels: {
                usePointStyle: true,
                pointStyle: 'rectRounded',
                boxWidth: 100,
                font: {
                    weight: 'bold',
                },
            },
        },
    },
}

const Chart = ({ puntosRadar }) => {
    const [data, setData] = useState([])

    useEffect(() => {

        const arr = []
        // PARA TODOS LOS AMBITOS
        // for (const p in puntosRadar) {
        //     for (const a of puntosRadar[p]) {
        //         for (const t in a) {
        //             arr.push(...a[t])
        //         }
        //     }
        // }
        //
        for (const a of puntosRadar['simbiosis_industrial']) {
            for (const t in a) {
                arr.push(...a[t])
            }
        }
        setData(arr)
        window.scroll(0, 0)

    }, [puntosRadar])


    const dataChart = {
        labels: [
            // 'Ambiental - AS',
            // 'Económico - AS',
            // 'Social - AS',
            // 'Ambiental - E',
            // 'Económico - E',
            // 'Social - E',
            'Ambiental - SI',
            'Económico - SI',
            'Social - SI',
            //     'Ambiental - EF',
            //     'Económico - EF',
            //     'Social - EF',
            //     'Ambiental - CR',
            //     'Económico - CR',
            //     'Social - CR',
            //     'Ambiental - PU',
            //     'Económico - PU',
            //     'Social - PU',
            //     'Ambiental - GE',
            //     'Económico - GE',
            //     'Social - GE',
        ],
        datasets: [
            // {
            //     label: 'Adquisiciones Sostenibles (AS)',
            //     data: [data[0], data[1], data[2]],
            //     fill: true,
            //     backgroundColor: 'rgb(57, 0, 153, 0.4)',
            //     borderColor: 'rgb(57, 0, 153, 0.4)',
            //     borderWidth: 2,
            // },
            // {
            //     label: 'Ecodiseño (E)',
            //     data: [Number.NaN, Number.NaN, Number.NaN, data[3], data[4], data[5]],
            //     fill: true,
            //     backgroundColor: 'rgb(255, 84, 0, 0.4)',
            //     borderColor: 'rgb(255, 84, 0, 0.4)',
            //     borderWidth: 2,
            // },
            {
                label: 'Simbiosis Industrial (SI)',
                // data: [Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, data[6], data[7], data[8]],
                data: data,
                fill: true,
                backgroundColor: 'rgb(255, 189, 0, 0.4)',
                borderColor: 'rgb(255, 189, 0, 0.4)',
                borderWidth: 2,
            },
            // {
            //     label: 'Economía Funcional (EF)',
            //     data: [Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN,
            //     Number.NaN, Number.NaN, Number.NaN, data[9], data[10], data[11]],
            //     fill: true,
            //     backgroundColor: 'rgb(158, 0, 89, 0.4)',
            //     borderColor: 'rgb(158, 0, 89, 0.4)',
            //     borderWidth: 2,
            // },
            // {
            //     label: 'Consumo Responsable (CR)',
            //     data: [Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN,
            //     Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, data[12],
            //     data[13], data[14]],
            //     fill: true,
            //     backgroundColor: 'rgb(36, 123, 160, 0.4)',
            //     borderColor: 'rgb(36, 123, 160, 0.4)',
            //     borderWidth: 2,
            // },
            // {
            //     label: 'Prórroga de Uso (PU)',
            //     data: [Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN,
            //     Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN,
            //     Number.NaN, Number.NaN, data[15], data[16], data[17]],
            //     fill: true,
            //     backgroundColor: 'rgb(112, 193, 179, 0.4)',
            //     borderColor: 'rgb(112, 193, 179, 0.4)',
            //     borderWidth: 2,
            // },
            // {
            //     label: 'Gestión Eficiente (GE)',
            //     data: [Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN,
            //     Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN,
            //     Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, data[18], data[19],
            //     data[20]],
            //     fill: true,
            //     backgroundColor: 'rgb(244, 208, 111, 0.4)',
            //     borderColor: 'rgb(244, 208, 111, 0.4)',
            //     borderWidth: 2,
            // },
        ],
    }

    return (<Radar data={dataChart} options={options} redraw={true} updateMode="active" />)
}

export default Chart
