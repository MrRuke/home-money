import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SystemComponent} from "./system/system.component";

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
