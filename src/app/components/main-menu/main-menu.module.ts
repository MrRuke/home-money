import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainMenuComponent } from './main-menu.component';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  declarations: [MainMenuComponent],
  imports: [
    CommonModule,
    RouterModule,
    ButtonModule,
    MenuModule,
    DropdownModule,
  ],
  exports: [
    MainMenuComponent,
  ],
})
export class MainMenuModule {
}
