import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DashboardLayoutComponent } from './layout/dashboard-layout.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  declarations: [DashboardLayoutComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
  ],
})
export class DashboardModule {
}
