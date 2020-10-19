import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BemModule } from 'angular-bem';
import { MainMenuComponent } from './main-menu.component';


@NgModule({
  declarations: [MainMenuComponent],
  imports: [
    CommonModule,
    BemModule,
  ],
  exports: [
    MainMenuComponent,
  ],
})
export class MainMenuModule {
}
