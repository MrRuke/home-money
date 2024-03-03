import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BemModule } from 'angular-bem';
import { HeaderComponent } from './header.component';


@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    BemModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
  ],
  exports: [
    HeaderComponent,
  ],
})
export class HeaderModule {
}
