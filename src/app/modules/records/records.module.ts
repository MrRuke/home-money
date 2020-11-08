import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RecordsLayoutComponent } from './layout/records-layout.component';
import { RecordsRoutingModule } from './records-routing.module';

@NgModule({
  declarations: [RecordsLayoutComponent],
  imports: [
    CommonModule,
    RecordsRoutingModule,
  ],
})
export class RecordsModule {
}
