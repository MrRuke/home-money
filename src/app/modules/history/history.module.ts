import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatLegacyTableModule as MatTableModule } from '@angular/material/legacy-table';
import { HistoryRoutingModule } from '@app/modules/history/history-routing.module';
import { SystemModule } from '@app/old/system/system.module';
import { CostPipeModule } from '@app/services/cost.pipe.module';
import { HistoryLayoutComponent } from './layout/history-layout.component';
import { HistoryTableComponent } from './components/history-table/history-table.component';

@NgModule({
  declarations: [HistoryLayoutComponent, HistoryTableComponent],
  imports: [
    CommonModule,
    HistoryRoutingModule,
    MatTableModule,
    SystemModule,
    CostPipeModule,
  ],
})
export class HistoryModule {
}
