import { Routes } from '@angular/router';

import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import { SystemComponent } from './system/system.component';
import { AuthGuard } from './shared/services/auth.guard';
import { BillPageComponent } from './system/bill-page/bill-page.component';
import { HistoryPageComponent } from './system/history-page/history-page.component';
import { HistoryDetailComponent } from './system/history-page/history-detail/history-detail.component';
import { PlanningPageComponent } from './system/planning-page/planning-page.component';
import { RecordsPageComponent } from './system/records-page/records-page.component';
import { UsersPageComponent } from './system/users-page/users-page.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

export const Urls = {
  url: '',
  auth: {
    login: {
      url: 'login',
    },
    registration: {
      url: 'registration',
    },
  },
  system: {
    url: 'system',
    bill: {
      url: 'bill',
    },
    history: {
      url: 'history',
      detail: {
        url: 'history:id',
      },
    },
    planning: {
      url: 'planning',
    },
    records: {
      url: 'records',
    },
    users: {
      url: 'users',
    },
  },
};

export const AuthScheme: Routes = [
  {
    path: Urls.url,
    component: AuthComponent,
    children: [
      {
        path: Urls.auth.login.url,
        component: LoginComponent,
      },
      {
        path: Urls.auth.registration.url,
        component: RegistrationComponent,
      },
    ],
  },
];

export const SystemScheme: Routes = [
  {
    path: Urls.system.url,
    component: SystemComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: Urls.system.bill.url,
        component: BillPageComponent,
      },
      {
        path: Urls.system.history.url,
        component: HistoryPageComponent,
      },
      {
        path: Urls.system.history.detail.url,
        component: HistoryDetailComponent,
      },
      {
        path: Urls.system.planning.url,
        component: PlanningPageComponent,
      },
      {
        path: Urls.system.records.url,
        component: RecordsPageComponent,
      },
      {
        path: Urls.system.users.url,
        component: UsersPageComponent,
      },
    ],
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

export const AppScheme: Routes = [
  {path: Urls.url, redirectTo: 'login', pathMatch: 'full'},
  {path: Urls.system.url, redirectTo: 'system/bill', pathMatch: 'full'}
];
