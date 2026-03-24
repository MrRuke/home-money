import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RecordsLayoutComponent } from './layout/records-layout.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: RecordsLayoutComponent,
            },
        ]),
    ],
    exports: [RouterModule],
})
export class RecordsRoutingModule {
}
