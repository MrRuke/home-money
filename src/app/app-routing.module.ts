import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppScheme } from 'app/nav-scheme';

@NgModule({
  imports: [RouterModule.forRoot(AppScheme)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
