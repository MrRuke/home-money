import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TranslocoRootModule } from '../../transloco-root.module';
import { PlanningLayoutComponent } from './layout/planning-layout.component';
import { PlanningRoutingModule } from './planning-routing.module';

@NgModule({
    imports: [
        CommonModule,
        PlanningRoutingModule,
        TranslocoRootModule,
        PlanningLayoutComponent,
    ],
})
export class PlanningModule {
}
