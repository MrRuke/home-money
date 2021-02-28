import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { BemModule } from 'angular-bem';
import { MainMenuComponent } from './main-menu.component';


@NgModule({
  declarations: [MainMenuComponent],
  imports: [
    CommonModule,
    BemModule,
    RouterModule,
    MatIconModule,
  ],
  exports: [
    MainMenuComponent,
  ],
})
export class MainMenuModule {
}
