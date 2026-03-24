import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CostPipeModule } from '@app/services/cost.pipe.module';
import { PlanningLayoutComponent } from './layout/planning-layout.component';
import { PlanningRoutingModule } from './planning-routing.module';
import { TranslocoRootModule } from '@app/transloco-root.module';

@NgModule({
    declarations: [PlanningLayoutComponent],
    imports: [
        CommonModule,
        PlanningRoutingModule,
        CostPipeModule,
        TranslocoRootModule,
    ],
})
export class PlanningModule {
}
