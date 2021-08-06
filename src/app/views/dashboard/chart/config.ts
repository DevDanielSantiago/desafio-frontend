import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { ChartColorsType } from '../models/chart';

export const chartLegend: boolean = false;
export const chartType: string = 'line';

export const chartLabels: string[] = [
    '5 segundos',
    '10 segundos',
    '15 segundos',
    '20 segundos',
    '25 segundos',
    '30 segundos',
    '35 segundos',
    '40 segundos',
    '45 segundos',
    '50 segundos',
    '55 segundos',
    '60 segundos'
];

export const chartColours: ChartColorsType[] = [
    {
        backgroundColor: hexToRgba(getStyle('--info'), 10),
        borderColor: getStyle('--info'),
        pointHoverBackgroundColor: '#fff'
    },
    {
        backgroundColor: 'transparent',
        borderColor: getStyle('--success'),
        pointHoverBackgroundColor: '#fff'
    },
    {
        backgroundColor: 'transparent',
        borderColor: getStyle('--warning'),
        pointHoverBackgroundColor: '#fff',
    },
    {
        backgroundColor: 'transparent',
        borderColor: getStyle('--danger'),
        pointHoverBackgroundColor: '#fff',
    }
];

export const chartOptions: any = {
    tooltips: {
        enabled: false,
        custom: CustomTooltips,
        intersect: true,
        mode: 'index',
        position: 'nearest',
        callbacks: {
            labelColor: function(tooltipItem, chart) {
                return { backgroundColor: chart.data.datasets[tooltipItem.datasetIndex].borderColor };
            }
        }
    },
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        xAxes: [{
            gridLines: {
                drawOnChartArea: false,
            },
            ticks: {
                callback: function(value: any) {
                    return value.charAt(0);
                }
            }
        }],
        yAxes: [{
            ticks: {
                beginAtZero: true,
                maxTicksLimit: 5,
                stepSize: Math.ceil(250 / 5),
                max: 6
            }
        }]
    },
    elements: {
        line: {
            borderWidth: 2
        },
        point: {
            radius: 0,
            hitRadius: 10,
            hoverRadius: 4,
            hoverBorderWidth: 3,
        }
    },
    legend: {
        display: false
    }
};