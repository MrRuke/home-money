import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainMenuComponent } from './main-menu.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        MainMenuComponent,
    ],
    exports: [
        MainMenuComponent,
    ],
})
export class MainMenuModule {
}
