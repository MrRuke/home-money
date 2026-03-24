import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HistoryLayoutComponent } from '@app/modules/history/layout/history-layout.component';

@NgModule({
    imports: [RouterModule.forChild([
        {
            path: '',
            component: HistoryLayoutComponent,
        },
    ])],
    exports: [RouterModule],
})
export class HistoryRoutingModule {
}
