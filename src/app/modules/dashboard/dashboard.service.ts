import { Injectable } from '@angular/core';
import { AccountElement } from '@app/apis/accounts/models';
import { AccountsQuery } from '@app/stores/accounts/query';
import { AccountsService } from '@app/stores/accounts/service';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DashboardService {
  constructor(
    private accountsService: AccountsService,
    private accountsQuery: AccountsQuery,
  ) {
  }

  public loadAccounts(): Observable<void> {
    return this.accountsService.load();
  }

  public selectAccounts(): Observable<AccountElement[]> {
    return this.accountsQuery.selectAccounts();
  }
}
