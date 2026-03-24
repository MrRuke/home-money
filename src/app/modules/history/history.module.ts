import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TranslocoRootModule } from '../../transloco-root.module';
import { HistoryTableComponent } from './components/history-table/history-table.component';
import { HistoryRoutingModule } from './history-routing.module';
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
