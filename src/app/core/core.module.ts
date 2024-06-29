import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutes } from '../app.routes';
import { HttpErrorInterceptor } from './interceptors/http-error-interceptor.interceptor';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { httpGuestInterceptorInterceptor } from './interceptors/http-guest-interceptor.interceptor';

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
      { path: '**', redirectTo: AppRoutes.integration } 
    ],
  },
];

@NgModule({
  declarations: [MainLayoutComponent],
  imports: [CommonModule, RouterModule.forChild(routes), HttpClientModule],
  exports: [RouterModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: httpGuestInterceptorInterceptor,
      multi: true,
    },
  ],
})
export class CoreModule {}
