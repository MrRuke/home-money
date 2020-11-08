import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PlanningLayoutComponent } from './layout/planning-layout.component';
import { PlanningRoutingModule } from './planning-routing.module';

@NgModule({
  declarations: [PlanningLayoutComponent],
  imports: [
    CommonModule,
    PlanningRoutingModule,
  ],
})
export class PlanningModule {
}
