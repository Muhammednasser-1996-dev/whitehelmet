import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './components/profile/profile.component';
import { StatsCardComponent } from './components/stats-card/stats-card.component';
import { DesignTaskRoutingModule } from './desing-task-routing.module';
import { StatisticsComponent } from './statistics/statistics.component';
import { SharedModule } from '../shared/shared.module';
import { ChartComponent } from './components/chart/chart.component';

@NgModule({
  declarations: [StatsCardComponent, ProfileComponent, StatisticsComponent, ChartComponent],

  imports: [CommonModule, DesignTaskRoutingModule, SharedModule],
})
export class DesingTaskModule {}
