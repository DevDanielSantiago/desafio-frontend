import { Component, OnInit, ViewChild } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { SensorsService } from '../../shared/services/sensors.service';

import { chartColours, chartLabels, chartLegend, chartOptions, chartType } from './chart/config';
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

  ngOnInit(): void {}

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
