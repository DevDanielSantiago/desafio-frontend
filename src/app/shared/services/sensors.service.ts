import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SensorConsumptionType, SensorTemperatureType } from './models/sensors';

@Injectable({
  providedIn: 'root'
})
export class SensorsService {

  private sensorInterval: number = 5000;

  constructor() { }

  generateConsumption(min: number, max: number): string {
    return (Math.random() * (max - min) + min).toFixed(2);
  }

  generateTemperature(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  sensorTemperatureOne(): Observable<SensorTemperatureType> {
    return new Observable((subscribe) => {
      setInterval(() => {
        const values: SensorTemperatureType = {
          title: 'Quarto 1',
          temperature: this.generateTemperature(30, 42),
        }
        subscribe.next(values);
      }, this.sensorInterval)
    });
  }

  sensorConsumptionOne(): Observable<SensorConsumptionType> {
    return new Observable((subscribe) => {
      setInterval(() => {
        const values: SensorConsumptionType = {
          title: 'Quarto 1',
          consumption: this.generateConsumption(2, 5)
        }
        subscribe.next(values);
      }, this.sensorInterval)
    });
  }

  sensorTemperatureTwo(): Observable<SensorTemperatureType> {
    return new Observable((subscribe) => {
      setInterval(() => {
        const values: SensorTemperatureType = {
          title: 'Quarto 2',
          temperature: this.generateTemperature(30, 42),
        }
        subscribe.next(values);
      }, this.sensorInterval)
    });
  }

  sensorConsumptionTwo(): Observable<SensorConsumptionType> {
    return new Observable((subscribe) => {
      setInterval(() => {
        const values: SensorConsumptionType = {
          title: 'Quarto 2',
          consumption: this.generateConsumption(2, 5)
        }
        subscribe.next(values);
      }, this.sensorInterval)
    });
  }

  sensorTemperatureTree(): Observable<SensorTemperatureType> {
    return new Observable((subscribe) => {
      setInterval(() => {
        const values: SensorTemperatureType = {
          title: 'Sala',
          temperature: this.generateTemperature(30, 42),
        }
        subscribe.next(values);
      }, this.sensorInterval)
    });
  }

  sensorConsumptionTree(): Observable<SensorConsumptionType> {
    return new Observable((subscribe) => {
      setInterval(() => {
        const values: SensorConsumptionType = {
          title: 'Sala',
          consumption: this.generateConsumption(2, 5)
        }
        subscribe.next(values);
      }, this.sensorInterval)
    });
  }

  sensorTemperatureFour(): Observable<SensorTemperatureType> {
    return new Observable((subscribe) => {
      setInterval(() => {
        const values: SensorTemperatureType = {
          title: 'Cozinha',
          temperature: this.generateTemperature(30, 42),
        }
        subscribe.next(values);
      }, this.sensorInterval)
    });
  }

  sensorConsumptionFour(): Observable<SensorConsumptionType> {
    return new Observable((subscribe) => {
      setInterval(() => {
        const values: SensorConsumptionType = {
          title: 'Cozinha',
          consumption: this.generateConsumption(2, 5)
        }
        subscribe.next(values);
      }, this.sensorInterval)
    });
  }
}
