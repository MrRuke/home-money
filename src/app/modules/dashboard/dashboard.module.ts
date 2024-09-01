import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CostPipeModule } from '@app/services/cost.pipe.module';
import { DashboardLayoutComponent } from './layout/dashboard-layout.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ButtonModule } from 'primeng/button';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { CreateAccountDialogComponent } from './create-account-dialog/create-account-dialog.component';
import { DialogModule } from '@app/components/dialog/dialog.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [DashboardLayoutComponent, CreateAccountDialogComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    CostPipeModule,
    ButtonModule,
    ProgressSpinnerModule,
    ConfirmDialogModule,
    ToastModule,
    DialogModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class DashboardModule {
}
