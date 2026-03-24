import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PlanningLayoutComponent } from './layout/planning-layout.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: PlanningLayoutComponent,
            },
        ]),
    ],
    exports: [RouterModule],
})
export class PlanningRoutingModule {
}
