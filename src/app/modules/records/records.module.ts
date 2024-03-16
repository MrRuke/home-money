import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CreateCategoryComponent } from './components/create-category/create-category.component';
import { RecordsLayoutComponent } from './layout/records-layout.component';
import { RecordsRoutingModule } from './records-routing.module';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { AddEventComponent } from './components/add-event/add-event.component';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DropdownModule } from 'primeng/dropdown';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ToastModule } from 'primeng/toast';

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
    ButtonModule,
    CardModule,
    InputTextModule,
    InputNumberModule,
    RadioButtonModule,
    DropdownModule,
    ProgressSpinnerModule,
    ToastModule,
  ],
})
export class RecordsModule {
}
