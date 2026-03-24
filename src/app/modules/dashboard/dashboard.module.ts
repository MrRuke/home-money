import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CreateAccountDialogComponent } from './create-account-dialog/create-account-dialog.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardLayoutComponent } from './layout/dashboard-layout.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
    imports: [
        CommonModule,
        DashboardRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        DashboardLayoutComponent, CreateAccountDialogComponent,
    ],
})
export class DashboardModule {
}
