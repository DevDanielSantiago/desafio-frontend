import { Component, OnInit } from '@angular/core';

import { statusSensorType } from './models/sensor';

@Component({
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  public sensorStatus: statusSensorType[] = [
    {
      title: 'Quarto 1',
      temperature: 30,
      consumption: 2
    },
    {
      title: 'Quarto 2',
      temperature: 32,
      consumption: 3
    },
    {
      title: 'Sala',
      temperature: 35,
      consumption: 3.4
    },
    {
      title: 'Cozinha',
      temperature: 38,
      consumption: 4.1
    }
  ]

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
