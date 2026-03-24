import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CostPipeModule } from '@app/services/cost.pipe.module';
import { PlanningLayoutComponent } from './layout/planning-layout.component';
import { PlanningRoutingModule } from './planning-routing.module';
import { TranslocoRootModule } from '@app/transloco-root.module';

@NgModule({
    imports: [
        CommonModule,
        PlanningRoutingModule,
        CostPipeModule,
        TranslocoRootModule,
        PlanningLayoutComponent,
    ],
})
export class PlanningModule {
}
