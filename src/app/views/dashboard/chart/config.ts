import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { ChartColorsType } from '../models/chart';

export const chartLegend = false;
export const chartType = 'line';

export const chartLabels: string[] = [
    '0.0 segundos',
    '0.5 segundos',
    '1.0 segundos',
    '1.5 segundos',
    '2.0 segundos',
    '2.5 segundos',
    '3.0 segundos',
    '3.5 segundos',
    '4.0 segundos',
    '4.5 segundos',
    '5.0 segundos',
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