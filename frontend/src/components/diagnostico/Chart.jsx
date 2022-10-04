import React, { useEffect, useState, useRef } from 'react'

//ChartJS
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
} from 'chart.js';
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
        for (const p in puntosRadar) {
            for (const a of puntosRadar[p]) {
                for (const t in a) {
                    arr.push(...a[t])
                }
            }
        }
        setData(arr)

    }, [puntosRadar])


    const dataChart = {
        labels: [
            'Ambiental',
            'Económico',
            'Social',
            'Ambiental',
            'Económico',
            'Social',
            'Ambiental',
            'Económico',
            'Social',
            'Ambiental',
            'Económico',
            'Social',
            'Ambiental',
            'Económico',
            'Social',
            'Ambiental',
            'Económico',
            'Social',
            'Ambiental',
            'Económico',
            'Social',
        ],
        datasets: [
            {
                label: 'Adquisiciones Sostenibles',
                data: [data[0], data[1], data[2]],
                fill: true,
                backgroundColor: 'rgb(57, 0, 153, 0.4)',
                borderColor: 'rgb(57, 0, 153, 0.4)',
                borderWidth: 2,
            },
            {
                label: 'Ecodiseño',
                data: [Number.NaN, Number.NaN, Number.NaN, data[3], data[4], data[5]],
                fill: true,
                backgroundColor: 'rgb(255, 84, 0, 0.4)',
                borderColor: 'rgb(255, 84, 0, 0.4)',
                borderWidth: 2,
            },
            {
                label: 'Simbiosis Industrial',
                data: [Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, data[6], data[7], data[8]],
                fill: true,
                backgroundColor: 'rgb(255, 189, 0, 0.4)',
                borderColor: 'rgb(255, 189, 0, 0.4)',
                borderWidth: 2,
            },
            {
                label: 'Economía Funcional',
                data: [Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, data[9], data[10], data[11]],
                fill: true,
                backgroundColor: 'rgb(158, 0, 89, 0.4)',
                borderColor: 'rgb(158, 0, 89, 0.4)',
                borderWidth: 2,
            },
            {
                label: 'Consumo Responsable',
                data: [Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, data[12], data[13], data[14]],
                fill: true,
                backgroundColor: 'rgb(36, 123, 160, 0.4)',
                borderColor: 'rgb(36, 123, 160, 0.4)',
                borderWidth: 2,
            },
            {
                label: 'Prórroga de Uso',
                data: [Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, data[15], data[16], data[17]],
                fill: true,
                backgroundColor: 'rgb(112, 193, 179, 0.4)',
                borderColor: 'rgb(112, 193, 179, 0.4)',
                borderWidth: 2,
            },
            {
                label: 'Gestión Eficiente',
                data: [Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, data[18], data[19], data[20]],
                fill: true,
                backgroundColor: 'rgb(244, 208, 111, 0.4)',
                borderColor: 'rgb(244, 208, 111, 0.4)',
                borderWidth: 2,
            },
        ],
    }

    return (<Radar data={dataChart} options={options} redraw={true} updateMode="active" />)
}

export default Chart
