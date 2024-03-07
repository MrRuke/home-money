import { Injectable } from '@angular/core';
import { AccountsApi } from '@app/apis/accounts/api';
import { AccountElement, AccountRequest } from '@app/apis/accounts/models';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AccountService {
  constructor(
    private api: AccountsApi,
  ) {
  }

  public load(): Observable<AccountElement[]> {
    return this.api.getAccounts();
  }

  public add(account: AccountRequest): Observable<AccountElement> {
    return this.api.addAccount(account);
  }

  public delete(accountId: number): Observable<void> {
    return this.api.deleteAccount(accountId);
  }
}
