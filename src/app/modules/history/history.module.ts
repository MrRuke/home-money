import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { HistoryRoutingModule } from '@app/modules/history/history-routing.module';
import { SystemModule } from '@app/old/system/system.module';
import { CostPipeModule } from '@app/services/cost.pipe.module';
import { BemModule } from 'angular-bem';
import { HistoryLayoutComponent } from './layout/history-layout.component';
import { HistoryTableComponent } from './components/history-table/history-table.component';

@NgModule({
  declarations: [HistoryLayoutComponent, HistoryTableComponent],
  imports: [
    CommonModule,
    HistoryRoutingModule,
    BemModule,
    MatTableModule,
    SystemModule,
    CostPipeModule,
  ],
})
export class HistoryModule {
}
