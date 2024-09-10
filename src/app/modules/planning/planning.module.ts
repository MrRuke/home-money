import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CostPipeModule } from '@app/services/cost.pipe.module';
import { PlanningLayoutComponent } from './layout/planning-layout.component';
import { PlanningRoutingModule } from './planning-routing.module';
import { CardModule } from 'primeng/card';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { TranslocoRootModule } from '@app/transloco-root.module';

@NgModule({
  declarations: [PlanningLayoutComponent],
  imports: [
    CommonModule,
    PlanningRoutingModule,
    CostPipeModule,
    CardModule,
    ProgressSpinnerModule,
    TranslocoRootModule,
  ],
})
export class PlanningModule {
}
