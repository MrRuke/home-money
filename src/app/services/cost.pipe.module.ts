import { NgModule } from '@angular/core';

import { AppCostPipe } from './cost.pipe';

@NgModule({
    imports: [AppCostPipe],
    exports: [
        AppCostPipe,
    ],
})
export class CostPipeModule {
}
