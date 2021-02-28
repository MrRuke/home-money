import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CostPipeModule } from '@app/services/cost.pipe.module';
import { BemModule } from 'angular-bem';
import { PlanningLayoutComponent } from './layout/planning-layout.component';
import { PlanningRoutingModule } from './planning-routing.module';

@NgModule({
  declarations: [PlanningLayoutComponent],
  imports: [
    CommonModule,
    PlanningRoutingModule,
    BemModule,
    MatCardModule,
    CostPipeModule,
  ],
})
export class PlanningModule {
}
