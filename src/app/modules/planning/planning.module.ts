import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CostPipeModule } from '@app/services/cost.pipe.module';
import { PlanningLayoutComponent } from './layout/planning-layout.component';
import { PlanningRoutingModule } from './planning-routing.module';
import { CardModule } from 'primeng/card';

@NgModule({
  declarations: [PlanningLayoutComponent],
  imports: [
    CommonModule,
    PlanningRoutingModule,
    CostPipeModule,
    CardModule,
  ],
})
export class PlanningModule {
}
