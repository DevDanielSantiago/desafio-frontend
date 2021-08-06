import { Component, OnInit, ViewChild } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { SensorsService } from '../../shared/services/sensors.service';

import { chartColours, chartLabels, chartLegend, chartOptions, chartType } from './config/charts';
import { initialSensorState } from './config/sensor';
import { ChartColorsType, ChartDataType } from './models/chart';

import { statusSensorType } from './models/sensor';

@Component({
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {

	constructor(private sensorsService: SensorsService) {}

  public sensorStatus: statusSensorType[] = [
    {
      title: 'Quarto 1',
      temperature: 0,
      consumption: 0
    },
    {
      title: 'Quarto 2',
      temperature: 0,
      consumption: 0
    },
    {
      title: 'Sala',
      temperature: 0,
      consumption: 0
    },
    {
      title: 'Cozinha',
      temperature: 0,
      consumption: 0
    }
  ]

  public chartElements = 10;
  public chartSensorOne: string[] = [];
  public chartSensorTwo: string[] = [];
  public chartSensorTree: string[] = [];
  public chartSensorFour: string[] = [];
  public mainChartData: ChartDataType[] = [
    {
      data: this.chartSensorOne,
      label: 'Quardo 1'
    },
    {
      data: this.chartSensorTwo,
      label: 'Quarto 2'
    },
    {
      data: this.chartSensorTree,
      label: 'Sala'
    },
    {
      data: this.chartSensorFour,
      label: 'Cozinha'
    }
  ];
  
  public mainChartLabels: string[] = chartLabels;
  public mainChartOptions: any = chartOptions;
  public mainChartColours: ChartColorsType[] = chartColours;
  public mainChartLegend: boolean = chartLegend;
  public mainChartType: string = chartType;

	@ViewChild(BaseChartDirective) chart: BaseChartDirective;

  ngOnInit(): void {
		this.getSensorTemperatureOne();
		this.getSensorTemperatureTwo();
		this.getSensorTemperatureTree();
		this.getSensorTemperatureFour();

		this.getSensorConsumptionOne();
		this.getSensorConsumptionTwo();
		this.getSensorConsumptionTree();
		this.getSensorConsumptionFour();
  }

	getSensorTemperatureOne() {
		this.sensorsService.sensorTemperatureOne().subscribe((response) => {
			this.updateStatusSensor(response);
		})
	}

	getSensorTemperatureTwo() {
		this.sensorsService.sensorTemperatureTwo().subscribe((response) => {
			this.updateStatusSensor(response);
		})
	}

	getSensorTemperatureTree() {
		this.sensorsService.sensorTemperatureTree().subscribe((response) => {
			this.updateStatusSensor(response);
		})
	}

	getSensorTemperatureFour() {
		this.sensorsService.sensorTemperatureFour().subscribe((response) => {
			this.updateStatusSensor(response);
		})
	}

	getSensorConsumptionOne() {
		this.sensorsService.sensorConsumptionOne().subscribe((response) => {
			this.updateStatusSensor(response);
			this.updateSensorCharts(response);
		})
	}

	getSensorConsumptionTwo() {
		this.sensorsService.sensorConsumptionTwo().subscribe((response) => {
			this.updateStatusSensor(response);
			this.updateSensorCharts(response);
		})
	}

	getSensorConsumptionTree() {
		this.sensorsService.sensorConsumptionTree().subscribe((response) => {
			this.updateStatusSensor(response);
			this.updateSensorCharts(response);
		})
	}

	getSensorConsumptionFour() {
		this.sensorsService.sensorConsumptionFour().subscribe((response) => {
			this.updateStatusSensor(response);
			this.updateSensorCharts(response);
		})
	}

	updateStatusSensor(sensorEmmited: any) {
		this.sensorStatus = this.sensorStatus.map((sensor) => {
			if (sensor.title === sensorEmmited.title)
				return Object.assign({}, sensor, sensorEmmited);

			return sensor;
		})
	}

	updateSensorCharts(sensorEmmited: any) {
		if (sensorEmmited.title === 'Quarto 1') {
			if (this.chartSensorOne.length < 12) {
				this.chartSensorOne.push(sensorEmmited.consumption);
			} else {
				this.chartSensorOne.shift();
				this.chartSensorOne.push(sensorEmmited.consumption);
				this.chart.chart.update()
			}
		}

		if (sensorEmmited.title === 'Quarto 2') {
			if (this.chartSensorTwo.length < 12) {
				this.chartSensorTwo.push(sensorEmmited.consumption);
			} else {
				this.chartSensorTwo.shift();
				this.chartSensorTwo.push(sensorEmmited.consumption);
				this.chart.chart.update()
			}
		}

		if (sensorEmmited.title === 'Sala') {
			if (this.chartSensorTree.length < 12) {
				this.chartSensorTree.push(sensorEmmited.consumption);
			} else {
				this.chartSensorTree.shift();
				this.chartSensorTree.push(sensorEmmited.consumption);
				this.chart.chart.update()
			}
		}

		if (sensorEmmited.title === 'Cozinha') {
			if (this.chartSensorFour.length < 12) {
				this.chartSensorFour.push(sensorEmmited.consumption);
			} else {
				this.chartSensorFour.shift();
				this.chartSensorFour.push(sensorEmmited.consumption);
				this.chart.chart.update()
			}
		}
	}

  getSensorHigherConsumption(): statusSensorType[] {
    try {
      let sensorHigherConsumption: statusSensorType = this.sensorStatus[0];
      for (const sensor of this.sensorStatus) {
        if (sensorHigherConsumption.consumption < sensor.consumption) {
          sensorHigherConsumption = sensor;
        }
      }
      return [sensorHigherConsumption];
    } catch (error) {
      console.error("Sensores não encontrados");
    }
  }
}
