import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BemModule } from 'angular-bem';

import { CreateCategoryComponent } from './components/create-category/create-category.component';
import { RecordsLayoutComponent } from './layout/records-layout.component';
import { RecordsRoutingModule } from './records-routing.module';

@NgModule({
  declarations: [RecordsLayoutComponent, CreateCategoryComponent],
  imports: [
    CommonModule,
    RecordsRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    BemModule,
    MatCardModule,
    MatButtonModule,
  ],
})
export class RecordsModule {
}
