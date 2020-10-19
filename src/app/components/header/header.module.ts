import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BemModule } from 'angular-bem';
import { HeaderComponent } from './header.component';


@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    BemModule,
  ],
  exports: [
    HeaderComponent,
  ],
})
export class HeaderModule {
}
