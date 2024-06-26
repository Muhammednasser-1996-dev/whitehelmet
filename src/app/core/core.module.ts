import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutes } from '../app.routes';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: AppRoutes.design,
        pathMatch: 'full',
      },
      {
        path: AppRoutes.design,
        loadChildren: () =>
          import('./../desing-task/desing-task.module').then(
            (m) => m.DesingTaskModule
          ),
      },
      {
        path: AppRoutes.integration,
        loadChildren: () =>
          import('./../integration-task/integration-task.module').then(
            (m) => m.IntegrationTaskModule
          ),
      },
    ],
  },
];

@NgModule({
  declarations: [MainLayoutComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoreModule {}
