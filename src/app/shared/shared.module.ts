import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardStatsComponent } from './components/card-stats/card-stats.component';

@NgModule({
  declarations: [
    CardStatsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardStatsComponent
  ]
})
export class SharedModule { }
