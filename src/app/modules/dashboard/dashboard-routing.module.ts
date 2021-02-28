import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardLayoutComponent } from './layout/dashboard-layout.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: DashboardLayoutComponent,
      },
    ]),
  ],
  exports: [RouterModule],
})
export class DashboardRoutingModule {
}
