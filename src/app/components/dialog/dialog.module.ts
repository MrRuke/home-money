import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DialogComponent } from './dialog.component';
import { CustomButtonModule } from '../custom-button/custom-button.module';

@NgModule({
    declarations: [DialogComponent],
    imports: [
        CommonModule,
        CustomButtonModule,
    ],
    exports: [
        DialogComponent,
    ],
})
export class DialogModule {
}
