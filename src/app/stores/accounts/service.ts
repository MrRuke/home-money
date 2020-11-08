import { Injectable } from '@angular/core';
import { AccountsApi } from '@app/apis/accounts/api';
import { AccountRequest } from '@app/apis/accounts/models';
import { AccountsStore } from '@app/stores/accounts/store';
import { Observable } from 'rxjs';
import { mapTo, tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AccountsService {
  constructor(
    private api: AccountsApi,
    private store: AccountsStore,
  ) {
  }

  public load(): Observable<void> {
    this.store.setLoading(true);

    return this.api.getAccounts().pipe(
      tap(accounts => this.store.set(accounts)),
      tap(() => this.store.setLoading(false)),
      mapTo(void 0),
    );
  }

  public addElement(account: AccountRequest): Observable<void> {
    this.store.setLoading(true);

    return this.api.addAccount(account).pipe(
      tap(res => this.store.add(res)),
      tap(() => this.store.setLoading(false)),
      mapTo(void 0),
    );
  }
}
