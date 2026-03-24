import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DialogComponent } from './dialog.component';
import { CustomButtonModule } from '../custom-button/custom-button.module';

@NgModule({
    imports: [
        CommonModule,
        CustomButtonModule,
        DialogComponent,
    ],
    exports: [
        DialogComponent,
    ],
})
export class DialogModule {
}
