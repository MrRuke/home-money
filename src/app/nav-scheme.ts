import { Routes } from '@angular/router';

import { AuthComponent } from './old/auth/auth.component';
import { LoginComponent } from './old/auth/login/login.component';
import { RegistrationComponent } from './old/auth/registration/registration.component';
import { AuthGuard } from './old/shared/services/auth.guard';
import { HistoryDetailComponent } from './old/system/history-page/history-detail/history-detail.component';
import { HistoryPageComponent } from './old/system/history-page/history-page.component';
import { SystemComponent } from './old/system/system.component';

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
        path: Urls.system.history.url,
        component: HistoryPageComponent,
      },
      {
        path: Urls.system.history.detail.url,
        component: HistoryDetailComponent,
      },
    ],
  },
];

export const AppScheme: Routes = [
  { path: Urls.url, redirectTo: 'login', pathMatch: 'full' },
  { path: Urls.system.url, redirectTo: 'system/bill', pathMatch: 'full' },
];
