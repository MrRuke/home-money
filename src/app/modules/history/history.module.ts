import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HistoryRoutingModule } from '@app/modules/history/history-routing.module';
import { BemModule } from 'angular-bem';
import { HistoryLayoutComponent } from './layout/history-layout.component';

@NgModule({
  declarations: [HistoryLayoutComponent],
  imports: [
    CommonModule,
    HistoryRoutingModule,
    BemModule,
  ],
})
export class HistoryModule {
}
