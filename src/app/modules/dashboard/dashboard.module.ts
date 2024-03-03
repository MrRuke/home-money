import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatIconModule } from '@angular/material/icon';
import { CostPipeModule } from '@app/services/cost.pipe.module';
import { BemModule } from 'angular-bem';
import { DashboardLayoutComponent } from './layout/dashboard-layout.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  declarations: [DashboardLayoutComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    BemModule,
    MatButtonModule,
    MatIconModule,
    CostPipeModule,
  ],
})
export class DashboardModule {
}
