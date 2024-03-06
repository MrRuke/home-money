import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HistoryRoutingModule } from '@app/modules/history/history-routing.module';
import { CostPipeModule } from '@app/services/cost.pipe.module';
import { HistoryLayoutComponent } from './layout/history-layout.component';
import { HistoryTableComponent } from './components/history-table/history-table.component';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [HistoryLayoutComponent, HistoryTableComponent],
  imports: [
    CommonModule,
    HistoryRoutingModule,
    CostPipeModule,
    TableModule,
  ],
})
export class HistoryModule {
}
