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
}
