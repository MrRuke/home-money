import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AccountsApi } from "../../apis/accounts/api";
import { AccountElement, AccountRequest } from "../../apis/accounts/models";

@Injectable({ providedIn: "root" })
export class AccountService {
    private api = inject(AccountsApi);

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
