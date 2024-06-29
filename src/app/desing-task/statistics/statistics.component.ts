import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppRoutes } from '../../app.routes';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrl: './statistics.component.scss',
})
export class StatisticsComponent {
  Active: number = 2;
 

  setActive(value: number) {
    this.Active = value;
  }
  constructor(private router: Router) { }

  NavigateToIntegrationTask(){
    this.router.navigate([AppRoutes.integration]);
  }

}
