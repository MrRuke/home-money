import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';

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
    MatCardModule,
    MatButtonModule,
  ],
})
export class RecordsModule {
}
