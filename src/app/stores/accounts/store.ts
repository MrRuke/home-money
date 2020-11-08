import { Injectable } from '@angular/core';
import { AccountsState } from '@app/stores/accounts/model';
import { EntityStore, StoreConfig } from '@datorama/akita';

@StoreConfig({ name: 'events' })
@Injectable({ providedIn: 'root' })
export class AccountsStore extends EntityStore<AccountsState> {
  constructor() {
    super();
  }
}
