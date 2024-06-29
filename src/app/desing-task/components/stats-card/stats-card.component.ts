import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stats-card',
  templateUrl: './stats-card.component.html',
  styleUrl: './stats-card.component.scss',
})
export class StatsCardComponent {
  iconColor: string = '#939aa3';

  @Input() title: string | undefined;
  @Input() number: string | undefined;
  @Input() subTtitle: string | undefined;
  @Input() footer: string | undefined;
  @Input() color: string | undefined;
  @Input() hideActions: boolean = false;
  @Input() isConditionMet: boolean = false;
}
