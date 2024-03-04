import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainMenuComponent } from './main-menu.component';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';


@NgModule({
  declarations: [MainMenuComponent],
  imports: [
    CommonModule,
    RouterModule,
    ButtonModule,
    MenuModule,
  ],
  exports: [
    MainMenuComponent,
  ],
})
export class MainMenuModule {
}
