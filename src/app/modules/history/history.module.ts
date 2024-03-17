import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HistoryRoutingModule } from '@app/modules/history/history-routing.module';
import { CostPipeModule } from '@app/services/cost.pipe.module';
import { HistoryLayoutComponent } from './layout/history-layout.component';
import { HistoryTableComponent } from './components/history-table/history-table.component';
import { TableModule } from 'primeng/table';
import { ChipModule } from 'primeng/chip';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [HistoryLayoutComponent, HistoryTableComponent],
  imports: [
    CommonModule,
    HistoryRoutingModule,
    CostPipeModule,
    TableModule,
    ChipModule,
    ProgressSpinnerModule,
    ButtonModule,
    ConfirmDialogModule,
    ToastModule,
  ],
})
export class HistoryModule {
}
