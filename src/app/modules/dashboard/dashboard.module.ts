import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CostPipeModule } from '@app/services/cost.pipe.module';
import { DashboardLayoutComponent } from './layout/dashboard-layout.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { CreateAccountDialogComponent } from './create-account-dialog/create-account-dialog.component';
import { DialogModule } from '@app/components/dialog/dialog.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomButtonModule } from '@app/components/custom-button/custom-button.module';

@NgModule({
    imports: [
        CommonModule,
        DashboardRoutingModule,
        CostPipeModule,
        DialogModule,
        ReactiveFormsModule,
        FormsModule,
        CustomButtonModule,
        DashboardLayoutComponent, CreateAccountDialogComponent,
    ],
})
export class DashboardModule {
}
