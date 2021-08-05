import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-stats',
  templateUrl: './card-stats.component.html',
  styleUrls: ['./card-stats.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardStatsComponent implements OnInit {

  @Input() title: string;
  @Input() temperature: number;
  @Input() consumption: number;

  constructor() { }

  ngOnInit(): void {}

}
