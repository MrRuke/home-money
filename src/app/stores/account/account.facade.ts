import { inject, Injectable } from "@angular/core";
import { AccountRequest } from "@app/apis/accounts/models";
import { Store } from "@ngrx/store";
import { AccountsActions } from "./account.actions";

@Injectable({ providedIn: "root" })
export class AccountFacade {
  private store = inject(Store);

  public createNewAccount(account: AccountRequest): void {
    this.store.dispatch(AccountsActions.addAccount({ account }));
  }
}
