import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainMenuComponent } from './main-menu.component';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  declarations: [MainMenuComponent],
  imports: [
    CommonModule,
    RouterModule,
    DropdownModule,
  ],
  exports: [
    MainMenuComponent,
  ],
})
export class MainMenuModule {
}
