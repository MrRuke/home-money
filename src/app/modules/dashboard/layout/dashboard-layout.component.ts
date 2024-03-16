import { Component, OnInit } from '@angular/core';
import { AccountCurrencyTypes, AccountElement } from '@app/apis/accounts/models';
import { MetaService } from '@app/services/meta.service';
import { SubscriberComponent } from '@app/core/subscriber';
import { Store } from '@ngrx/store';
import { selectAccounts } from '@app/stores/account/account.selectors';
import { AccountsActions } from '@app/stores/account/account.actions';
import { finalize, tap } from 'rxjs';
import { AccountService } from '@app/stores/account/account.service';

@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.scss'],
})
export class DashboardLayoutComponent extends SubscriberComponent implements OnInit {
  public readonly accounts = this.store.select(selectAccounts);
  public isLoading = false;

  constructor(
    private accountService: AccountService,
    private store: Store,
    metaService: MetaService,
  ) {
    super();
    metaService.init({
      title: 'Dashboard',
      description: 'Page of dashboard',
      keywords: 'Dashboard',
    });
  }

  public ngOnInit(): void {
    this.isLoading = true;

    this.subscribe(this.accountService.load().pipe(
      tap((res) => {
        this.store.dispatch(AccountsActions.retrievedAccountList({ accounts: res }))
      }),
      finalize(() => {
        this.isLoading = false;
      }),
    ))
  }

  public onRemove(accountId: number): void {
    this.subscribe(this.accountService.delete(accountId).pipe(
      tap(() => {
        this.store.dispatch(AccountsActions.removeAccount({ accountId }));
      }),
    ));
  }

  public onAdd(): void {
    this.subscribe(this.accountService.add({
      value: 1200,
      currency: AccountCurrencyTypes.RUB,
    }).pipe(
      tap((account) => {
        this.store.dispatch(AccountsActions.addAccount({ account }));
      }),
    ));
  }

  public trackByAccounts(index: number, account: AccountElement): number {
    return account.id;
  }
}
