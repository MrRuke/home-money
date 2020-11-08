import { Injectable } from '@angular/core';
import { AccountsService } from '@app/stores/accounts/service';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DashboardUseCases {
  constructor(
    private accountsService: AccountsService,
  ) {
  }

  public loadAccounts(): Observable<void> {
    return this.accountsService.load();
  }
}
