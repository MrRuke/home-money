import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header.component';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    ToolbarModule,
    ButtonModule,
  ],
  exports: [
    HeaderComponent,
  ],
})
export class HeaderModule {
}
