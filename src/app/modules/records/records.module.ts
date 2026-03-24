import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TranslocoRootModule } from '@app/transloco-root.module';
import { AddEventComponent } from './components/add-event/add-event.component';
import { CreateCategoryComponent } from './components/create-category/create-category.component';
import { RecordsLayoutComponent } from './layout/records-layout.component';
import { RecordsRoutingModule } from './records-routing.module';


@NgModule({
    imports: [
        CommonModule,
        RecordsRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        TranslocoRootModule,
        RecordsLayoutComponent,
        CreateCategoryComponent,
        AddEventComponent,
    ],
})
export class RecordsModule {
}
