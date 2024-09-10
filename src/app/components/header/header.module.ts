import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header.component';
import { TranslocoRootModule } from '@app/transloco-root.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    TranslocoRootModule,
  ],
  exports: [
    HeaderComponent,
  ],
})
export class HeaderModule {
}
