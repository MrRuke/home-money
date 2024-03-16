import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CostPipeModule } from '@app/services/cost.pipe.module';
import { DashboardLayoutComponent } from './layout/dashboard-layout.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ButtonModule } from 'primeng/button';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@NgModule({
  declarations: [DashboardLayoutComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    CostPipeModule,
    ButtonModule,
    ProgressSpinnerModule,
  ],
})
export class DashboardModule {
}
