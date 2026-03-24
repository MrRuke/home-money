import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CustomButtonModule } from '@app/components/custom-button/custom-button.module';
import { HistoryRoutingModule } from '@app/modules/history/history-routing.module';
import { CostPipeModule } from '@app/services/cost.pipe.module';
import { TranslocoRootModule } from '@app/transloco-root.module';
import { HistoryTableComponent } from './components/history-table/history-table.component';
import { HistoryLayoutComponent } from './layout/history-layout.component';

@NgModule({
    imports: [
        CommonModule,
        HistoryRoutingModule,
        CostPipeModule,
        TranslocoRootModule,
        CustomButtonModule,
        HistoryLayoutComponent, HistoryTableComponent,
    ],
})
export class HistoryModule {
}
