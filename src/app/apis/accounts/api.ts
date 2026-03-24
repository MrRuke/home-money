import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { BaseApi } from '../base-api';
import { AccountElement, AccountRequest } from './models';

@Injectable({ providedIn: 'root' })
export class AccountsApi extends BaseApi {
    public addAccount(account: AccountRequest): Observable<AccountElement> {
        return this.post<AccountRequest, AccountElement>('accounts', account).pipe(delay(400));
    }

    public getAccounts(): Observable<AccountElement[]> {
        return this.get<AccountElement[]>('accounts').pipe(delay(400));
    }

    public updateAccount(account: AccountElement): Observable<AccountElement> {
        return this.put<AccountElement, AccountElement>(`accounts/${account.id}`, account).pipe(delay(400));
    }

    public getAccountById(id: number): Observable<AccountElement> {
        return this.get<AccountElement>(`accounts/${id}`).pipe(delay(400));
    }

    public deleteAccount(id: number): Observable<void> {
        return this.delete(`accounts/${id}`).pipe(delay(400));
    }
}
