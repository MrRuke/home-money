import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SystemScheme } from '@app/nav-scheme';

@NgModule({
  imports: [RouterModule.forChild(SystemScheme)],
  exports: [RouterModule],
})
export class SystemRoutingModule {
}
