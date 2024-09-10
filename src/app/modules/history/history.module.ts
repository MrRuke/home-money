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
import { TranslocoRootModule } from '@app/transloco-root.module';
import { CustomButtonModule } from '@app/components/custom-button/custom-button.module';

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
    TranslocoRootModule,
    CustomButtonModule,
  ],
})
export class HistoryModule {
}
