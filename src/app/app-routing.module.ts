import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [RouterModule.forRoot([
    {
      path: 'history',
      loadChildren: () => import('./modules/history/history.module')
        .then(m => m.HistoryModule),
    },
    {
      path: 'records',
      loadChildren: () => import('./modules/records/records.module')
        .then(m => m.RecordsModule),
    },
    {
      path: 'planning',
      loadChildren: () => import('./modules/planning/planning.module')
        .then(m => m.PlanningModule),
    },
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule {}
