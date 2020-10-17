import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthScheme } from 'app/nav-scheme';

@NgModule({
  imports: [RouterModule.forChild(AuthScheme)],
  exports: [RouterModule],
})
export class AuthRoutingModule {
}
