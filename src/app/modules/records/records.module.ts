import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CreateCategoryComponent } from './components/create-category/create-category.component';
import { RecordsLayoutComponent } from './layout/records-layout.component';
import { RecordsRoutingModule } from './records-routing.module';
import { AddEventComponent } from './components/add-event/add-event.component';
import { TranslocoRootModule } from '@app/transloco-root.module';
import { CustomButtonModule } from '@app/components/custom-button/custom-button.module';

@NgModule({
  declarations: [
    RecordsLayoutComponent,
    CreateCategoryComponent,
    AddEventComponent,
  ],
  imports: [
    CommonModule,
    RecordsRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    TranslocoRootModule,
    CustomButtonModule,
  ],
})
export class RecordsModule {
}
