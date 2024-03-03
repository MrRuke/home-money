import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { CostPipeModule } from '@app/services/cost.pipe.module';
import { PlanningLayoutComponent } from './layout/planning-layout.component';
import { PlanningRoutingModule } from './planning-routing.module';

@NgModule({
  declarations: [PlanningLayoutComponent],
  imports: [
    CommonModule,
    PlanningRoutingModule,
    MatCardModule,
    CostPipeModule,
  ],
})
export class PlanningModule {
}
