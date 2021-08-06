import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SensorsService {

  private sensorInterval: number = 5000;

  constructor() { }

  generateConsumption(min: number, max: number) {
    return (Math.random() * (max - min) + min).toFixed(2);
  }

  generateTemperature(min: number, max: number) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  sensorTemperatureOne() {
    return new Observable((subscribe) => {
      setInterval(() => {
        const values = {
          title: 'Quarto 1',
          temperature: this.generateTemperature(30, 42),
        }
        subscribe.next(values);
      }, this.sensorInterval)
    });
  }

  sensorConsumptionOne() {
    return new Observable((subscribe) => {
      setInterval(() => {
        const values = {
          title: 'Quarto 1',
          consumption: this.generateConsumption(2, 5)
        }
        subscribe.next(values);
      }, this.sensorInterval)
    });
  }

  sensorTemperatureTwo() {
    return new Observable((subscribe) => {
      setInterval(() => {
        const values = {
          title: 'Quarto 2',
          temperature: this.generateTemperature(30, 42),
        }
        subscribe.next(values);
      }, this.sensorInterval)
    });
  }

  sensorConsumptionTwo() {
    return new Observable((subscribe) => {
      setInterval(() => {
        const values = {
          title: 'Quarto 2',
          consumption: this.generateConsumption(2, 5)
        }
        subscribe.next(values);
      }, this.sensorInterval)
    });
  }

  sensorTemperatureTree() {
    return new Observable((subscribe) => {
      setInterval(() => {
        const values = {
          title: 'Sala',
          temperature: this.generateTemperature(30, 42),
        }
        subscribe.next(values);
      }, this.sensorInterval)
    });
  }

  sensorConsumptionTree() {
    return new Observable((subscribe) => {
      setInterval(() => {
        const values = {
          title: 'Sala',
          consumption: this.generateConsumption(2, 5)
        }
        subscribe.next(values);
      }, this.sensorInterval)
    });
  }

  sensorTemperatureFour() {
    return new Observable((subscribe) => {
      setInterval(() => {
        const values = {
          title: 'Cozinha',
          temperature: this.generateTemperature(30, 42),
        }
        subscribe.next(values);
      }, this.sensorInterval)
    });
  }

  sensorConsumptionFour() {
    return new Observable((subscribe) => {
      setInterval(() => {
        const values = {
          title: 'Cozinha',
          consumption: this.generateConsumption(2, 5)
        }
        subscribe.next(values);
      }, this.sensorInterval)
    });
  }
}
