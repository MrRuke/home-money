import { NgModule } from '@angular/core';

import { AppCostPipe } from './cost.pipe';

@NgModule({
  declarations: [
    AppCostPipe,
  ],
  exports: [
    AppCostPipe,
  ],
})
export class CostPipeModule {
}
