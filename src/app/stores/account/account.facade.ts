import { inject, Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { AccountRequest } from "../../apis/accounts/models";
import { AccountsActions } from "./account.actions";
import { selectAccounts, selectIsLoading } from "./account.selectors";

@Injectable({ providedIn: "root" })
export class AccountFacade {
    private store = inject(Store);

    public readonly accounts = this.store.selectSignal(selectAccounts);
    public readonly isLoading = this.store.selectSignal(selectIsLoading);

    public createNewAccount(account: AccountRequest): void {
        this.store.dispatch(AccountsActions.addAccount({ account }));
    }

    public loadAccounts(): void {
        this.store.dispatch(AccountsActions.retrievedAccountList());
    }

    public removeAccount(accountId: number): void {
        this.store.dispatch(AccountsActions.removeAccount({ accountId }));
    }
}
