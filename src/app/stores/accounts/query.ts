import { Injectable } from '@angular/core';
import { AccountElement } from '@app/apis/accounts/models';
import { AccountsState } from '@app/stores/accounts/model';
import { AccountsStore } from '@app/stores/accounts/store';
import { QueryEntity } from '@datorama/akita';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AccountsQuery extends QueryEntity<AccountsState> {
  constructor(store: AccountsStore) {
    super(store);
  }

  public selectAccounts(): Observable<AccountElement[]> {
    return this.selectAll();
  }
}
