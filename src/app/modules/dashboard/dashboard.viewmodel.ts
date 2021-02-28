import { Injectable } from '@angular/core';
import { AccountElement } from '@app/apis/accounts/models';
import { AccountsQuery } from '@app/stores/accounts/query';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DashboardViewModel {
  constructor(
    private accountsQuery: AccountsQuery,
  ) {
  }

  public selectAccounts(): Observable<AccountElement[]> {
    return this.accountsQuery.selectAccounts();
  }
}
