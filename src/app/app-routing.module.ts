import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [RouterModule.forRoot([
    {
      path: 'future/history',
      loadChildren: () => import('./modules/history/history.module')
        .then(m => m.HistoryModule),
    },
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule {}
