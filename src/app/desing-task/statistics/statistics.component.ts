import { Component } from '@angular/core';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrl: './statistics.component.scss',
})
export class StatisticsComponent {
  Active: number = 2;
  constructor() {}

  setActive(value: number) {
    this.Active = value;
  }
}
