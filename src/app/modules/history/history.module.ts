import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HistoryRoutingModule } from '@app/modules/history/history-routing.module';

import { TranslocoRootModule } from '@app/transloco-root.module';
import { HistoryTableComponent } from './components/history-table/history-table.component';
import { HistoryLayoutComponent } from './layout/history-layout.component';

@NgModule({
    imports: [
        CommonModule,
        HistoryRoutingModule,
        TranslocoRootModule,
        HistoryLayoutComponent, HistoryTableComponent,
    ],
})
export class HistoryModule {
}
